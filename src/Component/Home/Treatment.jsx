import React from 'react'

import img from '../../assets/images/treatment.png'
export default function Treatment() {
  return (
 <div>
     <div className="hero my-14">
    <div className="hero-content flex-col lg:flex-row">
      <img src={img} className="lg:w-1/2 sm:w-full  rounded-lg shadow-2xl" />
      <div className=''>
        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        <button className="btn btn-primary bg-primary1 border-0">Get Started</button>
      </div>
    </div>

    
  </div>

 </div>
  )
}
