export type SurveyModel = {
  id: string
  question: string
  answers: SurveyAnswerModel[]
  date: Date
  didAnwser: boolean
}

export type SurveyAnswerModel = {
  image?: string
  anwser: string
}
