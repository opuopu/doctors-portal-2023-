import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { useEffect, useState } from 'react'
import Initialization from "../config/Init"
Initialization()
const Usefirebase =()=>{
    const [user,setuser] = useState({})
    const [loading,setloading] = useState(true)
const auth  = getAuth()
// createuser with email password
const createUserWithEmail =(email,password)=>{
    setloading(true)
      return createUserWithEmailAndPassword(auth,email,password)
}

// LOGIN USER WITH EMAIL AND PASSWORD
const LoginWithEmail =(email,password)=>{
    setloading(true)
 return signInWithEmailAndPassword(auth,email,password)
}


// update name: 

const setName = (name)=>{
   return   updateProfile(auth.currentUser,name)
}


// onAuthStateChanged hold user
useEffect(()=>{
 const unsubscribe =   onAuthStateChanged(auth,user=>{
        if(user){
            setuser(user)
      
            setloading(false)
        }
        else{
            setuser({})
            setloading(false)
        }
    })
    return ()=> unsubscribe()
},[])



// signOut
const signout  = ()=>{
setloading(true)
    return signOut(auth)
    
}


    return {createUserWithEmail,user,LoginWithEmail,signout,setName,loading}
}

export default Usefirebase