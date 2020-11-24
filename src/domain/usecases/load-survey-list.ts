import { SurveyModel } from '@/domain/models'

export interface LoadServeyList {
  loadAll: () => Promise<SurveyModel[]>
}
