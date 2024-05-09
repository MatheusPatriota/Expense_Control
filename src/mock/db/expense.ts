
export interface ExpenseProps {
  expenseId: string,
  userId: string,
  creditCardId: string,
  name: string,
  value: number,
  description: string,
  buyingDate: Date,
  isRecurrent: boolean,
  expenseType: string,
  paymentMethod: string,
  isInstallments: boolean,
  currentInstallment: number,
  totalInstallments: number,
  installmentValue: string,
  modifiedAt?: Date,
  createdAt?: Date,
  deletedAt?: Date,
  modifyBy?: string,
}


export const expense: ExpenseProps = {
  expenseId: "1",
  userId: "1",
  creditCardId: "1",
  name: "Almoço",
  value: 25.00,
  description: "Almoço com amigos",
  buyingDate: new Date(),
  isRecurrent: false,
  expenseType: "1",
  paymentMethod: "1",
  isInstallments: false,
  currentInstallment: 0,
  totalInstallments: 0,
  installmentValue: "0",
}