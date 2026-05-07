// Learn more https://docs.expo.dev/guides/monorepos
const { getDefaultConfig } = require('expo/metro-config')
const fs = require('fs')
const path = require('path')

const projectRoot = __dirname
const workspaceRoot = path.resolve(projectRoot, '..')
const componentsRoot = path.resolve(workspaceRoot, 'components')

const sourceExtensions = ['.tsx', '.ts', '.jsx', '.js']

/** Map @ant-design/react-native/lib/foo → components/foo (matches tsconfig paths) */
function resolveLibSubpath(subpath) {
  const base = path.join(componentsRoot, subpath)
  for (const ext of sourceExtensions) {
    const withExt = base + ext
    if (fs.existsSync(withExt) && fs.statSync(withExt).isFile()) {
      return withExt
    }
  }
  if (fs.existsSync(base)) {
    const stat = fs.statSync(base)
    if (stat.isDirectory()) {
      for (const ext of sourceExtensions) {
        const indexPath = path.join(base, 'index' + ext)
        if (fs.existsSync(indexPath)) {
          return indexPath
        }
      }
    }
  }
  return null
}

const config = getDefaultConfig(projectRoot)

// #1 - Watch all files in the monorepo
config.watchFolders = [workspaceRoot]
// #3 - Force resolving nested modules to the folders below
config.resolver.disableHierarchicalLookup = true
// #2 - Try resolving with project modules first, then workspace modules
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
]

// Demo / kitchen-sink import the package name, but example/ does not install a built copy.
// Point resolution at source under ../components (same as root tsconfig paths).
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === '@ant-design/react-native') {
    return {
      type: 'sourceFile',
      filePath: path.join(componentsRoot, 'index.tsx'),
    }
  }
  if (moduleName.startsWith('@ant-design/react-native/lib/')) {
    const sub = moduleName.slice('@ant-design/react-native/lib/'.length)
    const filePath = resolveLibSubpath(sub)
    if (filePath) {
      return {
        type: 'sourceFile',
        filePath,
      }
    }
  }
  return context.resolveRequest(context, moduleName, platform)
}

module.exports = config
