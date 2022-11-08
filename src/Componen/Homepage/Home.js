import React from 'react';
import useTitle from '../hook/Title';
import img6 from "../../Componen/img/img6.jpg"
import img8 from "../../Componen/img/img8.jpg"
import Banner from './Banner';
import "./home.css"
import Service from './Service';
import { Link } from 'react-router-dom';
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
                <div className="text-center p-6">
                <Link to="/service"><button className="btn btn-outline btn-info">Sce more</button></Link>
                </div>
            </div>
            <div className="m-6">
            <div className="card bg-base-100 shadow-xl image-full">
            <figure><img src={img8} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Wedding background design!</h2>
                <p className="lg:w-9/12">Designing your wedding can feel a little overwhelming, especially when your venue is a blank slate. There are so many different decor elements that go into your special day and we know it can be hard to remember them all. That’s why we decided a checklist was in order to help you nail every detail. No matter what you choose to include or omit, this wedding decor checklist will help you stay on top of your wedding planning game.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Sce More</button>
                </div>
            </div>
            </div>
            </div>
                <div className="mt-7 lg:w-9/12 lg:m-auto m-3">
            <div className="card bg-base-100 shadow-xl lg:flex-row md:flex-row sm:flex-col">
            <figure><img src={img6} alt="Movie"/></figure>
            <div className="card-body lg:w-10/12 sm:w-full">
                <h2 className="card-title text-2xl font-bold">Best Wedding Photographers<div className="swap-on">🥳</div></h2>
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