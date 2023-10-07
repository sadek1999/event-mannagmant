import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.config';


export const authContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null);
    const[loding,setloding]=useState(true)

    const singup=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        return signOut(auth)
    }
     
    useEffect(()=>{
         const unSuscribe = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setuser(currentUser);
          })
          return unSuscribe;
    },[])

    const authInfo={
        user,
        loding,
        singup ,
        login,
      logout
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
            
        </authContext.Provider>
    );
};

export default AuthProvider;