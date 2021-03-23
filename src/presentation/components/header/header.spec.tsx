import { Header } from '@/presentation/components'
import { ApiContext } from '@/presentation/contexts'
import { fireEvent, render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import React from 'react'

describe('Header Component', () => {
  test('Should call setCurrentAccount with null', () => {
    const serCurrentAccountMock = jest.fn()
    const history = createMemoryHistory({ initialEntries: ['/'] })
    render(
      <ApiContext.Provider value={{ setCurrentAccount: serCurrentAccountMock }}>
        <Router history={history}>
          <Header />
        </Router>
      </ApiContext.Provider>
    )

    fireEvent.click(screen.getByTestId('logout'))

    expect(serCurrentAccountMock).toHaveBeenCalledWith(undefined)
    expect(history.location.pathname).toBe('/login')
  })
})
