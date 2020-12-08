import * as Helper from '../support/http-mocks'
import faker from 'faker'

export const mockInvalidCredendialsError = (): void => Helper.mockInvalidCredendialsError(/login/)
export const mockUnexpectedError = (): void => Helper.mockUnexpectedError(/login/, 'POST')
export const mockOk = (): void => Helper.mockOk(/login/, 'POST', {
  accessToken: faker.random.uuid(),
  name: faker.name.findName()
})
export const mockInvalid = (): void => Helper.mockOk(/login/, 'POST', {
  invalid: faker.random.uuid()
})
