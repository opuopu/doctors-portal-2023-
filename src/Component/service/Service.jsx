import React from 'react'
import img2 from '../../assets/images/cavity.png'
import img1 from '../../assets/images/fluoride.png'
import img3 from '../../assets/images/whitening.png'
import Singleservice from './Singleservice'
export default function Service() {
    const serviceCard = [
        {
             id:1,
            title:"Fluoride Treatment Hours",
            desc:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:img1,
     
            

        },
        {
            id:2,
            title:"Cavity Filling",
            desc:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:img2,
  
            

        },
        {
            id:3,
            title:"Teeth Whitening ",
            desc:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:img3,
       
            

        },
    ]
  return (
    <div>
         <div className='text-center my-8'>
            <h5 className='text-primary1 text-lg font-bold'>Our Service</h5>
            <h1 className=' text-3xl my-3'>Services We Provide</h1>
         </div>
         <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
            {
                serviceCard.map(service=>
                  <Singleservice service={service} key={service?.id}/>
                   )
            }
         </div>
    </div>
  )
}
