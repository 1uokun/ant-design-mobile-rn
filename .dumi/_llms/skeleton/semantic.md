### Abstract DOM Structure

```html
<!-- 非动画模式（animated=false）：静态占位块 -->
<!-- 对应 styles.skeleton：骨架屏底色和尺寸 -->
<View style={[styles.skeleton, style]} />

<!-- 动画模式（animated=true）：带扫光 + 呼吸效果 -->
<AnimatedSkeleton>

  <!-- 骨架屏主体容器，动态叠加 opacity 呼吸动画（skeletonOpacity），overflow='hidden' 裁剪扫光溢出 -->
  <!-- 对应 styles.skeleton：骨架屏底色和尺寸 -->
  <!-- 呼吸动画与扫光联动：扫光亮时骨架暗（opacity≈0.3），扫光走时骨架亮（opacity≈1） -->
  <Animated.View style={[styles.skeleton, style, { opacity: skeletonOpacity }]} onLayout={...}>

    <!-- 扫光层，绝对定位覆盖在骨架上，同时执行 translateX 水平移动 + opacity 渐隐渐显 -->
    <!-- 对应 styles.skeletonShimmer：扫光条宽度与颜色（半透明白色） -->
    <Animated.View style={[styles.skeletonShimmer, { position: 'absolute', transform: [{ translateX }], opacity }]} pointerEvents="none" />

  </Animated.View>
</AnimatedSkeleton>
```
