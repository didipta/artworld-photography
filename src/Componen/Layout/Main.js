import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Common page/Footer';
import Header from '../Common page/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;