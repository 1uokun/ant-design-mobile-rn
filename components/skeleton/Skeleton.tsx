import React, { useEffect, useRef } from 'react'
import {
  Animated,
  StyleProp,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native'
import { useTheme } from '../style'
import { SkeletonProps } from './PropsType'
import {
  SkeletonAnimationContext,
  startSkeletonAnimation,
} from './SkeletonProvider'
import SkeletonStyles from './style'

// Animated skeleton component
const AnimatedSkeleton: React.FC<{
  style?: StyleProp<ViewStyle>
  shimmerStyle?: StyleProp<ViewStyle>
  [key: string]: any
}> = ({ style, shimmerStyle, ...restProps }) => {
  const { width: screenWidth } = useWindowDimensions()
  const sharedAnimation = React.useContext(SkeletonAnimationContext)
  const progress = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (!sharedAnimation) {
      const animation = startSkeletonAnimation(progress)
      return () => {
        animation.stop()
        progress.setValue(0)
      }
    }
  }, [progress, sharedAnimation])

  const shimmerWidth = React.useMemo(() => {
    const flat = StyleSheet.flatten(shimmerStyle)
    const w = typeof flat?.width === 'number' ? flat.width : 0
    return w || 160
  }, [shimmerStyle])

  const animationProgress = sharedAnimation?.progress ?? progress
  const translateX = animationProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [-shimmerWidth, screenWidth + shimmerWidth],
  })
  const opacity = animationProgress.interpolate({
    inputRange: [0, 0.18, 0.5, 0.82, 1],
    outputRange: [0, 0.36, 1, 0.36, 0],
  })

  const skeletonOpacity = animationProgress.interpolate({
    inputRange: [0, 0.18, 0.5, 0.82, 1],
    outputRange: [1, 0.65, 0.3, 0.65, 1],
  })

  return (
    <Animated.View
      style={[
        style,
        {
          overflow: 'hidden',
          opacity: skeletonOpacity,
        },
      ]}
      {...restProps}
    >
      <Animated.View
        pointerEvents="none"
        style={[
          {
            position: 'absolute',
            left: 0,
            height: '100%',
            opacity,
            transform: [{ translateX }],
          },
          shimmerStyle,
        ]}
      />
    </Animated.View>
  )
}

const InternalSkeleton: React.FC<SkeletonProps> = (props) => {
  const { animated, style, styles: customStyles, ...restProps } = props
  const themeStyles = useTheme({
    styles: customStyles,
    themeStyles: SkeletonStyles,
  })

  if (!animated) {
    return <View style={[themeStyles.skeleton, style]} {...restProps} />
  }

  return (
    <AnimatedSkeleton
      style={[themeStyles.skeleton, style]}
      shimmerStyle={themeStyles.skeletonShimmer}
      {...restProps}
    />
  )
}

const Skeleton = React.memo(InternalSkeleton) as typeof InternalSkeleton

Skeleton.displayName = 'Skeleton'

export default Skeleton
