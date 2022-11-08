import React from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import useTitle from '../hook/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Signin = () => {
    useTitle("Welcome Back")
    return (
        <div className="mb-10 p-8">
            
            <form className="flex justify-center flex-col gap-5 shadow-lg shadow-cyan-500/50 items-center m-auto lg:w-5/12 sm:w-full p-10">
            <h1 className="text-xl font-bold mb-5">Welcome Back :) </h1>
            <input type="email" placeholder="Enter Your Email" class="input input-bordered input-secondary w-full max-w-xs" />
            <input type="password" placeholder="Enter your Password" class="input input-bordered input-secondary w-full max-w-xs" />
            <button class="btn bg-pink-600 border-none">Login</button>
            <div className="text-center">
                <h1 className="text-sm font-bold mb-5">Social Media Login </h1>
                <FontAwesomeIcon icon={faGoogle} className="text-2xl font-extrabold mb-5"></FontAwesomeIcon>
                <h1 className="text-sm font-bold mb-5">or Create your own account.<Link to="/registration" className="text-sky-600">Registration</Link> </h1>
            </div>
            </form>
        </div>
    );
};

export default Signin;