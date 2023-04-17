import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

export default function Checkout({booking,toast}) {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(!stripe || !elements){
            toast.error('something went wrong')
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            toast.error('card not found')
          return;
        }
          const {error,paymentMethod} = await stripe.createPaymentMethod({
            'type':'card',
            card
          })    
          if(error){
            console.log(error)
            toast.error(error.message)
          }
          else{
            console.log(paymentMethod)
          }
    }
  return (
    
    <form onSubmit={handleSubmit} className='mt-16'>
    <CardElement
      options={{
        style: {
          base: {
            fontSize: '16px',
      
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}
    />
    <button  type="submit" className='btn btn-primary mt-10' disabled={!stripe}>
      Pay Now
    </button>
  </form>
  )
}
