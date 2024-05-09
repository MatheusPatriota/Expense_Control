interface CreditCardProps{
  creditCardId: string,
  name: string,
  description: string,
  bank: string,
  limit: number,
}


export const creditCard: CreditCardProps = {
  creditCardId: "1",
  name: "Nubank",
  description: "Cartão de Crédito Nubank",
  bank: "Nubank",
  limit: 13000.00,
}