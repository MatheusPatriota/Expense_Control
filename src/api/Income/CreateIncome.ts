import { addDoc, collection } from "firebase/firestore";
import { db } from "../../server/firebase";
import { IncomeProps } from "../../mock/db/income";

export async function CreateIncome(income: IncomeProps) {
  try {
    const docRef = await addDoc(collection(db, "income"), { income});
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
