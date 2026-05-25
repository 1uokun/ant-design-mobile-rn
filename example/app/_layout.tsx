import { Icon, Provider } from '@ant-design/react-native'
import { useFonts } from 'expo-font'
import * as Haptics from 'expo-haptics'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import React, { useCallback, useState } from 'react'
import { Platform } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import 'react-native-reanimated'
import { HapticsContextProvider } from '../../components/provider/HapticsContext'
import Theme from '../../rn-kitchen-sink/components/Theme'

SplashScreen.preventAutoHideAsync()

function RootNavigator() {
  const [theme, setTheme] = useState(null)
  const [currentTheme, setCurrentTheme] = useState(null)

  const changeTheme = (nextTheme: typeof theme, nextCurrentTheme: typeof currentTheme) => {
    setTheme(nextTheme)
    setCurrentTheme(nextCurrentTheme)
  }

  return (
    <Provider theme={theme ?? undefined}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          ...(Platform.OS === 'web'
            ? { headerBackImage: () => <Icon name="arrow-left" /> }
            : {}),
        }}>
        <Stack.Screen
          name="index"
          options={{
            title: 'Ant Design',
            headerRight: () => (
              <Theme changeTheme={changeTheme} currentTheme={currentTheme} />
            ),
          }}
        />
        <Stack.Screen name="demo/[title]" />
      </Stack>
    </Provider>
  )
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
    antfill: require('@ant-design/icons-react-native/fonts/antfill.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <GestureHandlerRootView
      onLayout={onLayoutRootView}
      style={{ flex: 1, ...(Platform.OS === 'web' ? { minHeight: 0 } : null) }}>
      <HapticsContextProvider
        onHaptics={() =>
          Platform.OS !== 'web' &&
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        }>
        <RootNavigator />
      </HapticsContextProvider>
    </GestureHandlerRootView>
  )
}
