import React from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import 'react-native-reanimated'

export function rootContainer(container: React.ReactNode) {
  return (
    <GestureHandlerRootView style={styles.root}>
      {container}
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    minHeight: '100%',
  },
})
