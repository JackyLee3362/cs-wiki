import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {resolveWikiLink, transformWikiLinks} from '../plugins/remark-wiki-links.mjs';

const root = path.resolve('docs');
const source = path.join(root, 'bases/index.md');
const files = ['bases/index.md', 'bases/topic.md', 'wiki/tool.md', 'wiki/index.md'].map((file) => path.join(root, file));

test('resolve relative, root and unique short names without guessing ambiguous paths', () => {
  assert.equal(resolveWikiLink('topic', source, files, root), files[1]);
  assert.equal(resolveWikiLink('wiki/tool', source, files, root), files[2]);
  assert.equal(resolveWikiLink('tool', source, files, root), files[2]);
  assert.equal(resolveWikiLink('index', path.join(root, 'other/test.md'), files, root), undefined);
  assert.equal(resolveWikiLink('missing', source, files, root), undefined);
});

test('aliases, embedded note references and heading anchors become links', () => {
  const tree = {type: 'paragraph', children: [{type: 'text', value: 'See [[tool|工具]] and ![[topic#特点]]'}]};
  transformWikiLinks(tree, source, files, root);
  assert.equal(tree.children[1].url, '../wiki/tool.md');
  assert.equal(tree.children[1].children[0].value, '工具');
  assert.equal(tree.children[3].url, './topic.md#特点');
});

test('preserve unknown references, unpublished drafts, code and existing links', () => {
  const tree = {type: 'root', children: [
    {type: 'text', value: '[[missing]] [[tool]]'},
    {type: 'code', value: '[[topic]]'},
    {type: 'inlineCode', value: '[[topic]]'},
    {type: 'link', url: 'https://example.com', children: [{type: 'text', value: '[[topic]]'}]},
  ]};
  const before = structuredClone(tree);
  transformWikiLinks(tree, source, files, root, () => false);
  assert.equal(tree.children.filter((node) => node.type === 'text').map((node) => node.value).join(''), before.children[0].value);
  assert.deepEqual(tree.children.slice(-3), before.children.slice(-3));
});
