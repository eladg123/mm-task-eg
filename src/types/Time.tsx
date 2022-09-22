import { ExcludeDate } from './ExcludeDate'

export type Time = {
  makeDays: number
  availableDaysOfWeek: Number[]
  excludeDates: ExcludeDate[]
}
