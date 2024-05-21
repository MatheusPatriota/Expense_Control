import { addDoc, collection } from "firebase/firestore";
import { db } from "../../server/firebase";
import { ExpenseTypeProps } from "../../mock/db/expenseType";

export async function CreateExpenseType(expenseType: ExpenseTypeProps) {
  try {
    const docRef = await addDoc(collection(db, "expenseType"), { expenseType});
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
