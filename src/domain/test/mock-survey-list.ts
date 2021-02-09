import { SurveyModel } from '../models'
import faker from 'faker'

export const mockSurveyModel = (): SurveyModel => ({
  id: faker.random.uuid(),
  question: faker.random.words(10),
  answers: [
    {
      image: faker.internet.url(),
      anwser: faker.random.words(4)
    },
    {
      image: faker.internet.url(),
      anwser: faker.random.words(4)
    }
  ],
  date: faker.date.recent(),
  didAnwser: faker.random.boolean()
})

export const mockSurveyListModel = (): SurveyModel[] => [
  mockSurveyModel(),
  mockSurveyModel(),
  mockSurveyModel()
]
