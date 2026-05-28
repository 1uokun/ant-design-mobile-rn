import { List, SearchBar } from '@ant-design/react-native'
import { useRouter } from 'expo-router'
import Head from 'expo-router/head'
import React, { useMemo, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { OTHERS, UIBARS, UICONTROLS, UIVIEWS } from '../../rn-kitchen-sink/demoList'

const DEMO_SECTIONS = [
  { key: 'uiViews', label: 'UI Views', demos: UIVIEWS },
  { key: 'uiControls', label: 'UI Controls', demos: UICONTROLS },
  { key: 'others', label: 'Others', demos: OTHERS },
  { key: 'uiBars', label: 'UI Bars', demos: UIBARS },
] as const

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f9',
  },
})

function filterDemos(
  demos: (typeof DEMO_SECTIONS)[number]['demos'],
  searchText: string,
) {
  if (!searchText) {
    return demos
  }
  const regex = new RegExp(searchText, 'i')
  return demos.filter((demo) => regex.test(demo.title))
}

export default function HomeScreen() {
  const router = useRouter()
  const [searchText, setSearchText] = useState('')

  const sections = useMemo(
    () =>
      DEMO_SECTIONS.map((section) => ({
        ...section,
        demos: filterDemos(section.demos, searchText),
      })).filter((section) => section.demos.length > 0),
    [searchText],
  )

  return (
    <>
      <Head>
        <title>@ant-design/react-native</title>
        <meta
          name="description"
          content="基于蚂蚁金服移动设计规范的 React Native 组件库 HTML 在线预览页面"
        />
      </Head>
      <ScrollView style={styles.container}>
        <SearchBar
          placeholder="搜索组件"
          value={searchText}
          onChange={setSearchText}
        />
        {sections.map((section) => (
          <List
            key={section.key}
            renderHeader={section.label}
            style={{ marginTop: 0, marginBottom: 0 }}>
            {section.demos.map((demo) => (
              <List.Item
                key={demo.title}
                thumb={demo.icon}
                arrow="horizontal"
                onPress={() => router.push(`/demo/${demo.title}`)}>
                {`${demo.title} ${demo.description}`}
              </List.Item>
            ))}
          </List>
        ))}
      </ScrollView>
    </>
  )
}
