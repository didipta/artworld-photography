import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../hook/Title';

const Servicedetail = () => {
    const data=useLoaderData();
    useTitle(data.name);
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
            
        </div>
    );
};

export default Servicedetail;