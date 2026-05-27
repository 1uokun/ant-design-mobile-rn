import React, { act } from 'react'
import renderer from 'react-test-renderer'
import Button from '../index'

// No need to render Snapshot again, because of `./demo.test.js`
describe('Button', () => {
  const pressEvent = { nativeEvent: {} }

  const findButton = (wrapper) =>
    wrapper.root.findByProps({ accessibilityRole: 'button' })

  describe('pressIn', () => {
    let handlePressIn
    /** @type {renderer.ReactTestRenderer} */
    let wrapper

    beforeEach(() => {
      handlePressIn = jest.fn()
      act(() => {
        wrapper = renderer.create(<Button onPressIn={handlePressIn}>foo</Button>)
      })
      act(() => {
        findButton(wrapper).props.onPressIn(pressEvent)
      })
    })

    it('fires pressIn event', () => {
      expect(handlePressIn).toHaveBeenCalledWith(pressEvent)
    })
  })

  describe('pressOut', () => {
    let handlePressOut
    /** @type {renderer.ReactTestRenderer} */
    let wrapper

    beforeEach(() => {
      handlePressOut = jest.fn()
      act(() => {
        wrapper = renderer.create(
          <Button onPressOut={handlePressOut}>foo</Button>,
        )
      })
      act(() => {
        findButton(wrapper).props.onPressOut(pressEvent)
      })
    })

    it('fires pressOut event', () => {
      expect(handlePressOut).toHaveBeenCalledWith(pressEvent)
    })
  })

  describe('showUnderlay', () => {
    let handleShowUnderlay
    /** @type {renderer.ReactTestRenderer} */
    let wrapper

    beforeEach(() => {
      handleShowUnderlay = jest.fn()
      act(() => {
        wrapper = renderer.create(
          <Button onShowUnderlay={handleShowUnderlay}>foo</Button>,
        )
      })
      act(() => {
        findButton(wrapper).props.onPressIn(pressEvent)
      })
    })

    it('fires showUnderlay event', () => {
      expect(handleShowUnderlay).toHaveBeenCalled()
    })
  })

  describe('hideUnderlay', () => {
    let handleHideUnderlay
    /** @type {renderer.ReactTestRenderer} */
    let wrapper

    beforeEach(() => {
      handleHideUnderlay = jest.fn()
      act(() => {
        wrapper = renderer.create(
          <Button onHideUnderlay={handleHideUnderlay}>foo</Button>,
        )
      })
      act(() => {
        findButton(wrapper).props.onPressOut(pressEvent)
      })
    })

    it('fires hideUnderlay event', () => {
      expect(handleHideUnderlay).toHaveBeenCalled()
    })
  })

  describe('disabled', () => {
    it('sets disabled on Pressable', () => {
      let wrapper
      act(() => {
        wrapper = renderer.create(<Button disabled>foo</Button>)
      })
      expect(findButton(wrapper).props.disabled).toBe(true)
    })
  })
})
