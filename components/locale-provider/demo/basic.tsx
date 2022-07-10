import React from 'react'
import { View } from 'react-native'
import {
  Provider,
  DatePicker,
  List,
  Pagination,
  Picker,
  SearchBar,
  WhiteSpace,
  WingBlank,
} from '@ant-design/react-native'
import enUS from '@ant-design/react-native/lib/locale-provider/en_US'
import esES from '@ant-design/react-native/lib/locale-provider/es_ES'
import ruRU from '@ant-design/react-native/lib/locale-provider/ru_RU'
import zhCN from '@ant-design/react-native/lib/locale-provider/zh_CN'
import ptBR from '@ant-design/react-native/lib/locale-provider/pt_BR'

const maxDate = new Date(2018, 11, 3, 22, 0)
const minDate = new Date(2015, 7, 6, 8, 30)

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
]

const Page = React.memo(() => (
  <View>
    <Pagination total={5} current={1} />
    <WhiteSpace />
    <List style={{ backgroundColor: 'white' }}>
      <DatePicker
        mode="date"
        title="Select date"
        minDate={minDate}
        maxDate={maxDate}>
        <List.Item arrow="horizontal">DatePicker</List.Item>
      </DatePicker>
      <Picker data={seasons} cascade={false}>
        <List.Item arrow="horizontal">Picker</List.Item>
      </Picker>
      <WhiteSpace />
      <SearchBar placeholder="Search" showCancelButton />
    </List>
  </View>
))

export default class LocaleProviderExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      locale: 'English',
    }
  }

  onChange = (value: any) => {
    this.setState({
      locale: value[0],
    })
  }

  render() {
    const { locale } = this.state
    const languages: Array<any> = [
      {
        value: '中国',
        label: '中国',
        language: zhCN,
      },
      {
        value: 'English',
        label: 'English',
        language: enUS,
      },
      {
        value: 'Русский',
        label: 'Русский',
        language: ruRU,
      },
      {
        value: 'Español',
        label: 'Español',
        language: esES,
      },
      {
        value: 'Português - BR',
        label: 'Português - BR',
        language: ptBR,
      },
    ]
    const currentLocale = languages.find(
      (item) => item.value === locale,
    ).language

    return (
      <WingBlank>
        <Picker
          data={languages}
          onChange={this.onChange}
          cols={1}
          value={[locale]}>
          <List.Item arrow="horizontal">Choose language</List.Item>
        </Picker>
        <WhiteSpace />
        <Provider locale={currentLocale}>
          <Page />
        </Provider>
      </WingBlank>
    )
  }
}
