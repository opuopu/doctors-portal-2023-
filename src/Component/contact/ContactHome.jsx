import React from 'react'
import appointment from '../../assets/images/appointment.png'
export default function ContactHome() {
  return (
<div className="hero "style={{
     background:`url(${appointment})`
}}>
    <div className='text-center'>
        <p className='text-primary1 my-2 font-bold'>Contact us</p>
        <h1 className='text-4xl text-[#fff]'>Stay connected with us</h1>
        <form action="" className='flex flex-col'>
        <input type="text" placeholder="email" className="input my-4 bg-[#fff] w-full " />
        <input type="text" placeholder="subject" className="input w-full bg-[#fff] " />
        <textarea className="textarea textarea-bordered bg-[#fff] my-4 h-40" placeholder="details"></textarea>
        <button className="btn bg-primary1 btn-primary mb-6 border-0">Get Started</button>

        </form>
        
    </div>
</div>
  )
}
