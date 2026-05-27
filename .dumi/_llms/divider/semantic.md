### Abstract DOM Structure

```html
<!-- 分割线外层容器，对应 styles.container：居中布局；动态叠加 styles.horizontal（横向）/ styles.vertical（纵向） -->
<View style={[styles.container, orientationStyle, style]}>

  <!-- ══════ 纯分割线模式（无 content）：直接渲染 Line 组件 ══════ -->

  <!-- 实线模式（variant='solid'）：单色填充块，flex: 1 撑满容器 -->
  <View style={{ flex: 1, backgroundColor }} />

  <!-- 原生虚线模式（variant='dashed'，无 pattern）：使用 borderStyle='dashed' 实现，性能最优 -->
  <View style={{ flex: 1, overflow: 'hidden' }}>
    <View style={{ borderStyle: 'dashed', borderWidth }} />
  </View>

  <!-- 自定义虚线模式（variant='dashed'，有 pattern）：JS 循环渲染分段 View，通过 onLayout 测量线长动态计算分段数（上限 500） -->
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <View /> <!-- 单个虚线分段，按 pattern=[len, gap] 控制宽度与间距，...总计 count 个 -->
  </View>

  <!-- ══════ 带内容模式（有 content）：首尾各一段分隔线 + 中间内容区 ══════ -->

  <!-- 首段 Line（position='right' 时可能为 null 由尾段替代） -->
  <View style={lineStyle}>
    <Line />  <!-- 实线/原生虚线/自定义虚线 -->
  </View>

  <!-- 内容区域，动态叠加 padding 和 margin（受 innerPadding、orientationMargin、position 控制） -->
  <View style={contentStyle}>
    <!-- 文字内容：string / number 包裹为 Text；ReactNode 直接渲染 -->
    <!-- 对应 styles.content：文字颜色与字号 -->
    <Text style={styles.content} />
  </View>

  <!-- 尾段 Line（position='left' 时可能为 null 由首段替代） -->
  <View style={lineStyle}>
    <Line />
  </View>
</View>
```
