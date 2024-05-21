export interface IncomeProps {
  incomeId: string,
  value: number,
  description: string,
  date: Date,
  userId: string,
  isMonthly?: boolean,
  modifiedAt?: Date,
  createdAt?: Date,
  deletedAt?: Date,
  modifyBy?: string,
}

export const income: IncomeProps = {
  incomeId: "1",
  value: 14000.00,
  description: "Salário",
  date: new Date(),
  userId: "1",
  isMonthly: true,
}