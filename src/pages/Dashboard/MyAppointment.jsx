import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAuth from '../../context/UseAuth'
import './cc.css'
export default function MyAppointment() {
  const {user} = UseAuth()

  const {data:myappointment=[],refetch,isLoading} =useQuery({
    queryKey:['myappointment',user?.email],
    queryFn:async()=>{
      const res = await fetch(`http://localhost:5000/myappointment?email=${user?.email}`)
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
        </tr>
          ))
        }
      </tbody>
    </table>
  </div>
  )
}
