import { addDoc, collection } from "firebase/firestore";
import { db } from "../../server/firebase";
import { PaymentMethodProps } from "../../mock/db/paymentMethod";

export async function CreatePaymentMethod(paymentMethod: PaymentMethodProps) {
  try {
    const docRef = await addDoc(collection(db, "paymentMethod"), { paymentMethod});
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
