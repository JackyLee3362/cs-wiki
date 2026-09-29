import test from 'node:test';
import assert from 'node:assert/strict';
import parseFrontMatter from '../plugins/parse-front-matter.mjs';

test('empty YAML fields and tag placeholders are omitted without changing content or draft flags', async () => {
  const result = await parseFrontMatter({
    defaultParseFrontMatter: async () => ({frontMatter: {title: '示例', description: null, tags: ['命令行', null], draft: false}, content: '正文'}),
  });
  assert.deepEqual(result, {frontMatter: {title: '示例', tags: ['命令行'], draft: false}, content: '正文'});
});
