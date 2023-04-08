import React, { useState } from 'react';
import Avilableservice from './Avilableservice';
import Banner from './Banner';

export default function Appointment() {
    const [selected, setSelected] = useState(new Date());
  return (
    <div>
        <Banner setSelected={setSelected} selected={selected}/>
        <Avilableservice selected={selected}/>
    </div>
  )
}
