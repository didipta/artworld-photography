import React from 'react';
import Service from '../Homepage/Service';
import useTitle from '../hook/Title';

const Services = () => {
    useTitle("All Services")
    return (
        <div>
            <div>
            <h1 className="text-center text-3xl font-bold">Services</h1>
                </div>
                <Service show={0}></Service>
                
            </div>
    );
};

export default Services;