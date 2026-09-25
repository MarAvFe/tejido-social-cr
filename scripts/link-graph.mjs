#!/usr/bin/env node
// Doc→doc link graph for tejido-social-web/docs, checked against the
// concept-thread registry in CONTENT-FRAMEWORK.md.
// Usage: node scripts/link-graph.mjs [--check] [--root <repo>]
//   default: print the report; --check: exit 1 on registry problems.

import {readdirSync, readFileSync, statSync, existsSync} from 'node:fs';
import {dirname, join, relative, resolve, posix} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

function walk(dir, test, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.')) continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, test, out);
    else if (test(name)) out.push(path);
  }
  return out;
}

// Normalize a /docs/... route or a docs-relative path to "a/b.md".
function toDocId(route, docIds) {
  const clean = route.replace(/[#?].*$/, '').replace(/\/$/, '');
  for (const id of [`${clean}.md`, `${clean}/index.md`, clean]) {
    if (docIds.has(id)) return id;
  }
  return null;
}

export function buildGraph(root) {
  const site = join(root, 'tejido-social-web');
  const docsDir = join(site, 'docs');
  const docFiles = walk(docsDir, (n) => /\.mdx?$/.test(n) && !n.startsWith('_'));
  const docIds = new Set(docFiles.map((f) => relative(docsDir, f).split('\\').join('/')));
  const out = new Map([...docIds].map((id) => [id, new Set()]));
  const inbound = new Map([...docIds].map((id) => [id, new Set()]));
  const broken = [];

  for (const file of docFiles) {
    const from = relative(docsDir, file).split('\\').join('/');
    const text = readFileSync(file, 'utf8').replace(/```[\s\S]*?```/g, '');
    for (const m of text.matchAll(/\]\(([^)\s]+)\)/g)) {
      const href = m[1];
      if (/^[a-z]+:|^#/.test(href)) continue;
      const target = href.startsWith('/docs/')
        ? toDocId(href.slice('/docs/'.length), docIds)
        : toDocId(posix.normalize(posix.join(posix.dirname(from), href)), docIds);
      if (!target) {
        if (/\.mdx?([#?]|$)/.test(href)) broken.push({from, href});
        continue;
      }
      if (target === from) continue;
      out.get(from).add(target);
      inbound.get(target).add(from);
    }
  }

  // Links into docs from pages, components and site config count as inbound.
  const extra = [
    ...walk(join(site, 'src'), (n) => /\.(tsx?|mdx?)$/.test(n)),
    join(site, 'docusaurus.config.ts'),
  ];
  for (const file of extra) {
    const text = readFileSync(file, 'utf8');
    for (const m of text.matchAll(/["'`(](\/docs\/[^"'`)\s]+)/g)) {
      const target = toDocId(m[1].slice('/docs/'.length), docIds);
      if (target) inbound.get(target).add(relative(site, file));
    }
  }
  return {docIds, out, inbound, broken};
}

const MEMBER_BULLET = /^(Generic blueprint|Instance home|Canton-level home|Related)\b/;

function expandBraces(path) {
  const m = path.match(/^(.*)\{([^}]+)\}(.*)$/);
  return m ? m[2].split(',').map((part) => `${m[1]}${part}${m[3]}`) : [path];
}

// Only the bullets that define a thread's membership count; "Do not touch",
// "Note", "Invariant" and "Legacy" bullets mention paths that are NOT in it.
export function parseRegistry(frameworkText) {
  const threads = [];
  for (const section of frameworkText.split(/^### Thread: /m).slice(1)) {
    const name = section.split('\n')[0].replace(/\*\*/g, '').split(' — ')[0].trim();
    const body = section.split(/^## /m)[0];
    const paths = [];
    for (const bullet of body.split(/^- \*\*/m).slice(1)) {
      if (!MEMBER_BULLET.test(bullet)) continue;
      for (const m of bullet.matchAll(/`([^`\s<>]+(\.md|\/))`/g)) paths.push(...expandBraces(m[1]));
    }
    threads.push({name, paths: [...new Set(paths)]});
  }
  return threads;
}

function resolveRegistered(path, docIds) {
  const p = path.replace(/^docs\//, '');
  if (p.endsWith('/')) {
    const ids = [...docIds].filter((id) => id.startsWith(p));
    return ids.length ? {ids} : {missing: true};
  }
  if (docIds.has(p)) return {id: p};
  if (p.includes('/')) return {missing: true};
  // Bare filenames are written relative to a folder named nearby; resolve
  // only when unambiguous, otherwise they may point outside docs/.
  const hits = [...docIds].filter((id) => id.split('/').pop() === p);
  return hits.length === 1 ? {id: hits[0]} : {};
}

export function checkRegistry(graph, threads) {
  const errors = [];
  const warnings = [];
  for (const {name, paths} of threads) {
    const members = [];
    for (const p of paths) {
      const r = resolveRegistered(p, graph.docIds);
      if (r.missing) errors.push({thread: name, path: p, problem: 'registered path does not exist (moved or renamed?)'});
      if (r.id) members.push(r.id);
      if (r.ids) members.push(...r.ids);
    }
    const set = new Set(members);
    if (set.size < 2) continue;
    for (const id of set) {
      const linked = [...graph.out.get(id), ...graph.inbound.get(id)].some((o) => o !== id && set.has(o));
      if (!linked) warnings.push({thread: name, path: id, problem: 'no link to or from any other article in its thread'});
    }
  }
  return {errors, warnings};
}

function main() {
  const args = process.argv.slice(2);
  const i = args.indexOf('--root');
  const root = resolve(i >= 0 ? args[i + 1] : join(dirname(fileURLToPath(import.meta.url)), '..'));
  const graph = buildGraph(root);
  const frameworkPath = join(root, 'tejido-social-web', 'CONTENT-FRAMEWORK.md');
  const threads = existsSync(frameworkPath) ? parseRegistry(readFileSync(frameworkPath, 'utf8')) : [];
  const {errors, warnings} = checkRegistry(graph, threads);

  const edges = [...graph.out.values()].reduce((n, s) => n + s.size, 0);
  const orphans = [...graph.docIds].filter((id) => graph.inbound.get(id).size === 0 && !id.endsWith('index.md'));
  const deadEnds = [...graph.docIds].filter((id) => graph.out.get(id).size === 0);
  console.log(`${graph.docIds.size} docs, ${edges} doc→doc links, ${threads.length} registered threads.`);
  console.log(`\nOrphans (no inbound link from any doc, page or config; reachable only via the sidebar): ${orphans.length}`);
  orphans.forEach((o) => console.log(`  ${o}`));
  console.log(`\nDead ends (link to no other doc): ${deadEnds.length}`);
  deadEnds.forEach((d) => console.log(`  ${d}`));
  if (graph.broken.length) {
    console.log(`\nBroken relative .md links: ${graph.broken.length}`);
    graph.broken.forEach((b) => console.log(`  ${b.from} → ${b.href}`));
  }
  console.log(`\nThread members not linked to the rest of their thread (warning): ${warnings.length}`);
  warnings.forEach((p) => console.log(`  [${p.thread}] ${p.path}`));
  console.log(`\nStale registry entries (error): ${errors.length}`);
  errors.forEach((p) => console.log(`  [${p.thread}] ${p.path}: ${p.problem}`));

  if (args.includes('--check') && (errors.length || graph.broken.length)) process.exitCode = 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
