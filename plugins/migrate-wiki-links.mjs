import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {listDocuments, resolveWikiLink} from './remark-wiki-links.mjs';

export function convertMarkdown(text, source, files, root) {
  const issues = [];
  let converted = 0;
  // Protect fenced/inline code and frontmatter: examples and templates are not navigation.
  const protectedSpans = /(^---\r?\n[\s\S]*?\r?\n---\s*$)|(^[ \t]{0,3}(`{3,}|~{3,})[^\n]*\n[\s\S]*?^[ \t]{0,3}\3[^\n]*(?:\n|$))|(`+)([^`]|(?!\4)`)*?\4/gm;
  function replace(segment) {
    return segment.replace(/!?\[\[([^\]\n]+)\]\]/g, (original, value) => {
      const separator = value.indexOf('|');
      const reference = separator < 0 ? value : value.slice(0, separator);
      const alias = separator < 0 ? '' : value.slice(separator + 1);
      const hashIndex = reference.indexOf('#');
      const target = (hashIndex < 0 ? reference : reference.slice(0, hashIndex)).trim();
      const anchor = hashIndex < 0 ? '' : reference.slice(hashIndex + 1).trim();
      const resolved = target ? resolveWikiLink(target, source, files, root) : source;
      const relative = resolved ? path.relative(root, resolved).replaceAll('\\', '/') : target.replace(/^\/?docs\//, '').replace(/\.md$/, '') + '.md';
      if (!resolved) {
        const candidates = files.filter((file) => file.replaceAll('\\', '/').endsWith('/' + target.replace(/\.md$/, '') + '.md'));
        issues.push({source: path.relative(path.dirname(root), source).replaceAll('\\', '/'), reference, destination: `docs/${relative}`,
          reason: candidates.length ? 'ambiguous' : 'missing',
          candidates: candidates.map((file) => 'docs/' + path.relative(root, file).replaceAll('\\', '/'))});
      }
      const label = (alias || reference).replaceAll('[', '\\[').replaceAll(']', '\\]');
      const fragment = anchor ? '#' + anchor.toLowerCase().replace(/\s+/g, '-') : '';
      const url = 'docs/' + relative + fragment;
      converted++;
      return `[${label}](${/[\s()]/.test(url) ? '<' + url + '>' : url})`;
    });
  }
  let result = '', offset = 0;
  for (const match of text.matchAll(protectedSpans)) {
    result += replace(text.slice(offset, match.index)) + match[0];
    offset = match.index + match[0].length;
  }
  result += replace(text.slice(offset));
  return {text: result, converted, issues};
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve('docs');
  const files = listDocuments(root);
  const report = {converted: 0, changedFiles: 0, unresolved: []};
  for (const file of files) {
    const before = fs.readFileSync(file, 'utf8');
    const result = convertMarkdown(before, file, files, root);
    report.converted += result.converted;
    report.unresolved.push(...result.issues);
    if (before !== result.text) {
      report.changedFiles++;
      if (process.argv.includes('--write')) fs.writeFileSync(file, result.text);
    }
  }
  if (process.argv.includes('--write')) fs.writeFileSync('link-migration-report.json', JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report, null, 2));
}
