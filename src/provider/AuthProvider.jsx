/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const registerUser = (email, password, name, photoUrl) => {
        return createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            return updateProfile(user, { displayName: name, photoURL: photoUrl })
              .then(() => {
                return user;
              })
              .catch((error) => {
                console.log(error);
                return user;
              });
          })
          .catch((error) => {
            console.log(error);
            throw error;
          });
      };

      const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };
      
      const logOut = () => {
        return signOut(auth);
      };

      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
          setUser(loggedInUser);
        });
        return () => {
          unSubscribe();
        };
      }, []);
    
      const authInfo = { registerUser, user, logOut, loginUser};
      return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
};

export default AuthProvider;