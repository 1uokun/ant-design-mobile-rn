---
category: Components
type: Data Entry
title: Slider
version: update
---

A Slider component for selecting particular value in range, eg: controls the display brightness of the screen.

### Rule
- By default, the minimum value in the left and maximum value in the right of `Slider` .
- Generally `Slider` is positioned horizontally.

## API

| Properties | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| defaultValue | Default value | `number` \|<br/> `[number, number]` | `range ? [0, 0] : 0` | |
| disabled | Whether disabled | `boolean` | `false` | |
| icon | The icon of slider | `ReactNode` | - | |
| marks | Tick marks | `{ [key: number]: React.ReactNode }` | - | `5.2.1` |
| max | Max value | `number` | `100` | |
| min | Min value | `number` | `0` | |
| onAfterChange | Consistent with the trigger timing of `touchend`, pass the current value as a parameter | `(value: number | [number, number]) => void` | - | |
| onChange | Triggered when the slider is dragged, and the current dragged value is passed in as a parameter | `(value: number | [number, number]) => void` | - | |
| popover | Whether to display the popover when dragging. Support passing in function to customize the rendering content. | `boolean | ((value: number) => ReactNode)` | `false` | `5.2.1` |
| residentPopover | Whether the `popover` is permanently displayed , this attribute takes effect when `popover` exists | `boolean ` | `false` | `5.2.1` |
| range | Whether it is a double sliders | `boolean` | `false` | `5.2.1` |
| step | Step distance, the value must be greater than `0`, and `(max-min)` can be divisible by `step`. When `marks` is not null, the configuration of `step` is invalid | `number` | `1` | `5.2.1` |
| style  | Container style | `StyleProp<ViewStyle>` | - | |
| styles | Semantic DOM style | [SliderStyle](#sliderstyle-interface) | - | `5.2.1` |
| ticks | Whether to display the scale | `boolean` | `false` | `5.2.1` |
| value | Current value | `number` \|<br/> `[number, number]` | - | |

> The returned `value` format is `[number, number]` when `range={true}`, otherwise it is `number`.

### SliderStyle interface

```typescript
interface SliderStyle {
  slider: ViewStyle // Same as `style`
  disabled: ViewStyle
  trackContianer: ViewStyle // track container
  track: ViewStyle // track line
  fill: ViewStyle // Filled portion of the track line

  // Track button wrap + shadow style
  thumb: ViewStyle

  // Tick
  ticks: ViewStyle
  tick: ViewStyle
  tickActive: ViewStyle

  // Mark within the tick
  mark: ViewStyle
  markText: TextStyle
  markTextActive: TextStyle
}
```