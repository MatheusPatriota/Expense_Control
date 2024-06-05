export interface InvestmentProps {
  investmentId: string,
  value: number,
  description: string,
  date: Date,
  userId: string,
  investmentCategoryId: string,
  modifiedAt?: Date,
  createdAt?: Date,
  deletedAt?: Date,
  modifyBy?: string,
}