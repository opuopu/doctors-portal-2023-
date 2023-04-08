import React from 'react'
import appoitnment from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor.png'
export default function Doctor() {
  return (
<div className="hero  bg-base-200 rounded-lg mb-10 " style={{
    background: `url(${appoitnment})`
}}>
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctor} className="rounded-lg lg:w-1/2 " />
    <div>
        <p className='text-primary1  font-bold'>Appointment</p>
      <h1 className="text-5xl text-[#fff] font-bold">Make an appointment Today</h1>
      <p className="py-6 text-[#fff]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
      <button className="btn btn-primary bg-primary1 border-0">Get Started</button>
    </div>
  </div>
</div>
  )
}
