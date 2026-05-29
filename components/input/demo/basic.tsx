import { Input, List } from '@ant-design/react-native'
import React from 'react'
import { Platform, ScrollView } from 'react-native'

export default function InputExample() {
  const [value, setValue] = React.useState('')
  return (
    <ScrollView
      style={{ flex: 1 }}
      keyboardShouldPersistTaps="handled"
      {...(Platform.OS === 'ios'
        ? {
            automaticallyAdjustKeyboardInsets: true,
            contentInsetAdjustmentBehavior: 'automatic' as const,
          }
        : {})}>
      <List renderHeader="基本用法">
        <List.Item>
          <Input placeholder="请输入内容" />
        </List.Item>
      </List>
      <List renderHeader="受控模式">
        <List.Item>
          <Input
            placeholder="请输入内容"
            value={value}
            onChangeText={setValue}
          />
        </List.Item>
      </List>
      <List renderHeader="带清除按钮">
        <List.Item>
          <Input allowClear placeholder="allowClear" />
        </List.Item>
      </List>
      <List renderHeader="前缀和后缀">
        <List.Item>
          <Input prefix="前缀" suffix="后缀" placeholder="prefix / suffix" />
        </List.Item>
      </List>
      <List renderHeader="带字数提示">
        <List.Item>
          <Input showCount placeholder="showCount" />
        </List.Item>
        <List.Item>
          <Input
            maxLength={5}
            showCount={{
              formatter: ({ count, maxLength }) => `${count}/${maxLength}`,
            }}
            placeholder="showCount.formatter"
          />
        </List.Item>
      </List>
      <List renderHeader="TextArea">
        <List.Item>
          <Input.TextArea
            rows={4}
            maxLength={100}
            showCount
            allowClear
            placeholder="固定行数 row={4}"
          />
        </List.Item>
      </List>
      <List renderHeader="根据内容自动调整高度">
        <List.Item>
          <Input.TextArea autoSize placeholder="autoSize={true}" onChangeText={(e)=>console.log(e)}/>
        </List.Item>
        <List.Item>
          <Input.TextArea
            autoSize={{ minRows: 2, maxRows: 6 }}
            placeholder="autoSize={{ minRows: 2, maxRows: 6 }}"
          />
        </List.Item>
      </List>
    </ScrollView>
  )
}
