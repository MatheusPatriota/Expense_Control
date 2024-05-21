import { addDoc, collection } from "firebase/firestore";
import { db } from "../../server/firebase";
import { CreditCardProps } from "../../mock/db/creditCard";

export async function CreateCreditCard(creditCard: CreditCardProps) {
  try {
    const docRef = await addDoc(collection(db, "creditCard"), { creditCard });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
