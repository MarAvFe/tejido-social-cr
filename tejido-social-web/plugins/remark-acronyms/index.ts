import {visit} from 'unist-util-visit';
import type {Root, Text} from 'mdast';
import type {MdxJsxTextElement} from 'mdast-util-mdx-jsx';
import type {Parent} from 'unist';
import type {Plugin} from 'unified';
import {ACRONYMS} from '../../src/data/acronyms';

// Coincide con cualquier sigla del registro como palabra completa (evita
// reemplazar "FA" dentro de "afiliada", por ejemplo).
const PATTERN = new RegExp(
  `\\b(${Object.keys(ACRONYMS)
    .sort((a, b) => b.length - a.length)
    .join('|')})\\b`,
  'g',
);

// Remark plugin: reemplaza menciones de siglas conocidas en texto plano por
// <Acronym short="..." full="..." />, para que el tooltip/expansión se
// aplique automáticamente en todo el contenido sin editar cada artículo.
const remarkAcronyms: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'text', (node: Text, index, parent) => {
      if (!parent || index === undefined) {
        return;
      }
      // No tocar texto dentro de nodos que ya son código, o el propio
      // componente Acronym (evita recursión / dobles envoltorios).
      const parentType: string = (parent as Parent).type;
      if (parentType === 'inlineCode' || parentType === 'code' || parentType === 'mdxJsxTextElement') {
        return;
      }

      PATTERN.lastIndex = 0;
      if (!PATTERN.test(node.value)) {
        return;
      }
      PATTERN.lastIndex = 0;

      const parts = node.value.split(PATTERN);
      if (parts.length === 1) {
        return;
      }

      const newNodes: Array<Text | MdxJsxTextElement> = parts
        .filter((part) => part !== '')
        .map((part) => {
          const full = ACRONYMS[part];
          if (!full) {
            return {type: 'text', value: part} as Text;
          }
          return {
            type: 'mdxJsxTextElement',
            name: 'Acronym',
            attributes: [
              {type: 'mdxJsxAttribute', name: 'short', value: part},
              {type: 'mdxJsxAttribute', name: 'full', value: full},
            ],
            children: [],
          } as unknown as MdxJsxTextElement;
        });

      parent.children.splice(index, 1, ...newNodes);
      return index + newNodes.length;
    });
  };
};

export default remarkAcronyms;
