import faker from 'faker'
import { Authentication } from '@/domain/usecases'

export const mockAccountModel = (): Authentication.Model => ({
  accessToken: faker.random.uuid(),
  name: faker.name.findName()
})
