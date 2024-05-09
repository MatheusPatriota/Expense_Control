interface ExpenseTypeProps{
  expenseTypeId: string,
  name: string,
  description: string,
}

export const expense: ExpenseTypeProps = {
  expenseTypeId: "1",
  name: "Alimentação",
  description: "Despesas com Alimentação",
}