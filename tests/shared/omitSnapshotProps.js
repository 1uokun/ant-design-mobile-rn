/** Props injected by RN test renderer; omit to keep snapshots stable and readable. */
const OMIT_PROPS = ['accessibilityValue']

function omitSnapshotProps(node) {
  if (node == null) {
    return node
  }
  if (Array.isArray(node)) {
    return node.map(omitSnapshotProps)
  }
  if (typeof node !== 'object') {
    return node
  }

  const next = { ...node }

  if (next.props && typeof next.props === 'object') {
    next.props = { ...next.props }
    OMIT_PROPS.forEach((key) => {
      delete next.props[key]
    })
  }

  if (next.children != null) {
    next.children = omitSnapshotProps(next.children)
  }

  return next
}

/**
 * Unwrap fragment / Provider wrappers so Jest prints JSX (`<RCTScrollView>`)
 * instead of `Object { "children": ... }`.
 */
function unwrapSnapshotRoot(node) {
  if (node == null) {
    return node
  }
  if (Array.isArray(node)) {
    if (node.length === 1) {
      return unwrapSnapshotRoot(node[0])
    }
    return node.map(unwrapSnapshotRoot)
  }
  if (typeof node !== 'object') {
    return node
  }

  if (Array.isArray(node.children) && node.children.length === 1) {
    const child = unwrapSnapshotRoot(node.children[0])

    if (typeof node.type !== 'string') {
      return child
    }

    // Provider adds an outer View around ScrollView demos.
    if (
      node.type === 'View' &&
      child &&
      typeof child === 'object' &&
      (child.type === 'RCTScrollView' || child.type === 'ScrollView')
    ) {
      return child
    }
  }

  if (typeof node.type === 'string' && node.children != null) {
    return {
      ...node,
      children: unwrapSnapshotRoot(node.children),
    }
  }

  return node
}

const markTestTree = require('./markTestTree')

function prepareSnapshotTree(node) {
  let tree = markTestTree(unwrapSnapshotRoot(omitSnapshotProps(node)))
  if (
    Array.isArray(tree) &&
    tree.length === 1 &&
    tree[0] &&
    typeof tree[0] === 'object' &&
    tree[0].$$typeof
  ) {
    tree = tree[0]
  }
  return tree
}

module.exports = {
  omitSnapshotProps,
  unwrapSnapshotRoot,
  markTestTree,
  prepareSnapshotTree,
}
