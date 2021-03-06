import { LoadSurveyList } from '@/domain/usecases'
import faker from 'faker'

export const mockSurveyModel = (): LoadSurveyList.Model => ({
  id: faker.random.uuid(),
  question: faker.random.words(10),
  date: faker.date.recent(),
  didAnwser: faker.random.boolean()
})

export const mockSurveyListModel = (): LoadSurveyList.Model[] => [
  mockSurveyModel(),
  mockSurveyModel(),
  mockSurveyModel()
]
