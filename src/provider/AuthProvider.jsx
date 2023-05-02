/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from "react";
import { useEffect } from "react";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
     
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
      signInWithPopup(auth, googleProvider)
          .then(result => {
              const loggedInUser = result.user;
              console.log(loggedInUser);
              setUser(loggedInUser)

          })
          .catch(error => {
              console.log('Error: ', error.message)
          })
  }


  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then(result =>{
       const loggedInUser = result.user;
       setUser(loggedInUser)
       console.log(loggedInUser)
      })
      .catch(error=>{
       console.log('Error: ',error.message)
      })
}

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
    
      const authInfo = { registerUser, user, logOut, loginUser, handleGoogleSignIn, handleGitHubSignIn};
      return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
};

export default AuthProvider;