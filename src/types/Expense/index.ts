export interface ExpenseProps {
  expenseId: string;
  userId: string;
  creditCardId: string;
  name: string;
  value: number;
  description: string;
  placeOfPurchase?: string;
  buyingDate: Date;
  isRecurrent: boolean;
  expenseType: string;
  paymentMethod: string;
  isInstallments: boolean;
  currentInstallment: number;
  totalInstallments: number;
  installmentValue: string;
  modifiedAt?: Date;
  createdAt?: Date;
  deletedAt?: Date;
  modifyBy?: string;
}
