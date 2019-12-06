import React from 'react'
import Logo from '../src'
import renderer from 'react-test-renderer'
//import { mount, shallow } from 'enzyme'

describe('four for business Corporate Logo / Icon', () => {
  describe('Logo"', () => {
    test('Logo Plain', () => {
      const component = renderer.create(<Logo />)
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
    test('Logo Width', () => {
      const component = renderer.create(<Logo width={320} />)
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  }),
    describe('Icon', () => {
      test('Icon Plain', () => {
        const component = renderer.create(<Logo icon />)
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
      })
      test('Icon Width', () => {
        const component = renderer.create(<Logo icon width={64} />)
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
      })
    })
})
