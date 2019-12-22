import { createFilter } from 'rollup-pluginutils';
import path from 'path';

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

      const html = converter.makeHtml(code);

      const metadata = converter.getMetadata();

      const exportFromModule = JSON.stringify({
        html,
        metadata,
        filename: path.basename(id),
      });

      return {
        code: `export default ${exportFromModule}`,
        map: { mappings: '' },
      };
    },
  };
}
