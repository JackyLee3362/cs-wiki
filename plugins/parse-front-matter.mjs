export default async function parseFrontMatter({defaultParseFrontMatter, ...params}) {
  const result = await defaultParseFrontMatter(params);
  // Existing notes use empty YAML properties as placeholders.
  result.frontMatter = Object.fromEntries(Object.entries(result.frontMatter).filter(([, value]) => value !== null));
  if (Array.isArray(result.frontMatter.tags)) result.frontMatter.tags = result.frontMatter.tags.filter((tag) => tag !== null);
  return result;
}
