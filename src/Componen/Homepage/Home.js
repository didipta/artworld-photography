import React from 'react';
import useTitle from '../hook/Title';
import Banner from './Banner';
import "./home.css"
const Home = () => {
    useTitle("Home page")
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;