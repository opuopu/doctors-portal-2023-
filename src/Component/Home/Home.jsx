import React from 'react'
import Banner from '../Banner'
import InfoCard from '../infocard/InfoCard'
import Service from '../service/Service'
import Treatment from './Treatment'

export default function Home() {
  return (
    <div className='mx-4'>
        <Banner/>
        <InfoCard/>
        <Service/>
        <Treatment/>
    </div>
  )
}
