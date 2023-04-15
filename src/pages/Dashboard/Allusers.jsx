import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Allusers() {

    const {data:allusers=[],refetch} =useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/users`,{
              headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}` 
              }
            })
            const data = res.json()
            return data
        }
    })
    // handleaddmin 
    const handleadmin =id =>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:"PUT",
          headers:{
            authorization:`bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=>res.json())
        .then(data=>{
           
         if(data.modifiedCount>0){
            toast.success('admin created')
            refetch()
         }
        })
    }
  return (
    <div>

<table className="table w-full">
      {/* head */}
      <thead>
        <tr className='trs'>
          <th className='ths'>position</th>
          <th className='ths'>Email</th>
          <th className='ths'>Name</th>
          <th className='ths'>Admin Action</th>
          <th className='ths'>Delete User</th>


        </tr>
      </thead>
      <tbody>
        {
          allusers?.map((users,index)=>(
            <tr className='trs' key={index}>
          <th className='ths'>{index+1}</th>
          <td className='ths'> {users?.email}</td>
          <td className='ths'>{users?.name}</td>
          <td className='ths'>{users?.role ? 'Already Admin' :<button onClick={()=>handleadmin(users?._id)} className='btn btn-xs btn-primary  pb-1'>Make Admin</button>}</td>
          <td className='ths'> <button className='btn btn-xs btn-secondary pb-1 text-[#fff]'>Delete</button></td>
      

        </tr>
          ))
        }
      </tbody>
    </table>
    </div>
  )
}
