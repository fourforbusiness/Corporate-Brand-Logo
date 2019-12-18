import React from 'react'
import Logo from '../src'
import renderer from 'react-test-renderer'
//import { mount, shallow } from 'enzyme'

describe('four for business Corporate Logo / Icon', () => {
  describe('Logo"', () => {
    test('Plain', () => {
      const component = renderer.create(<Logo />)
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
    test('Width', () => {
      const component = renderer.create(<Logo width={320} />)
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
    test('Width Array', () => {
      const component = renderer.create(<Logo width={[50, 100, 150, 200]} />)
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  }),
    describe('Icon', () => {
      test('Plain', () => {
        const component = renderer.create(<Logo icon />)
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
      })
      test('Width', () => {
        const component = renderer.create(<Logo icon width={64} />)
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
      })
      test('Width Array', () => {
        const component = renderer.create(<Logo icon width={[16, 32, 64]} />)
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
      })
    })
})
