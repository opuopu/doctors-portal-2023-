import React from 'react'

export default function Singleservice({service}) {
  return (
    <div className="card w-100  shadow-xl">
    <figure className=" pt-10">
      <img src={service.img} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{service?.title}</h2>
      <p>{service?.desc}</p>
   
    </div>
  </div>
  )
}
