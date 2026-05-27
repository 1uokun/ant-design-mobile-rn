const path = require('path')

module.exports = {
  process(_src, filename) {
    const [name, ext] = path.basename(filename).split('.')
    if (ext === 'png') {
      return {
        code: `module.exports = { uri: '${name}' };`,
      }
    }
    return { code: 'module.exports = {};' }
  },
}
