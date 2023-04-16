import React from 'react'

export default function AppointmentOptions({appointment,settreatment}) {
const    {name,slots,_id,price} = appointment
  return (
    <div className="card  bg-white-100 shadow-xl">
  <div className="card-body ">
    <h2 className="card-title justify-center">{name}</h2>
    <p className='mt-4'>{slots.length >0 ? slots[0] : 'no slots avilable'}</p>
    <p className=''>{slots.length} spaces Available</p>
    <p className=''> fee: <span  className=''>${price}</span></p>
    <div className="card-actions justify-center mt-4">
 
      <label onClick={()=>settreatment(appointment)}  htmlFor={`my-modal-${_id}`}  className="btn bg-primary1 border-0 text-[#fff]">Book Appointment</label>

    </div>
  </div>
</div>
  )
}
