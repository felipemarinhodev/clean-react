import * as Helper from '../support/http-mocks'
import faker from 'faker'

export const mockEmailInUseError = (): void => Helper.mockEmailInUseError(/signup/)
export const mockUnexpectedError = (): void => Helper.mockUnexpectedError(/signup/, 'POST')
export const mockInvalid = (): void => Helper.mockOk(/signup/, 'POST', { invalid: faker.random.uuid() })
export const mockOk = (): void => Helper.mockOk(/signup/, 'POST', {
  accessToken: faker.random.uuid(),
  name: faker.name.findName()
})
