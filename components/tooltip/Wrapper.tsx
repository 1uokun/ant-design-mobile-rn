import React, { ClassAttributes, ReactElement, memo, useCallback } from 'react'
import { LayoutChangeEvent } from 'react-native'

type ChildElement = ReactElement & {
  props: {
    onLayout?: (e: LayoutChangeEvent) => void
    [key: string]: unknown
  }
}

export default memo(
  (props: {
    children: ReactElement & ClassAttributes<ReactElement>
    setReference: (el: unknown) => void
    onLayout: () => void
    trigger: string
    onTrigger: (e: unknown) => void
  }) => {
    const childElement = React.Children.only(props.children) as ChildElement

    const onLayout = useCallback(
      (e: LayoutChangeEvent) => {
        if (typeof childElement.props.onLayout === 'function') {
          childElement.props.onLayout(e)
        }
        props.setReference?.(
          (e.nativeEvent as { target?: unknown }).target ?? e.nativeEvent,
        )
        props.onLayout()
      },
      [childElement.props, props],
    )

    const onTrigger = useCallback(
      (e: unknown) => {
        const triggerHandler = childElement.props[props.trigger]
        if (typeof triggerHandler === 'function') {
          triggerHandler(e)
        }
        props.onTrigger(e)
      },
      [childElement.props, props],
    )

    return React.cloneElement(childElement, {
      onLayout,
      [props.trigger]: onTrigger,
    })
  },
)
