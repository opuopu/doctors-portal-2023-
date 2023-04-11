
import { format } from 'date-fns';
import React from 'react';
import UseAuth from '../../context/UseAuth';

export default function Modal({treatment,date,notify,settreatment}) {
  const {user} = UseAuth()
  
   const  {name,slots,_id} = treatment
const handlebooking = (e) =>{
e.preventDefault()
const form  = e.target
const date = form.date.value 
const slot = form.slot.value 
// const name = form.fullName.value 
const number = form.number.value 
// const email = form.email.value
const booking ={
    selectedDate:date, 
    slot,
    name:user?.displayName,
    number,
    email:user?.email
}
fetch('http://localhost:5000/booking', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(booking)
})
  .then(response => response.json())
  .then(data =>{
    if(data.acknowledged){
      notify()
settreatment(null)
    }
  })
  .catch(error => console.error(error));
}

  return (
    <>
    
        <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
 
<div className="modal  modal-bottom sm:modal-middle">
  <div className="modal-box bg-[#fff] ">
  <p className='text-start mb-4 font-bold'>{name}</p>
<form action="" onSubmit={handlebooking}>

<input name='date' type="text" defaultValue={format(date, 'PP')} readOnly  placeholder="date" className="input input-bordered border-2 w-full bg-[#fff]" />
<select name='slot' className="select select-bordered w-full bg-[#fff] mt-4 ">
  <option disabled selected className='opacity-50'>{slots && slots[0]}</option>
  
 {
    slots?.map(slot=> <option>{slot}</option>)
 }
</select>
  <input name='fullName' defaultValue={user?.displayName} readOnly type="text" placeholder="full name" className="input input-bordered border-2 w-full mt-4 bg-[#fff]" />
  <input name='number' type="number" placeholder="phone number" className="input input-bordered border-2 w-full mt-4 bg-[#fff]" />
  <input name='email' defaultValue={user?.email} readOnly type="email" placeholder="email" className="input input-bordered border-2 w-full mt-4 bg-[#fff]" />
<input type="submit" value="submit" className='w-full mt-4 bg-[#000] py-2 rounded text-[#fff] font-bold' />
</form>
    <div className="modal-action">
      <label htmlFor={`my-modal-${_id}`} onClick={notify}  className="btn">Yay!</label>
    </div>
  </div>
</div>
    </>
  )
}
