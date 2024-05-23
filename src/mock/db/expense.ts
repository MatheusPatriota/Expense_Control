import { ExpenseProps } from "../../types/Expense";

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