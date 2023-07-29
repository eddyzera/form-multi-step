import { render, screen } from '@testing-library/react'
import { Hello } from '../hello'

describe('test', () => {
  it('should', () => {
    render(<Hello />)
    const element = screen.getByTestId('hello')
    expect(element).toBeInTheDocument()
  })
})
