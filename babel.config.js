const path = require('path')

module.exports = function (api) {
  // Jest sets NODE_ENV=test; `yarn pub` may still set BABEL_ENV=dist (api.env('test') is false then).
  const isTest = process.env.NODE_ENV === 'test' || api.env('test')

  // Library build (antd-tools gulp-babel) ships its own Babel config.
  // Avoid merging @react-native/babel-preset here — it conflicts on class loose mode.
  if (api.env('dist') && !isTest) {
    return {}
  }

  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'import',
        {
          libraryName: '@ant-design/react-native',
          customName: (name) => {
            return path.resolve(__dirname, `./components/${name}`)
          },
        },
      ],
      // worklets plugin is not needed in unit tests and can break Jest transforms
      ...(isTest ? [] : ['react-native-worklets/plugin']),
    ],
  }
}
