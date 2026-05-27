import glob from 'glob'
import MockDate from 'mockdate'
import React, { act } from 'react'
import renderer from 'react-test-renderer'
import { prepareSnapshotTree } from './omitSnapshotProps'

export default function rnDemoTest(component, options = {}) {
  const files = glob.sync(`./components/${component}/demo/*.tsx`)

  files.forEach((file) => {
    let testMethod = options.skip === true ? test.skip : test
    if (Array.isArray(options.skip) && options.skip.some(c => file.includes(c))) {
      testMethod = test.skip
    }
    testMethod(`renders ${file} correctly`, () => {
      // https://github.com/boblauer/MockDate#api
      MockDate.set('11/22/2016', -60) // Set an arbitrary time zone
      let Demo = require(`../.${file}`)
      Demo = Demo.default || Demo
      let instance
      act(() => {
        instance = renderer.create(<Demo />)
      })
      expect(prepareSnapshotTree(instance.toJSON())).toMatchSnapshot()
      MockDate.reset()
    })
  })
}
