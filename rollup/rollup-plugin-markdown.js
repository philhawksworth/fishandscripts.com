import { createFilter } from 'rollup-pluginutils';
import path from 'path';
import matter from 'gray-matter';

import showdown from 'showdown';

const converter = new showdown.Converter({
  metadata: true,
});

converter.setFlavor('github');

export default function markdownPlugin(options = {}) {
  const filter = createFilter(options.include, options.exclude);

  return {
    name: 'rollup-plugin-markdown',
    transform(code, id) {
      if (!filter(id) || id.indexOf('.md') === -1) return;

      const matterResult = matter(code);

      const html = converter.makeHtml(matterResult.content);

      const exportFromModule = JSON.stringify({
        html,
        metadata: matterResult.data,
        filename: path.basename(id),
      });

      return {
        code: `export default ${exportFromModule}`,
        map: { mappings: '' },
      };
    },
  };
}
