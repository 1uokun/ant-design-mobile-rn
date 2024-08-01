import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SliderStyle {
  slider: ViewStyle
  disabled: ViewStyle
  trackContianer: ViewStyle
  track: ViewStyle
  fill: ViewStyle

  // 滑轨按钮
  thumb: ViewStyle

  // 刻度
  ticks: ViewStyle
  tick: ViewStyle
  tickActive: ViewStyle

  // 刻度下的标记
  mark: ViewStyle
  markText: TextStyle
  markTextActive: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<SliderStyle>({
    slider: {
      paddingVertical: 5,
      paddingHorizontal: 14,
    },
    disabled: {},
    trackContianer: {
      paddingVertical: 8,
      position: 'relative',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    track: {
      position: 'absolute',
      width: '100%',
      zIndex: 1,
      height: 3,
      borderRadius: 3,
      backgroundColor: theme.fill_body,
    },
    fill: {
      position: 'absolute',
      zIndex: 1,
      height: 3,
      borderRadius: 3,
      backgroundColor: theme.brand_primary,
    },

    thumb: {
      zIndex: 2,
      width: 32,
      height: 32,
      borderRadius: 32,
      marginLeft: -16,
      backgroundColor: theme.fill_base,
      shadowColor: theme.color_text_base,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3,
    },

    ticks: {
      position: 'absolute',
      width: '100%',
      height: 3,
      backgroundColor: 'transparent',
    },
    tick: {
      position: 'absolute',
      top: -2,
      width: 7,
      height: 7,
      marginLeft: -3,
      backgroundColor: theme.fill_body,
      borderRadius: 7,
    },
    tickActive: {
      backgroundColor: theme.brand_primary,
    },

    mark: {
      position: 'relative',
      width: '100%',
      height: 11,
    },
    markText: {
      marginLeft: '-50%',
      fontSize: theme.font_size_caption_sm,
      color: theme.color_text_paragraph,
    },
    markTextActive: {},
  })
