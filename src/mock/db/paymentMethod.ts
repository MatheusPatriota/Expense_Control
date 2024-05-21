export interface PaymentMethodProps{
  paymentMethodId: string,
  name: string,
  description: string,
}

export const paymentMethod: PaymentMethodProps = {
  paymentMethodId: "1",
  name: "Cartão de Crédito",
  description: "Pagamento Realizado com Cartão de Crédito",
}