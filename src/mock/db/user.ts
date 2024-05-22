import { UserProps } from "../../types/User";

// one user can have a lot of expenses and incomes
export const user: UserProps  = {
  userId: "1",
  name: "Matheus Patriota",
  role: "adm",
  email: "mpatriota55@gmail.com",
  expense: [],
  income: [],
  totalMonthIncome: 0,
}
