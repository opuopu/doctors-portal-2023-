import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import avatar from '../../../assets/images/Ellipse 3.png'

export default function ManageDoctor() {
    const {data:doctors=[],refetch,isLoading} =useQuery({
        queryKey:['doctors'],
        queryFn:async()=>{
          const url = `http://localhost:5000/doctors`
          const res = await fetch(url,{
           headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`
           }
          })
          const data = await res.json()
          return data
        }
      })

      const handleDeleteDoctor = id =>{
        fetch(`http://localhost:5000/doctors/${id}`,{
          method:'DELETE',
          headers:{
            'content-type':'application/json',
            authorization:`bearer ${localStorage.getItem('accessToken')}`
            
          }
          
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.acknowledged){
            toast.success(' successfully deleted')
            refetch()
           }
        })
        .catch(error=>{
          toast.error(error?.message)
        })

      }
  return (
    <div>
      <ToastContainer/>
      <table className="table w-full">
      {/* head */}
      <thead>
        <tr className='trs'>
          <th className='ths'>POSITION</th>
          <th className='ths'>AVATAR</th>
          <th className='ths'>NAME</th>
      
          <th className='ths'>SPECIALITY</th>
          <th className='ths'>ACTION</th>

        </tr>
        </thead>
        <tbody>
        {
          doctors?.map((doctor,index)=>(
            <tr className='trs' key={index}>
          <td className='ths'>{index+1}</td>
          <td className='ths'> {doctor?.img ?<img className='w-2/4 mx-auto' src={doctor?.img} alt="" />: <img src={avatar}></img> }</td>
          <td className='ths'>{doctor?.name}</td>
      
          <td className='ths'>{doctor?.specialty}</td>
          <td className='ths'> <button onClick={()=>handleDeleteDoctor(doctor?._id)} className='btn btn-xs btn-secondary pb-1 text-[#fff]'>Delete</button></td>
      
        </tr>
          ))
        }
        </tbody>

      </table>
    </div>
  )
}
