import { useEffect, useState } from "react"


const verifyToken = email =>{
    const [token,settoken] = useState('')
 if(email){
    useEffect(()=>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
          if(data.accessToken){
            localStorage.setItem('accessToken',data.accessToken)
            settoken(data.accessToken)
          }
        })
       },[email])
 }
   return {token}
}
export default verifyToken