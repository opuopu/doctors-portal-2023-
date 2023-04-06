import React from 'react'
import img from '../assets/images/chair.png'
export default function Banner() {
  return (
    <div>
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img} className=" w-1/2 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here <br /></h1>
      <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard dummy text ever since the</p>
      <button className="btn btn-primary bg-secondary1 border-0 text-white">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}
