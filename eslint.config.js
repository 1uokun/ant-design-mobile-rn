const reactNativeConfig = require('@react-native/eslint-config/flat')
const globals = require('globals')

const customRules = {
  'prettier/prettier': 'off',
  'react-native/no-inline-styles': 0,
  semi: [1, 'never'],
  '@typescript-eslint/no-unused-vars': [
    1,
    {
      args: 'none',
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    },
  ],
}

const eslint9ReactNativeConfig = reactNativeConfig.filter(
  config => config.plugins?.['ft-flow'] === undefined,
)

const patchedReactNativeConfig = eslint9ReactNativeConfig.map(config => {
  if (config.plugins?.['@typescript-eslint']) {
    return {
      ...config,
      rules: {
        ...config.rules,
        ...customRules,
      },
    }
  }
  return config
})

module.exports = [
  {
    ignores: [
      'eslint.config.js',
      'components/**/*.js',
      'components/**/*.jsx',
      '!components/*/__tests__/**/*.js',
    ],
  },
  ...patchedReactNativeConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'prettier/prettier': customRules['prettier/prettier'],
      'react-native/no-inline-styles': customRules['react-native/no-inline-styles'],
      semi: customRules.semi,
    },
  },
  {
    files: [
      '**/__tests__/**/*.{js,jsx,ts,tsx}',
      'tests/**/*.{js,jsx,ts,tsx}',
      'jestSetup.js',
    ],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]
