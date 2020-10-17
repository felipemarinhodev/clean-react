import { RequiredFieldValidation } from './required-field-validation'
import { RequiredFieldError } from '@/validation/errors'

import faker from 'faker'

describe('RequiredFieldValidation', () => {
  test('should return error id field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('should return falsy if field is not empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate(faker.random.word())
    expect(error).toBeFalsy()
  })
})
