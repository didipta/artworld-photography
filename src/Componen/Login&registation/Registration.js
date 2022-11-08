import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [accept,setAccept]=useState(false);
    return (
        <div className="mb-10 p-8">
            
            <form className="flex justify-center flex-col gap-5 shadow-lg shadow-cyan-500/50 items-center m-auto lg:w-5/12 sm:w-full p-10">
            <h1 className="text-xl font-bold mb-5">Registration Here :) </h1>
            <input type="text" placeholder="Enter Your Name" class="input input-bordered input-secondary w-full max-w-xs" />
            <input type="url" placeholder="Enter Your Photo Url" class="input input-bordered input-secondary w-full max-w-xs" />
            <input type="email" placeholder="Enter Your Email" class="input input-bordered input-secondary w-full max-w-xs" />
            <input type="password" placeholder="Enter your Password" class="input input-bordered input-secondary w-full max-w-xs" />
            <div className="flex justify-center items-center gap-2"><input type="checkbox"  class="checkbox checkbox-secondary" onClick={(e)=>setAccept(e.target.checked)} /><span>Accept <Link to="condition" className="text-sky-600">Terms and condition</Link></span></div>
            <button class="btn bg-pink-600 border-none" disabled={accept?false:true}>Sign up</button>
            <div className="text-center">
                
                <h1 className="text-sm font-bold mb-5">Already have an account.Please <Link to="/Loginpage" className="text-sky-600">Login</Link> </h1>
            </div>
            </form>
        </div>
    );
};

export default Registration;