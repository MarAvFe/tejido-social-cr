import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdirSync, mkdtempSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {dirname, join} from 'node:path';
import {checkContent} from './check-content.mjs';

function site(files) {
  const root = mkdtempSync(join(tmpdir(), 'check-content-'));
  for (const [path, body] of Object.entries(files)) {
    const full = join(root, 'tejido-social-web', path);
    mkdirSync(dirname(full), {recursive: true});
    writeFileSync(full, body);
  }
  return root;
}

const DOC = (body) => `---\nsource_label: "Editorial"\n---\n\n${body}\n`;
const rules = (root) => checkContent(root).map((f) => `${f.rule}@${f.file}:${f.line}`);

test('clean site passes', () => {
  const root = site({
    'docs/a.md': DOC('Consultá la [guía](./b.md). El comité revisa todo el proceso.'),
    'src/pages/p.tsx': `// TODO: internal note, see CONTENT-TODO.md\nconst u = 'https://x.cr/a';\nexport default () => <a href={u}>ok</a>;\n`,
    'src/pages/_plantilla.tsx': `<a href="#">TODO</a>`,
  });
  assert.deepEqual(rules(root), []);
});

test('internal doc name in a docs page', () => {
  const root = site({'docs/a.md': DOC('Ver CONTENT-TODO.md (N2).')});
  assert.deepEqual(rules(root), ['internal-doc@tejido-social-web/docs/a.md:5']);
});

test('markdown link inside a TSX string', () => {
  const root = site({'src/pages/p.tsx': `const t = 'Según [La Nación](https://nacion.com/x).';\n`});
  assert.deepEqual(rules(root), ['md-link-in-tsx@tejido-social-web/src/pages/p.tsx:1']);
});

test('placeholders in rendered text', () => {
  const root = site({
    'src/pages/p.tsx': `export default () => (\n  <p>\n    <a href="#">Carpeta</a> TODO\n  </p>\n);\n`,
    'static/x.html': `<p>Ver https://example.com</p>`,
  });
  assert.deepEqual(rules(root).sort(), [
    'placeholder@tejido-social-web/src/pages/p.tsx:3',
    'placeholder@tejido-social-web/src/pages/p.tsx:3',
    'placeholder@tejido-social-web/static/x.html:1',
  ]);
});

test('docs page without source_label', () => {
  const root = site({'docs/a.md': '---\nsidebar_label: "A"\n---\n\nTexto.\n'});
  assert.deepEqual(rules(root), ['source-label@tejido-social-web/docs/a.md:1']);
});
