import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import useTitle from '../hook/Title';
import toast, { Toaster } from 'react-hot-toast';
const Registration = () => {
    const {createuser,upadateuserprofile}=useContext(AuthContext);
    const [accept,setAccept]=useState(false);
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    const navigator=useNavigate();
    const [userInfo,setUserinfo]=useState({
        email:"",
        password:"",
        name:"",
        url:""
    });
    const [errorinfo,setErrorinfo]=useState({
        email:"",
        password:"",
        name:"",
        url:"",
        genarel:""
    });
    const handlesubmit=(e)=>
    {
        e.preventDefault();
        const form=e.target;
        const name=e.target.name.value;
        const url=e.target.url.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        createuser(email,password)
        .then(res=>
            {
                console.log(res);
                setErrorinfo({...errorinfo,genarel:"successfully registrated"});
                 form.reset();
                 heandelupdateprofile(name,url);
                 toast.success('Successfully Added!')
                 navigator(from,{replace:true});
            })
        .catch(e=>
            {
                setErrorinfo({...errorinfo,genarel:e});
                toast.error("This didn't work.")
                console.log(e);
            })
    }
    const heandelupdateprofile=(name,url)=>
    {
        const profile={
            displayName:name,
            photoURL:url,
        }
        upadateuserprofile(profile)
        .then(res=>
            {
                setErrorinfo({...errorinfo,genarel:res});
            })
        .catch(e=>
            {
                setErrorinfo({...errorinfo,genarel:e});
            })
        
    }
    const handleEmailchange=(e)=>
    {
        const email=e.target.value;
     if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
     {
        setErrorinfo({...errorinfo,email:"please provide valid email"})
     }
     else
     {
            setErrorinfo({...errorinfo,email:" "})
            setUserinfo({...userInfo,email:email})
     }
    }
    const handlepasswordchange=(e)=>
    {
        const password=e.target.value;
        if(password.length<6)
        {
           setErrorinfo({...errorinfo,password:"Must be at least 6 characters"})
        }
     
        else
        {
            setErrorinfo({...errorinfo,password:" "})
            setUserinfo({...userInfo,password:password})
        }
    }
    useTitle("Registration Here");
    return (
        <div className="mb-10 p-8">
            
            <form className="flex justify-center flex-col gap-5 shadow-lg shadow-cyan-500/50 items-center m-auto lg:w-5/12 sm:w-full p-10" onSubmit={handlesubmit}>
            <h1 className="text-xl font-bold mb-5">Registration Here :) </h1>
            <input type="text" placeholder="Enter Your Name" name="name" class="input input-bordered input-secondary w-full max-w-xs" required/>
            <input type="url" placeholder="Enter Your Photo Url" name="url" class="input input-bordered input-secondary w-full max-w-xs" required />
            <input type="email" placeholder="Enter Your Email" name="email" onChange={handleEmailchange} class="input input-bordered input-secondary w-full max-w-xs" required />
            {errorinfo.email!==" " && errorinfo.email!==""?<p className="text-red-600 text-sm ">{errorinfo.email}</p>:<></>}
            <input type="password" placeholder="Enter your Password" name="password" onChange={handlepasswordchange} class="input input-bordered input-secondary w-full max-w-xs" required/>
            {errorinfo.password!==" "&& errorinfo.password!==""?<p className="text-red-600 text-sm">{errorinfo.password}</p>:<></>}
            <div className="flex justify-center items-center gap-2"><input type="checkbox"  class="checkbox checkbox-secondary" onClick={(e)=>setAccept(e.target.checked)} /><span>Accept <Link to="condition" className="text-sky-600">Terms and condition</Link></span></div>
            {errorinfo.genarel!==" "?<p className="text-red-600 text-sm">{errorinfo.genarel}</p>:<></>}
            <button class="btn bg-pink-600 border-none" disabled={accept?false:true}>Sign up</button>
            <div className="text-center">
                
                <h1 className="text-sm font-bold mb-5">Already have an account.Please <Link to="/Loginpage" className="text-sky-600">Login</Link> </h1>
            </div>
            </form>
            <Toaster
        position="top-center"
        reverseOrder={false}
        />
        </div>
    );
};

export default Registration;