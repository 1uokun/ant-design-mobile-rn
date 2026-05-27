import rnDemoTest from '../../../tests/shared/demoTest'

// Overlay demo tree is too large / unstable for Jest snapshots on RN 0.81 / React 19.
rnDemoTest('popover', { skip: true })
