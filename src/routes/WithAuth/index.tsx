import React, { useEffect, useState, ComponentType } from "react";
import { onAuthStateChanged, User, getIdToken } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../server/firebase";

interface WithAuthProps {
  user: User | null;
}

const withAuth = <P extends WithAuthProps>(Component: ComponentType<P>) => {
  return (props: Omit<P, keyof WithAuthProps>) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          setUser(user);
          const token = await getIdToken(user);
          localStorage.setItem("firebaseToken", token); 
        } else {
          setUser(null);
          localStorage.removeItem("firebaseToken");
          navigate("/login");
        }
        setLoading(false);
      });

      return () => unsubscribe();
    }, [navigate]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <Component {...(props as P)} user={user} />;
  };
};

export default withAuth;
