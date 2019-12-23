const glob = require('glob');
const tmp = require('tmp');
const path = require('path');
const fs = require('fs');

const globImport = (options = {}) => {
  const pattern = options.pattern;

  const generatedCodes = new Map();

  return {
    name: 'plugin-glob-import',
    resolveId(importee, importer) {
      if (!importee.includes('*')) return;
      if (!importee.includes(options.pattern)) return;

      console.log('resolveId', importee, importer);

      const searchRoot = path.dirname(importer || process.cwd());

      const files = glob.sync(importee, {
        cwd: searchRoot,
      });

      const generatedCodeImports = files.map((f, i) => {
        const resolvedPath = path.resolve(searchRoot, f);
        return `import file${i} from '${resolvedPath}'`;
      });

      const exportCode = `export {${files
        .map((f, i) => `file${i}`)
        .join(', ')}}`;

      const finalCode = generatedCodeImports.join('\n') + '\n' + exportCode;

      const tmpFile = tmp.fileSync();

      fs.writeFileSync(tmpFile.name, finalCode, { encoding: 'utf8' });

      generatedCodes.set(tmpFile.name, finalCode);
      return tmpFile.name;
    },

    load(id) {
      return generatedCodes.get(id) || null;
    },
  };
};

export default globImport;
