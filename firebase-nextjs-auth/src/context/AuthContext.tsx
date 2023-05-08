import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/firebase/config";

const auth = getAuth(firebase_app);

type User = firebase.User | null;

interface AuthContextValue {
  user: User;
}

export const AuthContext = createContext<AuthContextValue>({
  user: null,
});

export const useAuthContext = (): AuthContextValue =>
  useContext<AuthContextValue>(AuthContext);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  console.log("21312", loading);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
