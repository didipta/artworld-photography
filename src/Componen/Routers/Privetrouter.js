import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';

const Privetrouter = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading)
    {
        return <>
        <div className="flex justify-center items-center">
        <progress class="progress w-56"></progress>
        </div>
        
        </>;
    }
    if(!user)
    {
        return <Navigate to="/Loginpage" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default Privetrouter;