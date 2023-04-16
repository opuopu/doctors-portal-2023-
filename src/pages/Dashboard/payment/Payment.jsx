import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Payment() {
const data = useLoaderData()
console.log(data)
  return (
    <div>Payment</div>
  )
}
