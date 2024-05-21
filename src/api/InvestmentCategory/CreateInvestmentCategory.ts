import { addDoc, collection } from "firebase/firestore";
import { db } from "../../server/firebase";
import { InvestmentCategoryProps } from "../../mock/db/investmentCategory";

export async function CreateInvestmentCategory(investmentCategory: InvestmentCategoryProps) {
  try {
    const docRef = await addDoc(collection(db, "investmentCategory"), { investmentCategory});
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
