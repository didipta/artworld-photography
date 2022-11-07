import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Common page/Footer';
import Header from '../Common page/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="lg:m-16 sm:m-1 md:m-10">
            <Outlet></Outlet>
            </div>
           
            <Footer></Footer>
            
        </div>
    );
};

export default Main;