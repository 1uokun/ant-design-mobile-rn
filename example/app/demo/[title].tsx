import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { OTHERS, UIBARS, UICONTROLS, UIVIEWS } from '../../../rn-kitchen-sink/demoList'

const ALL_DEMOS = [...UIVIEWS, ...UICONTROLS, ...OTHERS, ...UIBARS]

export default function DemoScreen() {
  const { title } = useLocalSearchParams<{ title: string }>()
  const demo = ALL_DEMOS.find((item) => item.title === title)
  const DemoComponent = demo?.module?.default

  return (
    <>
      <Stack.Screen
        options={{
          title: demo?.title ?? title,
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          contentStyle: styles.screenContent,
        }}
      />
      <View style={styles.container}>
        {DemoComponent ? <DemoComponent /> : null}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  screenContent: {
    flex: 1,
    backgroundColor: '#f5f5f9',
    ...(Platform.OS === 'web' ? { minHeight: 0 } : null),
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f9',
    ...(Platform.OS === 'web' ? { minHeight: 0, height: 0 } : null),
  },
})
