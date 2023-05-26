import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext=createContext(null);
const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider();

const AuthProviders = ({children}) => {

    const [user,setUser]=useState('null');
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }

    const googleSignIn=(auth,googleProvider)=>{
        return signInWithPopup(auth,googleProvider)
    }
  
    const githubSignIn=(auth,githubProvider)=>{
        return signInWithPopup(auth,githubProvider)
    }

    const updateUserData=(name,photoUrl)=>{
      return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL: photoUrl 
      })
    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,loggedUser=>{
               setUser(loggedUser)
               setLoading(false);
        })
        return()=>{
            return unsubscribe();
        }
    },[])

    const authInfo={
        user,
        loading,auth,googleProvider,githubProvider,
        createUser,
        updateUserData,
        loginUser,
        logOut,
        googleSignIn,
        githubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;