import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import faker from 'faker'
import Input from './input'
import Context from '@/presentation/contexts/form/form-context'

const makeSut = (fieldName: string): RenderResult => (
  render(
    <Context.Provider value={{ state: {} }} >
      <Input name={fieldName} />
    </Context.Provider>
  )
)

describe('Input Component', () => {
  test('Should begin with readOnly', () => {
    const fieldName = faker.database.column()
    const sut = makeSut(fieldName)
    const input = sut.getByTestId(fieldName) as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })

  test('Should remove readOnly on focus', () => {
    const fieldName = faker.database.column()
    const sut = makeSut(fieldName)
    const input = sut.getByTestId(fieldName) as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBe(false)
  })

  test('Should focus input on label click', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const input = sut.getByTestId(field)
    const label = sut.getByTestId(`${field}-label`)
    fireEvent.click(label)
    expect(document.activeElement).toBe(input)
  })
})
