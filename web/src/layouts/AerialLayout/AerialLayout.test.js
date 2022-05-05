import { render } from '@redwoodjs/testing/web'

import AerialLayout from './AerialLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AerialLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AerialLayout />)
    }).not.toThrow()
  })
})
