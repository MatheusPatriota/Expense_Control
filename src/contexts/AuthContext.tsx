import { createContext, ReactNode, useEffect, useState } from "react";
import { UserProps } from "../types/User";
import { onAuthStateChanged, Unsubscribe, User } from "firebase/auth";
import { auth } from "../server/firebase";

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

  const SignUp = (email: string, password: string) => {
    //implement sign up here - which is implemented below
   }
  
   //Sign in
   const  SignIn = async (email: string, password: string) => {
    //implement sign in here - which is implemented below
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
