import { addDoc, collection } from "firebase/firestore";
import { db } from "../../server/firebase";
import { ExpenseProps } from "../../mock/db/expense";

export async function CreateExpense(expense: ExpenseProps) {
  try {
    const docRef = await addDoc(collection(db, "expense"), { expense});
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
