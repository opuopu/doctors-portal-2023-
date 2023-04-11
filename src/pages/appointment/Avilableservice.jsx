import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Modal from '../Modal/Modal';

import AppointmentOptions from './AppointmentOptions';
export default function Avilableservice({selected}) {
// const [Appointments,setappointments] = useState([])
const [treatment,settreatment] = useState(null)
const notify = () => toast('Booking Successfull.',{
  position: 'top-center',
  style: {
    border: '1px solid #5114B9',
    padding: '14px',
    color: 'white',
    fontSize:'18px',
    background:'#5114B9',
  },
});
console.log({notify})
  const {data:Appointments=[]} = useQuery({
    queryKey:['Appointments'],
    queryFn:async()=>{
      
      const  res = await fetch('http://localhost:5000/services')
       const data = await res.json()
        return data

  }
    
  })
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
            treatment &&    <Modal treatment={treatment}  notify={notify} settreatment={settreatment} date={selected}/>
          }
        </div>
         <ToastContainer/>
    </div>
  )
}
