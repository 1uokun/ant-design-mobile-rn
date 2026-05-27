import React, { act } from 'react'
import { TextInput } from 'react-native'
import renderer from 'react-test-renderer'
import SearchBar from '../index'

// No need to render Snapshot again, because of `./demo.test.js`

describe('SearchBar', () => {
  describe('test some events', () => {
    let handler
    /** @type {renderer.ReactTestRenderer} */
    let wrapper

    beforeEach(() => {
      handler = jest.fn()
    })

    it('fires onChange event', () => {
      act(() => {
        wrapper = renderer.create(<SearchBar onChange={handler} />)
      })
      act(() => {
        wrapper.root.findByType(TextInput).props.onChangeText('foo')
      })
      expect(handler).toBeCalledWith('foo')
    })

    it('fires onFocus event', () => {
      act(() => {
        wrapper = renderer.create(<SearchBar onFocus={handler} />)
      })
      act(() => {
        wrapper.root.findByType(TextInput).props.onFocus()
      })
      expect(handler).toBeCalledWith(undefined)
    })

    it('fires onBlur event', () => {
      act(() => {
        wrapper = renderer.create(<SearchBar onBlur={handler} />)
      })
      act(() => {
        wrapper.root.findByType(TextInput).props.onBlur()
      })
      expect(handler).toBeCalledWith(undefined)
    })

    it('fires onCancel event', () => {
      act(() => {
        wrapper = renderer.create(
          <SearchBar value="test" showCancelButton onCancel={handler} />,
        )
      })
      act(() => {
        wrapper.getInstance().onCancel()
      })
      expect(handler).toBeCalledWith('test')
    })
  })
})
