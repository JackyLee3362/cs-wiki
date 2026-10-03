import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {transformProjectLinks} from '../plugins/remark-project-links.mjs';

const root = path.resolve('docs');
const source = path.join(root, 'bases/index.md');
const target = path.join(root, 'wiki/tool.md');
const files = [source, target];
const link = (url, label) => ({type: 'link', url, children: [{type: 'text', value: label}]});

test('project-root links become relative links and missing pages keep visible labels', () => {
  const tree = {type: 'root', children: [
    link('docs/wiki/tool.md#特点', '工具'),
    link('docs/missing.md', '待补充'),
    link('https://example.com', '外部链接'),
  ]};
  transformProjectLinks(tree, source, root, files);
  assert.equal(tree.children[0].url, '../wiki/tool.md#特点');
  assert.deepEqual(tree.children[1], {type: 'text', value: '待补充'});
  assert.equal(tree.children[2].url, 'https://example.com');
});

test('draft targets remain linked in development and keep labels in production', () => {
  const drafts = new Set([target]);
  const development = {type: 'root', children: [link('docs/wiki/tool.md', '草稿')]};
  transformProjectLinks(development, source, root, files, drafts, false);
  assert.equal(development.children[0].url, '../wiki/tool.md');
  const production = {type: 'root', children: [link('docs/wiki/tool.md', '草稿')]};
  transformProjectLinks(production, source, root, files, drafts, true);
  assert.deepEqual(production.children, [{type: 'text', value: '草稿'}]);
});
