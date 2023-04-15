import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

export default function AddDoctor() {
  const { register, handleSubmit, watch, formState: { errors },reset } = useForm();

 const apikey = '3d12a655c1f0274bd41469492d2a5e4c' 
  const {data:specialtys=[],refetch} =useQuery({
    queryKey:['specialtys'],
    queryFn:async()=>{
        const res = await fetch(`http://localhost:5000/appointmentSpecialty`)
        const data = res.json()
        return data
    }
})
const onSubmit = (data) =>{
  const formData = new FormData();
  const img = data.img[0];
  
  if (!img) {
    console.error('No image selected');
    return;
  }
  
  if (img.size <= 0) {
    console.error('Empty image');
    return;
  }
  
  formData.append('image', img);
  const url = `https://api.imgbb.com/1/upload?key=${apikey}`;
  fetch(url, {
    method: 'POST',
    body: formData,
  })
  .then(res => res.json())
  .then(imagedata => {
if(imagedata.success){
  const img  = imagedata.data.url
  adddoctorToDatabase(data,img,reset)
}
  })
  .catch(error => {
    console.error(error);
  })

}

const adddoctorToDatabase =(doctor,img,reset) =>{
  const newdoctor ={
    ...doctor,
    img
  }
  fetch(`http://localhost:5000/adddoctor`,{
    method:'POST',
    headers: {
      "Content-type": "application/json"
    },
    body:JSON.stringify(newdoctor)
    
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    if(data.acknowledged){
      toast.success('doctor added successfull')
      reset()
    }
  })
  .catch(error=>{
    console.log(error.message)
    if(error){
      toast.error('something went wrong')
    }
  })
}
  return (
    <>
  <ToastContainer/>
    <div>
   
    <div className='flex justify-center'>
    <div className=' mt-20 border border-2 px-6 py-20 w-96 text-center'>
 <p className='font-bold ' >Add a Doctor </p>
    <form onSubmit={handleSubmit(onSubmit)}>

    <div className="form-control w-full">
<label className="label">
<span className="label-text">fullname</span>
</label>
<input type="text"  {...register("name",{required:true})}  placeholder="name here" className="input input-bordered border-2 w-full bg-[#fff]"
aria-invalid={errors.name ? "true" : "false"} 

/>
{errors.name?.type === 'required' && <p className='text-start' role="alert">name is required</p>}

</div>






    <div className="form-control w-full">
<label className="label">
<span className="label-text">email</span>
</label>
<input type="email"  {...register("email",{required:true})}  placeholder="email here" className="input input-bordered border-2 w-full bg-[#fff]"
aria-invalid={errors.email ? "true" : "false"} 

/>
{errors.email?.type === 'required' && <p className='text-start' role="alert">email is required</p>}
</div>
    
<div className="form-control  mt-4 w-full bg-[#fff]">
<label className="label">
<span className="label-text">Specialty</span>
</label>
<select  {...register("specialty",{required:true})}  className="select select-bordered w-full  bg-[#fff]">
 {
  specialtys?.map(specialty =>(
  <>

    <option>{specialty.name}</option>
  </>
  
  ))
 }
</select>
</div>
<div className="form-control w-full mt-4 bg-[#fff]">
  <label className="label">
    <span className="label-text">Add Doctor Img</span>
  
  </label>
  <input type="file" {...register("img",{required:true})}   className="file-input file-input-bordered w-full bg-[#fff]" />
  
</div>

<input  type="submit"  value='Add a Doctor' className='btn btn-primary bg-secondary1  border-0 mx-auto mt-6 w-full'/>
</form>
</div>
</div>

</div>
</>
  )
}

