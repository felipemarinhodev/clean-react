import { Header } from '@/presentation/components'
import { ApiContext } from '@/presentation/contexts'
import { fireEvent, render, screen } from '@testing-library/react'
import { AccountModel } from '@/domain/models'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'
import React from 'react'

type SutTypes = {
  history: MemoryHistory
  serCurrentAccountMock: (account: AccountModel) => void
}

const makeSut = (): SutTypes => {
  const serCurrentAccountMock = jest.fn()
  const history = createMemoryHistory({ initialEntries: ['/'] })
  render(
    <ApiContext.Provider value={{ setCurrentAccount: serCurrentAccountMock }}>
      <Router history={history}>
        <Header />
      </Router>
    </ApiContext.Provider>
  )

  return { history, serCurrentAccountMock }
}

describe('Header Component', () => {
  test('Should call setCurrentAccount with null', () => {
    const { history, serCurrentAccountMock } = makeSut()
    fireEvent.click(screen.getByTestId('logout'))

    expect(serCurrentAccountMock).toHaveBeenCalledWith(undefined)
    expect(history.location.pathname).toBe('/login')
  })
})
