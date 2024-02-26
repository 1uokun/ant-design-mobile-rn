const data = require('@bang88/china-city-data')
import { Button, List, Picker, Provider } from '@ant-design/react-native'
import {
  PickerValue,
  PickerValueExtend,
} from '@ant-design/react-native/es/picker-view/PropsType'
import { district } from 'antd-mobile-demo-data'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const CustomChildren = (props: any) => (
  <TouchableOpacity onPress={props.onPress}>
    <View
      style={{
        height: 36,
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text style={{ flex: 1 }}>{props.children}</Text>
      <Text style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>
        {props.extra}
      </Text>
    </View>
  </TouchableOpacity>
)

// visible用法
function BasicDemo() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState([])
  const [extend, setExtend] = useState()
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 5,
        paddingLeft: 16,
      }}>
      <Button
        type="primary"
        onPress={() => {
          setVisible(true)
        }}>
        选择
      </Button>

      {/* extend渲染所选值 */}
      <Text>
        {extend?.items?.map((item: any) => item.label).join(',') || ' 未选择'}
      </Text>

      {/* visible控制显示/隐藏 */}
      <Picker
        data={data}
        cols={3}
        onChange={setValue}
        onClose={() => {
          setVisible(false)
        }}
        visible={visible}
        value={value}
        onOk={(v: PickerValue[], ext: PickerValueExtend) => {
          setValue(v)
          setExtend(ext)
        }}
      />
    </View>
  )
}

export default class PopupExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      value: [],
      pickerValue: [],
    }
  }
  onPress = () => {
    setTimeout(() => {
      this.setState({
        data: district,
      })
    }, 500)
  }
  onChange = (value: any) => {
    this.setState({ value })
  }

  render() {
    return (
      <Provider>
        <View>
          <Text style={{ margin: 16 }}>List Children</Text>
          <List>
            <Picker
              visible={this.state.visible}
              data={data}
              cols={3}
              value={this.state.value}
              onChange={this.onChange}>
              <List.Item arrow="horizontal">省市选择</List.Item>
            </Picker>
            <Picker
              data={this.state.data}
              cols={2}
              value={this.state.value}
              onChange={this.onChange}>
              <List.Item arrow="horizontal" onPress={this.onPress}>
                省市选择(异步加载)
              </List.Item>
            </Picker>
            <Picker
              title="选择地区"
              data={district}
              cols={2}
              value={this.state.pickerValue}
              onChange={(v: any) => this.setState({ pickerValue: v })}
              onOk={(v: any) => this.setState({ pickerValue: v })}>
              <CustomChildren>Customized children</CustomChildren>
            </Picker>
          </List>
          <Text style={{ margin: 16 }}>visible 控制显示/隐藏</Text>
          <BasicDemo />
        </View>
      </Provider>
    )
  }
}
