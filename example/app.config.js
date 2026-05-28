const staticConfig = require('./app.json')

module.exports = ({ config }) => {
  const expoConfig = staticConfig.expo || {}
  const webConfig = expoConfig.web || {}
  const envWebOutput = process.env.EXPO_WEB_OUTPUT

  return {
    ...config,
    ...expoConfig,
    web: {
      ...webConfig,
      ...(envWebOutput ? { output: envWebOutput } : {}),
    },
  }
}
