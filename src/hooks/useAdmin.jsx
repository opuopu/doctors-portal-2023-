import { useEffect, useState } from "react"


const useAdmin = email =>{
    const [isAdmin,setAdmin] = useState(false)
    const [isadminloading,setisadminloading] = useState(true)

    useEffect(()=>{
        fetch(`http://localhost:5000/user/admin/${email}`)
        .then(res=>res.json())
        .then(data=>{
           setAdmin(data.isAdmin)
           console.log('data'+data.isAdmin)
           setisadminloading(false)
        console.log(data)
        })
       },[email])
   
       return {isAdmin,isadminloading}
}
export default useAdmin