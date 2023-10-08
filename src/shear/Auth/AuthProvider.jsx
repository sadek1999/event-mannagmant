import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.config';


export const authContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null);
    const[loding,setloding]=useState(true)
    const[name,setname]=useState('')
    const[img,setimg]=useState('')

    const singup=(email,password,name,profile,)=>{
        setimg(profile)
        setname(name)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login=(email,password)=>{

        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        setimg('')
        setname('')
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
        name,
        img,
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