import { doc, getDoc } from 'firebase/firestore';

import { FamilyMemberProps } from '../../pages/Home';
import { db } from '../../server/firebase';

export async function GetAllFamilyMembers(familyId: string): Promise<FamilyMemberProps | null> {
  try {
    const docRef = doc(db, "family", familyId);
    const familyDoc = await getDoc(docRef);

    if (familyDoc.exists()) {
      console.log("Document data:", familyDoc.data());
      return familyDoc.data() as FamilyMemberProps;
    } else {
      console.log("No such document!");
      return null;  // Retorne null se o documento não existir
    }
  } catch (e) {
    console.error("Error getting the family info: ", e);
    throw new Error("Error getting the family info");  // Opcionalmente, lançar um erro
  }
}
