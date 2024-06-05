export interface UserProps {
  userId: string,
  name: string,
  role: string,
  email: string,
  expense: string[],
  income: string[],
  totalMonthIncome: number,
  imageURL?: string,
  familyId?: string,
  createdAt?: Date,
  modifiedAt?: Date,
  deletedAt?: Date,
}
