import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';




export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const profileUpdate = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo)
  }
  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser)
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })

    return () => unsubscribe()
  }, [])

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    profileUpdate,
    emailVerification
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;