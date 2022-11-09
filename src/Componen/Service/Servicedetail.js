import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import useTitle from '../hook/Title';
import toast, { Toaster } from 'react-hot-toast';
const Servicedetail = () => {
    const {user}=useContext(AuthContext);
    const data=useLoaderData();
    useTitle(data.name);
    const[review,setReview]=useState([]);
    const handlesubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const review=e.target.review.value;

        const reviewinfo={
            username:user.displayName,
            serviceid:data._id,
            email:user.email,
            img:user.photoURL,
            review,
            Date:new Date().toLocaleTimeString()
        }
        fetch("https://server-side-beta.vercel.app/review",{
            method:"post",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(reviewinfo)
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('Successfully review Added!')
            form.reset();
            
        })
    }
        useEffect(()=>{
            fetch(`https://server-side-beta.vercel.app/reviews?serviceid=${data._id}`)
            .then(res=>res.json())
            .then(res=>{
                setReview(res);
            })
        },[review,data])
    
   
    return (
        <div>
            <section className="lg:flex sm:block p-16 gap-10 ">
                <div className="lg:w-7/12 sm:w-full image-full border-solid border-2 border-black-500 flex justify-center overflow-hidden">
                    <img src={data.img} alt=""></img>
                </div>
                <div className="lg:w-6/12 sm:w-full ">
                <h1 className="text-2xl font-bold mb-5">{data.name}</h1>
                <p className="text-lg font-normal mb-5 text-justify">{data.detail}</p>
                <p className="text-2xl font-bold mb-5">{data.price}-৳ </p>
                <div class="badge mb-5">{data.Event} Event</div>
                <div className=" flex gap-5">
                <button class="btn btn-active btn-secondary">Checkout</button>
                <Link to="/service"><button class="btn btn-active">Cancel</button></Link>
                </div>
                </div>
            </section>

            <section>
                {
                   user?<>
                   <div className="flex  flex-col p-10 w-full  gap-10">
                    <div className="shadow-md shadow-black-500/50 p-10">
                        <form className=" m-auto hover:outline-none flex flex-col justify-center gap-5" onSubmit={handlesubmit}>
                            <h1 className="font-bold">Review Add Section</h1>
                        <input type="text" placeholder="Please Enter your valuable review..... " name="review" class="input input-ghost w-full border-white" />
                        <button class="btn btn-outline btn-secondary lg:w-2/12 sm:w-5/12">Submit</button>
                        </form>
                    </div>
                   <div className="p-4">
                    <h1 className="font-bold text-2xl">All Review </h1>
                    {
                        review.map(rev=>
                            <div class="flex flex-row items-center card bg-white gap-0 p-0 pl-4">
                    <div class="avatar">
                    <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={rev.img} alt='' />
                    </div>
                    </div>
                    <div class="card-body pl-3 gap-1">
                        <h2 class="card-title">{rev.username}<span class="badge">{rev.Date}</span></h2>
                        <p>{rev.review}</p>
                    </div>
                    </div>
                            
                            )
                    }
                   </div>
                    
                    
                    </div>
                    
                   
                   </>:<>
                   <div className="flex justify-center items-center text-xl font-semibold p-7">
                    <h1>
                        !!!Please Login to add a review.<Link to="/Loginpage" className="text-cyan-700">Login....</Link>
                    </h1>
                   </div>
                   </>
                }
            </section>
            <Toaster
        position="top-center"
        reverseOrder={false}
        />
        </div>
    );
};

export default Servicedetail;