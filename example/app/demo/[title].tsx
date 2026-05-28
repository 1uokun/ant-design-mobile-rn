import { Stack, useLocalSearchParams } from 'expo-router'
import Head from 'expo-router/head'
import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { OTHERS, UIBARS, UICONTROLS, UIVIEWS } from '../../../rn-kitchen-sink/demoList'

const ALL_DEMOS = [...UIVIEWS, ...UICONTROLS, ...OTHERS, ...UIBARS]

// Generate static HTML for each known demo route at build time
export function generateStaticParams() {
  return ALL_DEMOS.map((demo) => ({
    title: demo.title,
  }))
}

export default function DemoScreen() {
  const { title } = useLocalSearchParams<{ title: string }>()
  const demo = ALL_DEMOS.find((item) => item.title === title)
  const DemoComponent = demo?.module?.default
  const pageTitle = demo?.title ?? title ?? 'Demo'

  return (
    <>
      <Head>
        <title>{`${pageTitle} - @ant-design/react-native`}</title>
        <meta
          name="description"
          content="基于蚂蚁金服移动设计规范的 React Native 组件库 HTML 在线预览页面"
        />
      </Head>
      <Stack.Screen
        options={{
          title: pageTitle,
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
    ...(Platform.OS === 'web' ? { minHeight: 0 } : null),
  },
})
