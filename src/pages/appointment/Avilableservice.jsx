import { format } from 'date-fns';
import React from 'react';
export default function Avilableservice({selected}) {
    console.log(selected)
  return (
    <div>
        <div className='text-center'>
            <p className='font-bold text-primary1'>Available Services on {format(selected, 'PP')} </p>
            <p className='my-4  opacity-75'>Please select a service.</p>
        </div>
    </div>
  )
}
