(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[965],{40597:n=>{n.exports={content:["article",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/tabs/demo/basic.tsx"},"Demo Source Code"]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ScrollView<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> View<span class="token punctuation">,</span> TouchableOpacity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Tabs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> renderContent <span class="token operator">=</span> <span class="token punctuation">(</span>tab<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token punctuation">{</span>\n    paddingVertical<span class="token punctuation">:</span> <span class="token number">40</span><span class="token punctuation">,</span>\n    justifyContent<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n    alignItems<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n    margin<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n    backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#ddd\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span>tab<span class="token punctuation">.</span>title<span class="token punctuation">}</span> <span class="token operator">-</span> <span class="token punctuation">{</span>i<span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ScrollView</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#fff\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>content<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ScrollView</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">BasicTabsExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> tabs <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'First Tab\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'Second Tab\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'Third Tab\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> tabs2 <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'1st Tab\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'2nd Tab\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'3rd Tab\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'4th Tab\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'5th Tab\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'6th Tab\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'7th Tab\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'8th Tab\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token string">\'9th Tab\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token punctuation">{</span>\n      alignItems<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n      justifyContent<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n      height<span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">,</span>\n      backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#fff\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> flex<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs</span> <span class="token attr-name">tabs</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>tabs<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> First Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> Second Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> Third Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tabs</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Custom RenderTabBar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs</span>\n          <span class="token attr-name">tabs</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>tabs<span class="token punctuation">}</span></span>\n          <span class="token attr-name">renderTabBar</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>tabProps <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>View\n              style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n                paddingHorizontal<span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">,</span>\n                flexDirection<span class="token punctuation">:</span> <span class="token string">\'row\'</span><span class="token punctuation">,</span>\n                alignItems<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n                justifyContent<span class="token punctuation">:</span> <span class="token string">\'space-evenly\'</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n              <span class="token punctuation">{</span>tabProps<span class="token punctuation">.</span>tabs<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>tab<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n                <span class="token comment" spellcheck="true">// change the style to fit your needs</span>\n                <span class="token operator">&lt;</span>TouchableOpacity\n                  activeOpacity<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0.9</span><span class="token punctuation">}</span>\n                  key<span class="token operator">=</span><span class="token punctuation">{</span>tab<span class="token punctuation">.</span>key <span class="token operator">||</span> i<span class="token punctuation">}</span>\n                  style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n                    <span class="token comment" spellcheck="true">// width: \'30%\',</span>\n                    padding<span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span>\n                  <span class="token punctuation">}</span><span class="token punctuation">}</span>\n                  onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n                    <span class="token keyword">const</span> <span class="token punctuation">{</span> goToTab<span class="token punctuation">,</span> onTabClick <span class="token punctuation">}</span> <span class="token operator">=</span> tabProps<span class="token punctuation">;</span>\n                    <span class="token comment" spellcheck="true">// tslint:disable-next-line:no-unused-expression</span>\n                    onTabClick <span class="token operator">&amp;&amp;</span> <span class="token function">onTabClick</span><span class="token punctuation">(</span>tabs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token comment" spellcheck="true">// tslint:disable-next-line:no-unused-expression</span>\n                    goToTab <span class="token operator">&amp;&amp;</span> <span class="token function">goToTab</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                  <span class="token punctuation">}</span><span class="token punctuation">}</span>\n                <span class="token operator">></span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span>\n                    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n                      color<span class="token punctuation">:</span> tabProps<span class="token punctuation">.</span>activeTab <span class="token operator">===</span> i <span class="token operator">?</span> <span class="token string">\'green\'</span> <span class="token punctuation">:</span> undefined<span class="token punctuation">,</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n                  <span class="token punctuation">></span></span>\n                    <span class="token punctuation">{</span>tab<span class="token punctuation">.</span>title<span class="token punctuation">}</span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TouchableOpacity</span><span class="token punctuation">></span></span>\n              <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> First Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> Second Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> Third Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tabs</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> flex<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs</span> <span class="token attr-name">tabs</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>tabs2<span class="token punctuation">}</span></span> <span class="token attr-name">initialPage</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">tabBarPosition</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>renderContent<span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tabs</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token string">\'Tabs\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">\'Tabs example\'</span><span class="token punctuation">;</span>'},["code","import React from 'react';\nimport { ScrollView, Text, View, TouchableOpacity } from 'react-native';\nimport { Tabs } from '@ant-design/react-native';\nconst renderContent = (tab, index) => {\n  const style = {\n    paddingVertical: 40,\n    justifyContent: 'center',\n    alignItems: 'center',\n    margin: 10,\n    backgroundColor: '#ddd',\n  };\n  const content = [1, 2, 3, 4, 5, 6, 7, 8].map(i => {\n    return (\n      <View key={`${index}_${i}`} style={style}>\n        <Text>\n          {tab.title} - {i}\n        </Text>\n      </View>\n    );\n  });\n  return <ScrollView style={{ backgroundColor: '#fff' }}>{content}</ScrollView>;\n};\nexport default class BasicTabsExample extends React.Component {\n  render() {\n    const tabs = [\n      { title: 'First Tab' },\n      { title: 'Second Tab' },\n      { title: 'Third Tab' },\n    ];\n    const tabs2 = [\n      { title: '1st Tab' },\n      { title: '2nd Tab' },\n      { title: '3rd Tab' },\n      { title: '4th Tab' },\n      { title: '5th Tab' },\n      { title: '6th Tab' },\n      { title: '7th Tab' },\n      { title: '8th Tab' },\n      { title: '9th Tab' },\n    ];\n    const style = {\n      alignItems: 'center',\n      justifyContent: 'center',\n      height: 150,\n      backgroundColor: '#fff',\n    };\n    return (\n      <View style={{ flex: 1 }}>\n        <Tabs tabs={tabs}>\n          <View style={style}>\n            <Text>Content of First Tab</Text>\n          </View>\n          <View style={style}>\n            <Text>Content of Second Tab</Text>\n          </View>\n          <View style={style}>\n            <Text>Content of Third Tab</Text>\n          </View>\n        </Tabs>\n        <Text style={{ margin: 16 }}>Custom RenderTabBar</Text>\n        <Tabs\n          tabs={tabs}\n          renderTabBar={tabProps => (\n            <View\n              style={{\n                paddingHorizontal: 16,\n                flexDirection: 'row',\n                alignItems: 'center',\n                justifyContent: 'space-evenly',\n              }}\n            >\n              {tabProps.tabs.map((tab, i) => (\n                // change the style to fit your needs\n                <TouchableOpacity\n                  activeOpacity={0.9}\n                  key={tab.key || i}\n                  style={{\n                    // width: '30%',\n                    padding: 6,\n                  }}\n                  onPress={() => {\n                    const { goToTab, onTabClick } = tabProps;\n                    // tslint:disable-next-line:no-unused-expression\n                    onTabClick && onTabClick(tabs[i], i);\n                    // tslint:disable-next-line:no-unused-expression\n                    goToTab && goToTab(i);\n                  }}\n                >\n                  <Text\n                    style={{\n                      color: tabProps.activeTab === i ? 'green' : undefined,\n                    }}\n                  >\n                    {tab.title}\n                  </Text>\n                </TouchableOpacity>\n              ))}\n            </View>\n          )}\n        >\n          <View style={style}>\n            <Text>Content of First Tab</Text>\n          </View>\n          <View style={style}>\n            <Text>Content of Second Tab</Text>\n          </View>\n          <View style={style}>\n            <Text>Content of Third Tab</Text>\n          </View>\n        </Tabs>\n        <View style={{ flex: 2 }}>\n          <Tabs tabs={tabs2} initialPage={1} tabBarPosition=\"top\">\n            {renderContent}\n          </Tabs>\n        </View>\n      </View>\n    );\n  }\n}\nexport const title = 'Tabs';\nexport const description = 'Tabs example';"]]],meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},filename:"components/tabs/demo/basic.md"}}},64482:(n,s,a)=>{n.exports={basic:a(40597)}}}]);