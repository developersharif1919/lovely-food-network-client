/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const user = null;
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
      
    
      const authInfo = { registerUser};
      return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
};

export default AuthProvider;