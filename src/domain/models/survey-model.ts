export type SurveyModel = {
  id: string
  question: string
  answers: [{
    image?: string
    anwser: string
  }]
  date: Date
  didAnwser: boolean

}
