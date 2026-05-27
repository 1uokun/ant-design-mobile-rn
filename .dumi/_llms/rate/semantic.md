### Abstract DOM Structure

```html
<!-- 评分组件外层容器，承载 style 透传属性 -->
<View style={style}>

  <!-- 评分图标交互区域，绑定 PanResponder 手势，响应触摸/滑动评分，对应 styles.rateContainer：横向排列布局 -->
  <View style={styles.rateContainer} onLayout={...}>

    <!-- 单个评分图标容器，支持动画缩放效果（active 时放大至 scale 倍），pointerEvents="none"，对应 styles.icon：图标间距 -->
    <Animated.View style={[styles.icon, iconStyle]} pointerEvents="none">

      <!-- 评分图标本体，根据 starType 渲染 full / half / empty 三种状态 -->
      <!-- full：实心图标，color 着色；half：左右各半，左侧实心右侧空心，支持 RTL 翻转；empty：空心图标，emptyColor 着色 -->
      <!-- 图标来源为 @ant-design/icons-react-native 的 IconFill / IconOutline -->
      <IconFill /> 或 <IconOutline />

    </Animated.View>
    <!-- ... 共 count 个图标 -->

  </View>
</View>
```
