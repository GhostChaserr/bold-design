import { render, screen } from '@testing-library/react'
import Button from './Button'


test('Should render button', () => {
  render(<Button text='button' />)
  const buttonElement = screen.getByText(/button/i)
  expect(buttonElement).toBeInTheDocument()
})