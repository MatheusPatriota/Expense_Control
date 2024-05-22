import { createContext, ReactNode, useEffect, useState } from "react";
import { UserProps } from "../types/User";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, Unsubscribe, User } from "firebase/auth";
import { auth, db } from "../server/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { CreateUser } from "../api/User/CreateUser";

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  firebaseUser: User | null;
  user: UserProps | null;
  loading: boolean;
  SignIn: (email: string, password: string) => void;
  SignUp: (email: string, password: string) => void;
  SignOut: () => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [firebaseAuthUser, setFirebaseAuthUser] = useState<User | null>(null);
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe: Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setFirebaseAuthUser(currentUser);
      } else {
        setFirebaseAuthUser(null);
      }
      setLoading(false);

      return () => {
        if (unsubscribe) unsubscribe();
      };
    });
  }, []);

  const SignUp = async (email: string, password: string) => {
    setLoading(true);
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      setFirebaseAuthUser(userCredential.user);

      const newUser: UserProps = {
        userId: userCredential.user.uid,
        name: userCredential.user.email || '',
        role: 'common',
        email: email,
        expense: [],
        income: [],
        totalMonthIncome: 0,
      };

      // Create user in Firestore
      await CreateUser(newUser);
      
  
      const userQuery = query(collection(db,'users'), where('email', '==', email));
      const userDoc = await getDocs(userQuery);

      if (userDoc.empty) {
        console.log('No user found with email:', email);
      } else {
        const user = userDoc.docs[0].data();
        setUser(user as UserProps)
        console.log('User information:', user);
      }
    } catch (error) {
      console.error('Error during signUp:', error);
    } finally {
      setLoading(false);
    }
  };
  
  
   //Sign in
   const  SignIn = async (email: string, password: string) => {
    setLoading(true);
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
  
      setFirebaseAuthUser(userCredential.user);
      console.log('User information:', userCredential.user);
      const userQuery = query(collection(db,'users'), where('email', '==', email));
      const userDoc = await getDocs(userQuery);

      if (userDoc.empty) {
        console.log('No user found with email:', email);
      } else {
        const user = userDoc.docs[0].data();
        setUser(user as UserProps)
        console.log('User information:', user);
      }
    } catch (error) {
      console.error('Error during signUp:', error);
    } finally {
      setLoading(false);
      
    }
   }
  
   //Sign out
   const SignOut = async () => {
    //implement sign out here - which is implemented below
   }

   const authValues: AuthContextProps = {
    firebaseUser: firebaseAuthUser,
    user: user,
    loading: loading,
    SignIn,
    SignUp,
    SignOut,
   }

   if (loading) return <div>Loading...</div>;

   return (
    <AuthContext.Provider  value={authValues}>{children}</AuthContext.Provider>
   );
}

export default AuthContextProvider;
