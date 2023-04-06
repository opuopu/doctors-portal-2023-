import React from 'react'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

export default function InfoCard() {

    const card = [
        {
             id:1,
            title:"Opening Hours",
            desc:'Lorem Ipsum is simply dummy text of the pri',
            img:clock,
            color:"bg-gradient-to-r from-primary1 to-secondary1 "
            

        },
        {
            id:2,
            title:"Visit our location",
            desc:'Lorem Ipsum is simply dummy text of the pri',
            img:marker,
            color:"bg-third"
            

        },
        {
            id:3,
            title:"Contact us now",
            desc:'+000 123 456789',
            img:phone,
            color:"bg-gradient-to-r from-primary1 to-secondary1 "
            

        },
    ]
  return (
    <div className='grid lg:grid-cols-3 gap-4'>
        {
            card?.map(c=> 
                
                <div className={`card card-side shadow-xl ${c?.color}`}>
  <figure><img src={c.img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-[#fff] font-bold">{c?.title}</h2>
    <p className='text-[#fff]'>Click the button to watch on Jetflix app.</p>
   
  </div>
</div>
                
                
                
                )
        }
    </div>
  )
}
