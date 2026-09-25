import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdirSync, mkdtempSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {dirname, join} from 'node:path';
import {buildGraph, checkRegistry, parseRegistry} from './link-graph.mjs';

function site(docs) {
  const root = mkdtempSync(join(tmpdir(), 'link-graph-'));
  for (const [path, body] of Object.entries(docs)) {
    const full = join(root, 'tejido-social-web/docs', path);
    mkdirSync(dirname(full), {recursive: true});
    writeFileSync(full, body);
  }
  mkdirSync(join(root, 'tejido-social-web/src'), {recursive: true});
  writeFileSync(join(root, 'tejido-social-web/docusaurus.config.ts'), "to: '/docs/a/one'");
  return root;
}

const REGISTRY = `### Thread: **T** — test
- **Generic blueprint:** \`a/one.md\`, \`b/\`, \`two.md\`
- **Do not touch:** \`c/unrelated.md\`
- **Related:** \`a/{gone,one}.md\`
`;

test('registry: folder, brace and bare-name entries; excluded bullets; stale paths', () => {
  const root = site({
    'a/one.md': 'See [two](../b/two.md).',
    'b/two.md': 'Back to [one](../a/one.md).',
    'b/three.md': 'Nothing here.',
    'c/unrelated.md': 'Isolated on purpose.',
  });
  const threads = parseRegistry(REGISTRY);
  assert.deepEqual(threads[0].paths, ['a/one.md', 'b/', 'two.md', 'a/gone.md']);
  const {errors, warnings} = checkRegistry(buildGraph(root), threads);
  assert.deepEqual(errors.map((e) => e.path), ['a/gone.md']);
  assert.deepEqual(warnings.map((w) => w.path), ['b/three.md']);
});

test('graph counts config links as inbound and reports broken .md links', () => {
  const root = site({'a/one.md': 'Dead [link](./missing.md).'});
  const graph = buildGraph(root);
  assert.deepEqual([...graph.inbound.get('a/one.md')], ['docusaurus.config.ts']);
  assert.deepEqual(graph.broken, [{from: 'a/one.md', href: './missing.md'}]);
});
