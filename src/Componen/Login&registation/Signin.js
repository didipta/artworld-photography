import React, { useContext, useState } from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import useTitle from '../hook/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import { GoogleAuthProvider } from 'firebase/auth';

const Signin = () => {
    const { googlelogin,siginwithemailpassword}=useContext(AuthContext);
    const [error,setError]=useState("");
    const googleprovider=new GoogleAuthProvider();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    const navigator=useNavigate();

    //google sing in
    const handelgooglesignin=()=>
    {
      googlelogin(googleprovider)
      .then(res=>{
        const user=res.user;
        const currentUser = {
            email: user.email
        }

         fetch('https://server-side-beta.vercel.app/jwt', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
               
                // local storage to store jwt token
                localStorage.setItem('Artworld-token', data.token);
                navigator(from,{replace:true});
            });
      })
      .catch(err=>
        {
            console.log(err);
        })
    }
    const handlesubmit=(e)=>
    {
        e.preventDefault();
        const form=e.target;
        const email=e.target.email.value;
        const password=e.target.password.value;
      ///email/password login
        siginwithemailpassword(email,password)
        .then(res=>
            {
                 form.reset();

                 const user = res.user;


                const currentUser = {
                    email: user.email
                }

                 fetch('https://server-side-beta.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                       
                        // local storage to store jwt token
                        localStorage.setItem('Artworld-token', data.token);
                        navigator(from,{replace:true});
                    });
                 
                
            })
        .catch(e=>
            {
                setError("Please check your email and password");
                console.log(e);
            })
    }
    useTitle("Welcome Back")
    return (
        <div className="mb-10 p-8">
            
            <form className="flex justify-center flex-col gap-5 shadow-lg shadow-cyan-500/50 items-center m-auto lg:w-5/12 sm:w-full p-10" onSubmit={handlesubmit}>
            <h1 className="text-xl font-bold mb-5">Welcome Back :) </h1>
            <input type="email" placeholder="Enter Your Email" name="email" class="input input-bordered input-secondary w-full max-w-xs" />
            <input type="password" name="password" placeholder="Enter your Password" class="input input-bordered input-secondary w-full max-w-xs" />
            {error!==" "&& error!==""?<p className="text-red-600 text-sm">{error}</p>:<></>}
            <button class="btn bg-pink-600 border-none">Login</button>
            <div className="text-center">
                <h1 className="text-sm font-bold mb-5">Social Media Login </h1>
                <FontAwesomeIcon icon={faGoogle} className="text-2xl font-extrabold mb-5 cursor-pointer" onClick={handelgooglesignin} ></FontAwesomeIcon>
                <h1 className="text-sm font-bold mb-5">or Create your own account.<Link to="/registration" className="text-sky-600">Registration</Link> </h1>
            </div>
            </form>
        </div>
    );
};

export default Signin;