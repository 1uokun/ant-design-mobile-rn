import {
  outlineGlyphMap,
  OutlineGlyphMapType,
} from '@ant-design/icons-react-native/lib/outline'
import { Grid, Icon, SearchBar, Text } from '@ant-design/react-native'
import { loadAsync } from 'expo-font'
import React from 'react'
import { ScrollView } from 'react-native'

const data = Object.keys(outlineGlyphMap).map((item: OutlineGlyphMapType) => ({
  icon: <Icon name={item} />,
  text: item,
}))
export default class IConDemo extends React.Component<any, any> {
  state = {
    data,
    fontLoaded: false,
  }

  async componentDidMount() {
    await this._loadAssets()
  }

  async _loadAssets() {
    await loadAsync({
      antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
      antfill: require('@ant-design/icons-react-native/fonts/antfill.ttf'),
    })
    this.setState({ fontLoaded: true })
  }

  render() {
    if (!this.state.fontLoaded) {
      return <Text>'字体加载中...'</Text>
    }
    return (
      <ScrollView>
        <SearchBar
          placeholder="Search by icon name"
          onChange={(text) => {
            this.setState(() => ({
              data: data.filter((d) => d.text.match(new RegExp(text, 'gi'))),
            }))
          }}
        />
        <Grid data={this.state.data} columnNum={3} hasLine={false} />
      </ScrollView>
    )
  }
}

export const title = 'Icon'
export const description = 'Icon Example'
