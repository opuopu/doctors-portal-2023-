import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Loading from '../../Loading';
export default function Checkout({booking,toast}) {
const {name,email,_id} = booking
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
         const [Txid,setTxid] = useState('')
    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, []);
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

          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: name,
                  email:email
                },
              },
            },
          );
          setTxid('')
          if(confirmError){
            toast.error(confirmError.message)
            return
          }
          else{
         if(paymentIntent.status ==="succeeded"){
          toast.success('congrats your payment successfull')
            setTxid(paymentIntent?.id)
            const info ={
              name,
              email, 
              paymentId:paymentIntent?.id
            }
            postPayment(info)
              updateBooking(_id)
         }
          }
        


    }

    const postPayment =info =>{
      fetch(`http://localhost:5000/makepayment`,{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(info)
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
    }

    // update booking api 
    const updateBooking = id =>{
       fetch(`http://localhost:5000/updatebook/${id}`,{
        method:'PUT',
        headers:{
          authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
       })
       .then(res =>res.json())
       .then(data =>{
        console.log(data)
       })

    }
  return (
    <>
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

   { !clientSecret ? <Loading/> : <button  type="submit" className='btn btn-primary mt-10' disabled={!stripe }>
        pay now
    </button>}
  </form>
{
  Txid &&   <p className='mt-6 text-primary1'> Your Transaction id: {Txid}</p>
}
  </>
  )
}
