import { addDoc, collection } from "firebase/firestore";
import { db } from "../../server/firebase";
import { UserProps } from "../../types/User";

export async function CreateUser(user: UserProps) {
  try {
    const docRef = await addDoc(collection(db, "users"),  user );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
