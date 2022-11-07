
import React from 'react';
import "./error.css"
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className="error">
           <div class="swap-on text-9xl">😈</div>
            <h1>Oops!</h1>
            <h4>404-Page not found</h4>
            <Link to="/">Back home</Link>
            
        </div>
    );
};

export default Error;