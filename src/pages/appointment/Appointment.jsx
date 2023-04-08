import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
export default function Appointment() {
    const [selected, setSelected] = useState(new Date());
    console.log(format(selected,'pp'))
    let footer = <p>Please pick a day.</p>;
    if (selected) {
      footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
  return (
    <div className="hero  bg-white-200 my-14">
    <div className="hero-content flex-col justify-around lg:flex-row-reverse">
      <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl" />
      <div>
      <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
      </div>
    </div>
  </div>
  )
}
