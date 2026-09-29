import fs from 'node:fs';
import path from 'node:path';

const slash = (value) => value.replaceAll('\\', '/');

export function listDocuments(root) {
  return fs.readdirSync(root, {withFileTypes: true}).flatMap((entry) => {
    const absolute = path.join(root, entry.name);
    return entry.isDirectory() ? listDocuments(absolute) : absolute.endsWith('.md') ? [absolute] : [];
  });
}

// Prefer relative and root paths; only use a shortest-path match if unambiguous.
export function resolveWikiLink(target, source, files, root) {
  const name = target.replace(/\.md$/, '');
  const candidates = [path.resolve(path.dirname(source), `${name}.md`), path.resolve(root, `${name}.md`)];
  for (const candidate of candidates) if (files.includes(candidate)) return candidate;
  const matches = files.filter((file) => slash(file).endsWith(`/${name}.md`));
  return matches.length === 1 ? matches[0] : undefined;
}

export function transformWikiLinks(tree, source, files, root, isPublished = () => true) {
  function walk(parent) {
    if (!parent.children || ['link', 'image', 'code', 'inlineCode'].includes(parent.type)) return;
    parent.children = parent.children.flatMap((node) => {
      if (node.type !== 'text') { walk(node); return [node]; }
      const result = [];
      const pattern = /!?\[\[([^\]\n]+)\]\]/g;
      let offset = 0;
      for (const match of node.value.matchAll(pattern)) {
        if (match.index > offset) result.push({type: 'text', value: node.value.slice(offset, match.index)});
        const [reference, alias] = match[1].split('|');
        const [target, ...fragment] = reference.split('#');
        const destination = target ? resolveWikiLink(target, source, files, root) : source;
        const label = alias || reference;
        if (destination && isPublished(destination)) {
          const relative = slash(path.relative(path.dirname(source), destination));
          const hash = fragment.length ? `#${fragment.join('#').trim().toLowerCase().replace(/\s+/g, '-')}` : '';
          result.push({type: 'link', url: `${relative.startsWith('.') ? '' : './'}${relative}${hash}`, children: [{type: 'text', value: label}]});
        } else {
          // Preserve missing/ambiguous references visibly instead of inventing a URL.
          result.push({type: 'text', value: match[0]});
        }
        offset = match.index + match[0].length;
      }
      if (offset < node.value.length) result.push({type: 'text', value: node.value.slice(offset)});
      return result;
    });
  }
  walk(tree);
}

export default function remarkWikiLinks() {
  const root = path.resolve('docs');
  const files = listDocuments(root);
  const drafts = new Set(files.filter((file) => {
    const frontmatter = fs.readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
    return frontmatter && /^draft:\s*true\s*$/m.test(frontmatter[1]);
  }));
  return (tree, file) => transformWikiLinks(tree, path.resolve(file.path), files, root,
    (destination) => process.env.NODE_ENV !== 'production' || !drafts.has(destination));
}
