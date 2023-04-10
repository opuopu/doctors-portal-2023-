import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [data,setdata] = useState({})


    const onSubmit = data => setdata(data);
  return (
    <div className='flex justify-center'>
           <div className=' mt-20 border border-2 px-6 py-20 w-96 text-center'>
        <p className='font-bold ' >Login</p>
           <form onSubmit={handleSubmit(onSubmit)}>
           <div className="form-control w-full">
  <label className="label">
    <span className="label-text">email</span>
  </label>
  <input type="email"  {...register("email",{required:true})}  placeholder="email here" className="input input-bordered border-2 w-full bg-[#fff]"
   aria-invalid={errors.email ? "true" : "false"} 
  
  />
    {errors.email?.type === 'required' && <p className='text-start' role="alert">email is required</p>}
</div>
           <div className="form-control w-full">
  <label className="label">
    <span className="label-text">password</span>
  </label>
  <input type="password"  {...register("password",{required:true})}  placeholder="password here" className="input input-bordered border-2 w-full bg-[#fff]" 
     aria-invalid={errors.password ? "true" : "false"} 
  />
  {errors.password?.type === 'required' && <p className='text-start' role="alert">password is required</p>}
  <label className="label mt-1">
    <span className="label-text">new here? <Link to='/signup'>sign up</Link></span>
  </label>
</div>

      
      <input type="submit"  value='Login Now' className='btn btn-primary bg-secondary1  border-0 mx-auto mt-4 w-full'/>
    </form>
    </div>
    </div>
 
  )
}
