import 'react-native-gesture-handler/jestSetup.js'

jest.mock('react-native-reanimated', () => {
  const React = require('react')
  const { View } = require('react-native')

  const createAnimatedComponent = (Component) => Component

  return {
    __esModule: true,
    default: {
      View,
      createAnimatedComponent,
    },
    View,
    createAnimatedComponent,
    useSharedValue: (init) => ({ value: init }),
    useAnimatedStyle: (factory) => factory(),
    useDerivedValue: (factory) => ({ value: factory() }),
    withTiming: (value) => value,
    withSpring: (value) => value,
    withDecay: (value) => value,
    runOnJS: (fn) => fn,
    runOnUI: (fn) => fn,
    Easing: {
      linear: (t) => t,
      ease: (t) => t,
      bezier: () => ({ factory: () => (t) => t }),
    },
    FadeIn: {},
    FadeOut: {},
    Layout: {},
  }
})

const { NativeModules } = require('react-native')
NativeModules.RNCCameraRollPermissionModule = {}
