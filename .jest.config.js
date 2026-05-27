const libDir = process.env.LIB_DIR

const transformPackages = [
  '@react-native',
  'react-native',
  'react-native-modal-popover',
  'react-native-collapsible',
  '@bang88/react-native-ultimate-listview',
  '@react-native-community',
  'react-native-gesture-handler',
  'react-native-reanimated',
  'react-native-worklets',
]

module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: ['./jestSetup.js'],
  moduleNameMapper: {
    '^@ant-design/react-native/lib/(.*)$': '<rootDir>/components/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '_site', 'site'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '\\.png': '<rootDir>/tests/imageStub.js',
  },
  testRegex: libDir === 'dist' ? 'demo\\.test\\.js$' : '.*\\.test\\.js$',
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    '!components/*/style/*.{ts,tsx}',
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(${transformPackages.join('|')})/)`,
  ],
  // Match legacy snapshots: `Array [`, `Object {` instead of `[`, `{`.
  snapshotFormat: {
    printBasicPrototype: true,
  },
}
