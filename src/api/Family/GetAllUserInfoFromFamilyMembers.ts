import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "../../server/firebase";
import { UserProps } from "../../types/User";

export async function GetAllUserInfoFromFamilyMembers(familyMembers: string[]): Promise<UserProps[]> {
  try {
    if (familyMembers.length === 0) return [];

    const users: UserProps[] = [];

    for (const memberId of familyMembers) {
      const userDocRef = doc(db, "users", memberId);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        users.push(userDocSnap.data() as UserProps);
      } else {
        console.log(`User with ID ${memberId} not found`);
      }
    }

    console.log("Users information:", users);
    return users;
  } catch (error) {
    console.error("Error getting user info from family members: ", error);
    throw error;
  }
}
