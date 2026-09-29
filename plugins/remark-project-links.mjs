import fs from 'node:fs';
import path from 'node:path';
import {listDocuments} from './remark-wiki-links.mjs';

export function transformProjectLinks(tree, source, root, files, drafts = new Set(), production = false) {
  function walk(parent) {
    if (!parent.children) return;
    parent.children = parent.children.flatMap((node) => {
      if (node.type === 'link' && node.url.startsWith('docs/')) {
        const [pathname, ...fragment] = node.url.split('#');
        const target = path.resolve(path.dirname(root), decodeURI(pathname));
        if (!files.includes(target) || (production && drafts.has(target))) {
          // Keep the label visible when the target isn't part of the published site.
          return node.children;
        }
        const relative = path.relative(path.dirname(source), target).replaceAll('\\', '/');
        node.url = (relative.startsWith('.') ? '' : './') + relative + (fragment.length ? '#' + fragment.join('#') : '');
      }
      walk(node);
      return [node];
    });
  }
  walk(tree);
}

export default function remarkProjectLinks() {
  const root = path.resolve('docs');
  const files = listDocuments(root);
  const drafts = new Set(files.filter((file) => {
    const frontmatter = fs.readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
    return frontmatter && /^draft:\s*true\s*$/m.test(frontmatter[1]);
  }));
  return (tree, file) => transformProjectLinks(tree, path.resolve(file.path), root, files, drafts, process.env.NODE_ENV === 'production');
}
