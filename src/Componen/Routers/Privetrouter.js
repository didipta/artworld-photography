import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';

const Privetrouter = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading)
    {
        return "Loading.....";
    }
    if(!user)
    {
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default Privetrouter;