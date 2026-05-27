const path = require('path')
const { getDefaultConfig } = require('expo/metro-config')
const { resolve } = require('metro-resolver')

const projectRoot = __dirname
const workspaceRoot = path.resolve(projectRoot, '..')
const componentsRoot = path.resolve(workspaceRoot, 'components')

const config = getDefaultConfig(__dirname)

// #1 - Watch all files in the monorepo
config.watchFolders = [workspaceRoot]
// #3 - Force resolving nested modules to the folders below
config.resolver.disableHierarchicalLookup = true
// #2 - Try resolving with project modules first, then workspace modules
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
]

// @ant-design/react-native → components/（与 tsconfig paths 一致）
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === '@ant-design/react-native') {
    return {
      type: 'sourceFile',
      filePath: path.join(componentsRoot, 'index.tsx'),
    }
  }

  const libPrefix = '@ant-design/react-native/lib/'
  if (moduleName.startsWith(libPrefix)) {
    const subpath = moduleName.slice(libPrefix.length)
    return resolve(context, path.join(componentsRoot, subpath), platform)
  }

  return context.resolveRequest
    ? context.resolveRequest(context, moduleName, platform)
    : resolve(context, moduleName, platform)
}

module.exports = config
