import Initialization from "../config/Init"
Initialization()
const Usefirebase =()=>{
    const [user,setuser] = useState({})
const auth  = getAuth()
// createuser with email password
const createUserWithEmail =(email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password)
}

// LOGIN USER WITH EMAIL AND PASSWORD
const LoginWithEmail =(email,password)=>{
 return signInWithEmailAndPassword(auth,email,password)
}


// onAuthStateChanged hold user
useEffect(()=>{
 const unsubscribe =   onAuthStateChanged(auth,user=>{
        if(user){
            setuser(user)
            console.log(user)
        }
        else{
            setuser({})
        }
    })
    return ()=> unsubscribe()
},[])



// signOut
const signout  = ()=>{
    return signOut(auth)
}


    return {createUserWithEmail,user,LoginWithEmail,signout}
}

export default Usefirebase