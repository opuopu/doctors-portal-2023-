import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Modal from '../Modal/Modal';

import Loading from '../Loading';
import AppointmentOptions from './AppointmentOptions';
export default function Avilableservice({selected}) {
// const date = format(selected,'pp')

const [treatment,settreatment] = useState(null)
const notify = () => toast('Booking Successfull.',{
  position: 'top-center',
  style: {
    border: '1px solid #5114B9',
    padding: '12px',
    color: 'white',
    fontSize:'18px',
    background:'#5114B9',
  },
});
console.log(selected)
const date = format(selected, 'MMM d, yyyy')
console.log(date)

console.log({notify})
  const {data:Appointments=[],refetch,isLoading} = useQuery({
    queryKey:['Appointments',date],
    queryFn:async()=>{
      
      const  res = await fetch(`http://localhost:5000/services?date=${date}`)
       const data = await res.json()
        return data

  }
  
  })
  if(isLoading){
    return  <Loading></Loading>
  }
  return (
    <div>
        <div className='text-center'>
            <p className='font-bold text-primary1'>Available Services on {format(selected, 'PP')} </p>
            <p className='my-4  opacity-75'>Please select a service.</p>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
           {
              Appointments?.map(appointment=> <AppointmentOptions 
                appointment={appointment} 
                key={appointment._id}
                settreatment={settreatment}
                
                
                />
                
                )
            }
           </div>
          {
            treatment &&    <Modal treatment={treatment} refetch={refetch} toast={toast}  notify={notify} settreatment={settreatment} date={selected}/>
          }
        </div>
         <ToastContainer/>
    </div>
  )
}
