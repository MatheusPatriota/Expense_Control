import { addDoc, collection } from "firebase/firestore";
import { db } from "../../server/firebase";
import { InvestmentProps } from "../../mock/db/investment";

export async function CreateInvestment(investment: InvestmentProps) {
  try {
    const docRef = await addDoc(collection(db, "investment"), { investment});
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
