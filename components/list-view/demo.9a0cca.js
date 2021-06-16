(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[9277],{96355:n=>{n.exports={content:["article",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/list-view/demo/basic.tsx"},"Demo Source Code"]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Text<span class="token punctuation">,</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ListView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">BasicListExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    layout<span class="token punctuation">:</span> <span class="token string">\'list\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  sleep <span class="token operator">=</span> <span class="token punctuation">(</span>time<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>\n    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  onFetch <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>\n    page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    startFetch<span class="token punctuation">,</span>\n    abortFetch\n  <span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> pageLimit <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>layout <span class="token operator">===</span> <span class="token string">\'grid\'</span><span class="token punctuation">)</span> pageLimit <span class="token operator">=</span> <span class="token number">60</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> skip <span class="token operator">=</span> <span class="token punctuation">(</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> pageLimit<span class="token punctuation">;</span>\n\n      <span class="token comment" spellcheck="true">//Generate dummy data</span>\n      <span class="token keyword">let</span> rowData <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span>\n        <span class="token punctuation">{</span> length<span class="token punctuation">:</span> pageLimit <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">(</span>_<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token template-string"><span class="token string">`item -> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index <span class="token operator">+</span> skip<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token comment" spellcheck="true">//Simulate the end of the list if there is no more data returned from the server</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>page <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        rowData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token comment" spellcheck="true">//Simulate the network loading in ES7 syntax (async/await)</span>\n      <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">startFetch</span><span class="token punctuation">(</span>rowData<span class="token punctuation">,</span> pageLimit<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">abortFetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">//manually stop the refresh or pagination if it encounters network error</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  renderItem <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListView</span>\n        <span class="token attr-name">onFetch</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onFetch<span class="token punctuation">}</span></span>\n        <span class="token attr-name">keyExtractor</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>\n          <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>layout<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n        <span class="token punctuation">}</span></span>\n        <span class="token attr-name">renderItem</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>renderItem<span class="token punctuation">}</span></span>\n        <span class="token attr-name">numColumns</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>layout <span class="token operator">===</span> <span class="token string">\'list\'</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token string">\'ListView\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">\'ListView Example\'</span><span class="token punctuation">;</span>'},["code","import React from 'react';\nimport { Text, View } from 'react-native';\nimport { ListView } from '@ant-design/react-native';\n\nexport default class BasicListExample extends React.Component {\n  state = {\n    layout: 'list',\n  };\n  sleep = (time: any) =>\n    new Promise(resolve => setTimeout(() => resolve(), time));\n  onFetch = async (\n    page = 1,\n    startFetch,\n    abortFetch\n  ) => {\n    try {\n      let pageLimit = 30;\n      if (this.state.layout === 'grid') pageLimit = 60;\n      const skip = (page - 1) * pageLimit;\n\n      //Generate dummy data\n      let rowData = Array.from(\n        { length: pageLimit },\n        (_, index) => `item -> ${index + skip}`\n      );\n\n      //Simulate the end of the list if there is no more data returned from the server\n      if (page === 3) {\n        rowData = [];\n      }\n\n      //Simulate the network loading in ES7 syntax (async/await)\n      await this.sleep(2000);\n      startFetch(rowData, pageLimit);\n    } catch (err) {\n      abortFetch(); //manually stop the refresh or pagination if it encounters network error\n    }\n  };\n\n  renderItem = (item) => {\n    return (\n      <View style={{ padding: 10 }}>\n        <Text>{item}</Text>\n      </View>\n    );\n  };\n\n  render() {\n    return (\n      <ListView\n        onFetch={this.onFetch}\n        keyExtractor={(item, index) =>\n          `${this.state.layout} - ${item} - ${index}`\n        }\n        renderItem={this.renderItem}\n        numColumns={this.state.layout === 'list' ? 1 : 3}\n      />\n    );\n  }\n}\n\nexport const title = 'ListView';\nexport const description = 'ListView Example';"]]],meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},filename:"components/list-view/demo/basic.md"}}},35699:(n,s,a)=>{n.exports={basic:a(96355)}}}]);