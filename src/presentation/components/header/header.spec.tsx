import { Header } from '@/presentation/components'
import { ApiContext } from '@/presentation/contexts'
import { fireEvent, render, screen } from '@testing-library/react'
import { AccountModel } from '@/domain/models'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'
import React from 'react'
import { mockAccountModel } from '@/domain/test'

type SutTypes = {
  history: MemoryHistory
  serCurrentAccountMock: (account: AccountModel) => void
}

const makeSut = (account = mockAccountModel()): SutTypes => {
  const serCurrentAccountMock = jest.fn()
  const history = createMemoryHistory({ initialEntries: ['/'] })
  render(
    <ApiContext.Provider value={
      {
        setCurrentAccount: serCurrentAccountMock,
        getCurrentAccount: () => account
      }
    }>
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

  test('Should render username correctly', () => {
    const account = mockAccountModel()
    makeSut(account)
    expect(screen.getByTestId('username')).toHaveTextContent(account.name)
  })
})
