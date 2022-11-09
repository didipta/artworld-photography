import React, { useState } from 'react';
import useTitle from '../hook/Title';
import toast, { Toaster } from 'react-hot-toast';
const Addservice = () => {
    const [service,setService]=useState();
    let message;
    useTitle("Add service page")
    const handlesubmit=(e)=>
    {
        e.preventDefault();
        const form=e.target;
        console.log(service);
        fetch("https://server-side-beta.vercel.app/services",{
            method:"post",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(service)
        })
        .then(res=>res.json())
        .then(data=>{
            form.reset();
            toast.success('Successfully Added!')
            console.log(data);
        })
    }
    const handleInputBlur=event=>
    {
        const field=event.target.name;
        const value=event.target.value;
        const newService={...service};
        newService[field]=value;
        setService(newService);
    }
    return (
        <div className="mb-10 p-8">
            
        <form className="flex justify-center flex-col gap-5 shadow-lg shadow-cyan-500/50 items-center m-auto lg:w-5/12 sm:w-full p-10" onSubmit={handlesubmit}>
        <h1 className="text-xl font-bold mb-5">New Service Add</h1>
        <input type="text" placeholder="Enter service Name" onBlur={handleInputBlur} name="name" class="input input-bordered input-secondary w-full max-w-xs" required/>
        <input type="url" placeholder="Enter service Photo Url" onBlur={handleInputBlur} name="img" class="input input-bordered input-secondary w-full max-w-xs" required />
        <input type="text" placeholder="Enter Event number" onBlur={handleInputBlur} name="Event" class="input input-bordered input-secondary w-full max-w-xs" required />
        <input type="text" placeholder="Enter the amount" onBlur={handleInputBlur} name="price" class="input input-bordered input-secondary w-full max-w-xs" required/>
        <textarea class="textarea textarea-secondary w-80" onBlur={handleInputBlur} placeholder="Enter the detail" name="detail"></textarea>
        <button class="btn bg-pink-600 border-none">Save</button>
      
        </form>
        <Toaster
        position="top-center"
        reverseOrder={false}
        />
    </div>
    );
};

export default Addservice;