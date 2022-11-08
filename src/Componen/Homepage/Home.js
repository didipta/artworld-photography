import React from 'react';
import useTitle from '../hook/Title';
import img6 from "../../Componen/img/img6.jpg"
import Banner from './Banner';
import "./home.css"
import Service from './Service';
const Home = () => {
    useTitle("Home page")
    return (
        <div>
            <Banner></Banner>
            <div className="mt-7 ">
                <div>
                    <h1 className="text-center text-3xl font-bold">Services</h1>
                </div>
                <Service show={3}></Service>
            </div>
                <div className="mt-7">
            <div className="card bg-base-100 shadow-xl lg:flex-row md:flex-row sm:flex-col">
            <figure><img src={img6} alt="Movie"/></figure>
            <div className="card-body lg:w-10/12 sm:w-full">
                <h2 className="card-title text-2xl font-bold">Best Wedding Photographers<div class="swap-on">🥳</div></h2>
                <p className=" text-xl">The beauty of candid wedding photography lies in the natural reactions of the people. It clicks people in their best emotions and brings out the feelings of that moment through a picture. In traditional photography, if the photo is of the newlywed couple, then they will be visible clearly.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">See more</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Home;