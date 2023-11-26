/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)


  }
  const sigIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)

  }
  const LogOut = () => {
    setLoading(true)
    return signOut(auth)

  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false)

      if (currentUser) {
        const userInfo = { email: currentUser?.email }

        axiosPublic.post('/jwt', {userInfo}, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
      }
    })
    return () => {
      return unSubscribe()
    }
  }, [axiosPublic])
  const authInfo = { createUser, sigIn, LogOut, user, loading }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;