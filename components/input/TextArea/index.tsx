import React, { forwardRef, memo, useCallback, useMemo, useState } from 'react'
import { TextInput } from 'react-native'
import Input from '../Input'
import { TextAreaProps } from '../PropsType'
import TextAreaStyle from '../style/textarea'

const TextArea = forwardRef<TextInput, TextAreaProps>((props, ref) => {
  const {
    autoSize,
    rows,
    numberOfLines,
    onLayout,
    onContentSizeChange,
    onChangeText: onChangeTextProp,
    ...restProps
  } = props

  // ============================== AutoSize ==============================
  const [minRows, maxRows] = useMemo(() => {
    if (typeof autoSize === 'object') {
      return [Number(autoSize.minRows || 0), Number(autoSize.maxRows || 0)]
    }

    return [0, 0]
  }, [autoSize])

  /**
   * iOS 下 TextInput 的 autoSize 在非受控模式下不会正确触发高度更新，
   * 因此需要在开启 autoSize 时，内部转成受控模式。
   */
  const isUncontrolled =
    restProps.value === undefined || restProps.value === null

  const [innerValue, setInnerValue] = useState(
    restProps.defaultValue?.toString?.() || '',
  )

  const handleChangeText = useCallback(
    (text: string) => {
      onChangeTextProp?.(text)

      if (autoSize && isUncontrolled) {
        setInnerValue(text)
      }
    },
    [autoSize, isUncontrolled, onChangeTextProp],
  )

  // ============================== onLayout ==============================
  const [lineHeight, setLineHeight] = useState(0)
  const [firstLayoutHeight, setFirstLayoutHeight] = useState(0)

  const placeholder = useMemo(() => {
    if ([undefined, null, ''].includes(restProps.placeholder)) {
      // fix: iOS not show when change placeholder bug
      return ' '
    }
    return restProps.placeholder?.toString?.()
  }, [restProps.placeholder])

  // ============================== rest TextAreaProps ==============================
  const restTextAreaProps: Partial<TextAreaProps> = useMemo(() => {
    if (lineHeight === 0 || firstLayoutHeight === 0) {
      return {
        onLayout: (e) => {
          onLayout?.(e)
          if (firstLayoutHeight === 0) {
            setFirstLayoutHeight(e.nativeEvent.layout.height)
          }
        },
        onContentSizeChange: (e) => {
          onContentSizeChange?.(e)
          if (lineHeight === 0) {
            setLineHeight(e.nativeEvent.contentSize.height)
          }
        },
      }
    }

    const padding = firstLayoutHeight - lineHeight

    // `rows={{3}}`
    if (!autoSize) {
      const defaultRows = numberOfLines || rows || 2
      return {
        maxHeight: lineHeight * defaultRows + padding,
        minHeight: lineHeight * defaultRows + padding,
      }
    }

    // https://github.com/ant-design/ant-design-mobile-rn/issues/1471
    const autoSizeProps: Partial<TextAreaProps> =
      isUncontrolled
        ? {
            value: innerValue,
            onChangeText: handleChangeText,
          }
        : {}

    // `autoSize={{minRows:2,maxRows:5}}`
    return {
      // `autoSize={{maxRows:5}}`
      maxHeight: maxRows > 0 ? lineHeight * maxRows + padding : undefined,
      // `autoSize={{minRows:2}}`
      minHeight: minRows > 0 ? lineHeight * minRows + padding : undefined,
      ...autoSizeProps,
    }
  }, [
    autoSize,
    firstLayoutHeight,
    handleChangeText,
    innerValue,
    isUncontrolled,
    lineHeight,
    maxRows,
    minRows,
    numberOfLines,
    onContentSizeChange,
    onLayout,
    rows,
  ])

  return (
    <Input
      themeStyles={TextAreaStyle}
      {...restProps}
      {...restTextAreaProps}
      multiline
      placeholder={placeholder}
      onChangeText={handleChangeText}
      ref={ref}
    />
  )
})

TextArea.displayName = 'Input.TextArea'

export default memo(TextArea)
