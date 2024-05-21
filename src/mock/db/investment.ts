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

export const investment: InvestmentProps = {
  investmentId: "1",
  value: 1000.00,
  description: "Investimento em Ações",
  date: new Date(),
  userId: "1",
  investmentCategoryId: "1",
}