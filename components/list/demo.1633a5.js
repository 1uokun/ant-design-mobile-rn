(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[3749],{99351:n=>{n.exports={content:["article",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/list/demo/basic.tsx"},"Demo Source Code"]],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// tslint:disable:no-empty</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Image<span class="token punctuation">,</span> ScrollView<span class="token punctuation">,</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> Item <span class="token operator">=</span> List<span class="token punctuation">.</span>Item<span class="token punctuation">;</span>\n<span class="token keyword">const</span> Brief <span class="token operator">=</span> Item<span class="token punctuation">.</span>Brief<span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">BasicListExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ScrollView</span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> flex<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#f5f5f9\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">automaticallyAdjustContentInsets</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">showsHorizontalScrollIndicator</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">showsVerticalScrollIndicator</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'basic\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">wrap</span><span class="token punctuation">></span></span>\n            文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">disabled</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>箭头向右<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            标题文字\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>箭头向下<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>down<span class="token punctuation">"</span></span> <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            标题文字\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>箭头向上<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>up<span class="token punctuation">"</span></span> <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            标题文字\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>没有箭头<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>empty<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            标题文字\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span>\n            <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n                内容内容\n                <span class="token operator">&lt;</span>Brief style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> textAlign<span class="token punctuation">:</span> <span class="token string">\'right\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>辅助文字内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Brief</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">}</span>\n            multipleLine\n          <span class="token operator">></span>\n            垂直居中对齐\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>内容内容<span class="token punctuation">"</span></span> <span class="token attr-name">multipleLine</span><span class="token punctuation">></span></span>\n            垂直居中对齐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Brief</span><span class="token punctuation">></span></span>辅助文字内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Brief</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span>\n            <span class="token attr-name">wrap</span>\n            <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行<span class="token punctuation">"</span></span>\n            <span class="token attr-name">multipleLine</span>\n            <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>\n            <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>\n          <span class="token punctuation">></span></span>\n            顶部对齐\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Brief</span><span class="token punctuation">></span></span>辅助文字内容辅助文字内容辅助文字内容辅助文字内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Brief</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Brief</span><span class="token punctuation">></span></span>辅助文字内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Brief</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span>\n            <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n                内容内容\n                <span class="token operator">&lt;</span>Brief style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> textAlign<span class="token punctuation">:</span> <span class="token string">\'right\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>辅助文字内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Brief</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">}</span>\n            multipleLine\n            align<span class="token operator">=</span><span class="token string">"bottom"</span>\n          <span class="token operator">></span>\n            底部对齐\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'带缩略图\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">thumb</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            thumb\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span>\n            <span class="token attr-name">thumb</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png<span class="token punctuation">"</span></span>\n            <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>\n          <span class="token punctuation">></span></span>\n            thumb\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span>\n            <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n              <span class="token operator">&lt;</span>Image\n                source<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n                  uri<span class="token punctuation">:</span>\n                    <span class="token string">\'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png\'</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">29</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">29</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n              <span class="token punctuation">/></span></span>\n            <span class="token punctuation">}</span>\n            arrow<span class="token operator">=</span><span class="token string">"horizontal"</span>\n          <span class="token operator">></span>\n            extra为Image\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ScrollView</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code",'// tslint:disable:no-empty\nimport React from \'react\';\nimport { Image, ScrollView, View } from \'react-native\';\nimport { List } from \'@ant-design/react-native\';\nconst Item = List.Item;\nconst Brief = Item.Brief;\nexport default class BasicListExample extends React.Component {\n  render() {\n    return (\n      <ScrollView\n        style={{ flex: 1, backgroundColor: \'#f5f5f9\' }}\n        automaticallyAdjustContentInsets={false}\n        showsHorizontalScrollIndicator={false}\n        showsVerticalScrollIndicator={false}\n      >\n        <List renderHeader={\'basic\'}>\n          <Item data-seed="logId">\n            标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏\n          </Item>\n          <Item wrap>\n            文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行\n          </Item>\n          <Item disabled extra="箭头向右" arrow="horizontal" onPress={() => {}}>\n            标题文字\n          </Item>\n          <Item extra="箭头向下" arrow="down" onPress={() => {}}>\n            标题文字\n          </Item>\n          <Item extra="箭头向上" arrow="up" onPress={() => {}}>\n            标题文字\n          </Item>\n          <Item extra="没有箭头" arrow="empty">\n            标题文字\n          </Item>\n          <Item\n            extra={\n              <View>\n                内容内容\n                <Brief style={{ textAlign: \'right\' }}>辅助文字内容</Brief>\n              </View>\n            }\n            multipleLine\n          >\n            垂直居中对齐\n          </Item>\n          <Item extra="内容内容" multipleLine>\n            垂直居中对齐<Brief>辅助文字内容</Brief>\n          </Item>\n          <Item\n            wrap\n            extra="文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行"\n            multipleLine\n            align="top"\n            arrow="horizontal"\n          >\n            顶部对齐\n            <Brief>辅助文字内容辅助文字内容辅助文字内容辅助文字内容</Brief>\n            <Brief>辅助文字内容</Brief>\n          </Item>\n          <Item\n            extra={\n              <View>\n                内容内容\n                <Brief style={{ textAlign: \'right\' }}>辅助文字内容</Brief>\n              </View>\n            }\n            multipleLine\n            align="bottom"\n          >\n            底部对齐\n          </Item>\n        </List>\n        <List renderHeader={\'带缩略图\'}>\n          <Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">\n            thumb\n          </Item>\n          <Item\n            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"\n            arrow="horizontal"\n          >\n            thumb\n          </Item>\n          <Item\n            extra={\n              <Image\n                source={{\n                  uri:\n                    \'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png\',\n                }}\n                style={{ width: 29, height: 29 }}\n              />\n            }\n            arrow="horizontal"\n          >\n            extra为Image\n          </Item>\n        </List>\n      </ScrollView>\n    );\n  }\n}']]],meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},filename:"components/list/demo/basic.md"}}},21963:(n,a,s)=>{n.exports={basic:s(99351)}}}]);