import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('Should render', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Vite + React')
  })

  it('Should update count', async () => {
    const user = userEvent.setup()
    render(<App />)

    const countBtn = screen.getByRole('button', {
      name: /count is 0/i,
    })

    await user.click(countBtn)

    expect(countBtn).toHaveTextContent('count is 1')
  })
})
