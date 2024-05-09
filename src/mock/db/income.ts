export interface IncomeProps {
  incomeId: string,
  value: number,
  description: string,
  date: Date,
  userId: string,
  modifiedAt?: Date,
  createdAt?: Date,
  deletedAt?: Date,
  modifyBy?: string,
}