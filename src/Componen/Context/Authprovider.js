import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../Firebase/Firebase.config';
export const AuthContext=createContext();
const Authprovider = ({children}) => {
    const [theme,setTheme]=useState(false);
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null);
    const auth=getAuth(app);


    const googlelogin=(provider)=>
    {
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
 
    const signoutall=()=>
    {
        setLoading(true);
        signOut(auth)
        .then(res => {
            setUser(null);
        })
        .catch(error=>{
            setUser(null);
        })
    }
    const createuser=(email,password)=>
    {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const siginwithemailpassword=(email,password)=>
    {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const upadateuserprofile=(profile)=>
    {
        return updateProfile(auth.currentUser,profile);
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>
          {
              
              setUser(currentUser);
              setLoading(false);
          });
          return ()=>
          {
              unsubscribe();
          }
  
      },[])
    const authInfo={
    user,
    loading,
    theme,
    setTheme,
    googlelogin,
    createuser,
    siginwithemailpassword,
    upadateuserprofile,
    signoutall
    }
    return (
        
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default Authprovider;