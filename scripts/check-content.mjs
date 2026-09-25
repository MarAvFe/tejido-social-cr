#!/usr/bin/env node
// Mechanical checks for the content rules in tejido-social-web/CLAUDE.md and
// VOICE.md that have actually been broken before (see CHANGELOG.md).
// Usage: node scripts/check-content.mjs [--root <repo>] [--base <git-ref>]

import {execFileSync} from 'node:child_process';
import {readdirSync, readFileSync, statSync} from 'node:fs';
import {dirname, join, relative, resolve} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const INTERNAL_DOCS =
  /\b(CONTENT-TODO|CLAUDE|VOICE|PROJECT|DESIGN-SPEC|SITE-TODO|CONTENT-FRAMEWORK)\.md\b/;
const MD_LINK = /\[[^\]\n]+\]\((https?:\/\/|\.{0,2}\/)[^)\s]*\)/;
const PLACEHOLDERS = [
  [/href=(["'])#\1|href=\{(["'])#\2\}/, 'bare href="#" link'],
  [/lorem ipsum/i, 'lorem ipsum filler'],
  [/\bexample\.(com|org|net)\b/, 'example.com placeholder URL'],
  [/(?<![-\w])(TODO|FIXME|XXX)\b/, 'TODO/FIXME left in rendered text'],
];
const READER_FACING = ['docs', 'src/pages', 'static'];
const EXTENSIONS = /\.(md|mdx|tsx|html)$/;

// Blank out comments but keep newlines, so line numbers still match.
function blank(text) {
  return text.replace(/[^\n]/g, ' ');
}

function stripComments(text, file) {
  if (file.endsWith('.md') || file.endsWith('.mdx') || file.endsWith('.html')) {
    return text.replace(/<!--[\s\S]*?-->/g, blank);
  }
  return text
    .replace(/\/\*[\s\S]*?\*\//g, blank)
    // `//` comments, but not the `//` inside URLs (preceded by ':').
    .replace(/(^|[^:"'`\w])\/\/[^\n]*/g, (m, pre) => pre + blank(m.slice(pre.length)));
}

function walk(dir, out = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const name of entries) {
    // Docusaurus doesn't build `_`-prefixed files, so they aren't reader-facing.
    if (name.startsWith('_') || name === 'node_modules') continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, out);
    else if (EXTENSIONS.test(name)) out.push(path);
  }
  return out;
}

function lineOf(text, index) {
  return text.slice(0, index).split('\n').length;
}

function findAll(regex, text) {
  const global = new RegExp(regex.source, regex.flags.includes('g') ? regex.flags : regex.flags + 'g');
  return [...text.matchAll(global)];
}

export function checkContent(root) {
  const site = join(root, 'tejido-social-web');
  const findings = [];
  const add = (file, line, rule, message) =>
    findings.push({file: relative(root, file), line, rule, message});

  for (const base of READER_FACING) {
    for (const file of walk(join(site, base))) {
      const raw = readFileSync(file, 'utf8');
      const text = stripComments(raw, file);

      for (const m of findAll(INTERNAL_DOCS, text)) {
        add(file, lineOf(text, m.index), 'internal-doc',
          `names the internal file ${m[0]}; readers can't see it`);
      }
      if (file.endsWith('.tsx')) {
        for (const m of findAll(MD_LINK, text)) {
          add(file, lineOf(text, m.index), 'md-link-in-tsx',
            `markdown link ${m[0].slice(0, 60)} renders as literal text in TSX; use an <a>/ExternalLink`);
        }
      }
      for (const [regex, what] of PLACEHOLDERS) {
        for (const m of findAll(regex, text)) {
          add(file, lineOf(text, m.index), 'placeholder', `${what}: ${m[0]}`);
        }
      }
      if (file.startsWith(join(site, 'docs')) && /\.mdx?$/.test(file)) {
        const front = raw.match(/^---\n([\s\S]*?)\n---/);
        if (!front || !/^source_label:/m.test(front[1])) {
          add(file, 1, 'source-label', 'docs page has no source_label in its frontmatter');
        }
      }
    }
  }
  return findings;
}

export function changelogWarning(root, baseRef) {
  const changed = execFileSync('git', ['diff', '--name-only', `${baseRef}...HEAD`], {
    cwd: root,
    encoding: 'utf8',
  })
    .split('\n')
    .filter(Boolean);
  const siteChanges = changed.filter(
    (f) => f.startsWith('tejido-social-web/') && f !== 'tejido-social-web/CHANGELOG.md',
  );
  if (siteChanges.length && !changed.includes('tejido-social-web/CHANGELOG.md')) {
    return `${siteChanges.length} file(s) under tejido-social-web/ changed without a CHANGELOG.md entry (fine only for trivial internal edits)`;
  }
  return null;
}

function main() {
  const args = process.argv.slice(2);
  const opt = (name) => {
    const i = args.indexOf(name);
    return i >= 0 ? args[i + 1] : undefined;
  };
  const root = resolve(opt('--root') ?? join(dirname(fileURLToPath(import.meta.url)), '..'));
  const inActions = Boolean(process.env.GITHUB_ACTIONS);

  const findings = checkContent(root);
  for (const f of findings) {
    console.log(
      inActions
        ? `::error file=${f.file},line=${f.line},title=${f.rule}::${f.message}`
        : `${f.file}:${f.line}  [${f.rule}] ${f.message}`,
    );
  }

  const base = opt('--base');
  if (base) {
    const warning = changelogWarning(root, base);
    if (warning) console.log(inActions ? `::warning title=changelog::${warning}` : `warning: ${warning}`);
  }

  console.log(findings.length ? `${findings.length} content problem(s).` : 'Content checks passed.');
  process.exitCode = findings.length ? 1 : 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
