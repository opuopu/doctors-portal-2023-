import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import UseAuth from '../../context/UseAuth'
import './cc.css'
export default function MyAppointment() {
  const {user} = UseAuth()

  const {data:myappointment=[],refetch,isLoading} =useQuery({
    queryKey:['myappointment',user?.email],
    queryFn:async()=>{
      const url = `http://localhost:5000/myappointment?email=${user?.email}`
      const res = await fetch(url,{
         headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`
         }
      })
      const data = await res.json()
      return data
    }
  })
  return (
    <div className="overflow-x-auto">
    <table className="table w-full">
      {/* head */}
      <thead>
        <tr className='trs'>
          <th className='ths'>position</th>
          <th className='ths'>Name</th>
          <th className='ths'>Service</th>
      
          <th className='ths'>Date</th>
          <th className='ths'>Time</th>
          <th className='ths'>Fee</th>
          <th className='ths'>Status</th>

        </tr>
      </thead>
      <tbody>
        {
          myappointment?.map((mybook,index)=>(
            <tr className='trs' key={index}>
          <th className='ths'>{index+1}</th>
          <td className='ths'> {mybook?.name}</td>
          <td className='ths'>{mybook?.treatment}</td>
      
          <td className='ths'>{mybook?.selectedDate}</td>
          <td className='ths'>{mybook?.slot}</td>
          <td className='ths'>${mybook?.price}</td>
          <td className='ths'>{mybook?.price && !mybook?.paid ?<Link to={`/dashboard/payment/${mybook?._id}`}> <button className='btn btn-secondary btn-sm'>Pay Now</button></Link>:'already paid'}</td>
        </tr>
          ))
        }
      </tbody>
    </table>
  </div>
  )
}
