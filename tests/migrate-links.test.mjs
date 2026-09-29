import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {convertMarkdown} from '../plugins/migrate-wiki-links.mjs';
import {transformProjectLinks} from '../plugins/remark-project-links.mjs';

const root = path.resolve('docs');
const source = path.join(root, 'bases/index.md');
const files = [source, path.join(root, 'wiki/tool.md')];

test('write aliases and embedded notes as standard project-root Markdown links', () => {
  const result = convertMarkdown('[[tool|工具]] ![[tool#特点]] [[#本页]]', source, files, root);
  assert.equal(result.text, '[工具](docs/wiki/tool.md) [tool#特点](docs/wiki/tool.md#特点) [#本页](docs/bases/index.md#本页)');
  assert.equal(result.converted, 3);
  assert.deepEqual(result.issues, []);
});

test('preserve external links, code, templates and line endings; repeated conversion does nothing', () => {
  const text = '---\r\ntitle: "[[template]]"\r\n---\r\n[[tool]]\r\n`[[tool]]`\r\n```md\r\n[[tool]]\r\n```\r\n[文章](https://example.com)\r\n';
  const result = convertMarkdown(text, source, files, root);
  assert.equal(result.text, text.replace('---\r\n[[tool]]', '---\r\n[tool](docs/wiki/tool.md)'));
  assert.equal(convertMarkdown(result.text, source, files, root).converted, 0);
});

test('convert missing references too and report them explicitly', () => {
  const result = convertMarkdown('[[missing|待补充]]', source, files, root);
  assert.equal(result.text, '[待补充](docs/missing.md)');
  assert.equal(result.issues[0].reason, 'missing');
});

test('Docusaurus receives relative links; drafts and missing pages keep visible labels', () => {
  const tree = {type: 'root', children: [
    {type: 'link', url: 'docs/wiki/tool.md#特点', children: [{type: 'text', value: '工具'}]},
    {type: 'link', url: 'docs/missing.md', children: [{type: 'text', value: '待补充'}]},
  ]};
  transformProjectLinks(tree, source, root, files);
  assert.equal(tree.children[0].url, '../wiki/tool.md#特点');
  assert.deepEqual(tree.children[1], {type: 'text', value: '待补充'});
  transformProjectLinks({type: 'root', children: [{type: 'link', url: 'docs/wiki/tool.md', children: [{type: 'text', value: '草稿'}]}]}, source, root, files, new Set([files[1]]), true);
});
