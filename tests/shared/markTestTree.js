const REACT_TEST_JSON = Symbol.for('react.test.json')

function normalizeChildren(children) {
  if (children == null) {
    return children
  }
  if (typeof children === 'string' || typeof children === 'number') {
    return [children]
  }
  if (Array.isArray(children)) {
    return children.map((child) =>
      typeof child === 'object' && child !== null ? markTestTree(child) : child,
    )
  }
  if (typeof children === 'object') {
    return [markTestTree(children)]
  }
  return children
}

/**
 * Re-attach `react.test.json` symbol so Jest snapshots use JSX (`<View>`) format.
 * React 19 test renderer no longer sets this on `toJSON()` output.
 */
function markTestTree(node) {
  if (node == null) {
    return node
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return node
  }
  if (Array.isArray(node)) {
    return node.map(markTestTree)
  }
  if (typeof node === 'object' && typeof node.type === 'string') {
    return {
      $$typeof: REACT_TEST_JSON,
      type: node.type,
      props: node.props,
      children: normalizeChildren(node.children),
    }
  }
  return node
}

module.exports = markTestTree
