import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import AppointmentOptions from './AppointmentOptions';
export default function Avilableservice({selected}) {
const [Appointments,setappointments] = useState([])
const [treatment,settreatment] = useState({})

  useEffect(()=>{
       fetch(`./Treatment.json`)
       .then(res=>res.json())
       .then(data =>setappointments(data))
  },[])
  return (
    <div>
        <div className='text-center'>
            <p className='font-bold text-primary1'>Available Services on {format(selected, 'PP')} </p>
            <p className='my-4  opacity-75'>Please select a service.</p>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
           {
              Appointments.map(appointment=> <AppointmentOptions 
                appointment={appointment} 
                key={appointment._id}
                settreatment={settreatment}
                
                
                />
                
                )
            }
           </div>
           <Modal treatment={treatment} date={selected}/>
        </div>
    </div>
  )
}
