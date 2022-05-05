import { render } from '@redwoodjs/testing/web'

import AerialPage from './AerialPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AerialPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AerialPage />)
    }).not.toThrow()
  })
})
