import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Checkout from './Checkout'

export default function Payment() {
const booking = useLoaderData()

const stripePromise = loadStripe('pk_test_51JxCs8L9MVzlfyPW6MiDYImUQSwzD002SDhIh1dTDxivUVST8KdjirTamkm2XH1LaWnMIabkFmR1hQGaEOr1kKNQ00AinLagdn');

  return (
    <div>
      <ToastContainer/>
      <h3 className='text-2xl'>please pay:  <span className='font-bold pb-12'>${booking?.price}</span>
      </h3>
   <div className='w-96'>
   <Elements stripe={stripePromise}>
  <Checkout toast={toast} booking={booking}/>
      </Elements>
   </div>
    </div>
  )
}
