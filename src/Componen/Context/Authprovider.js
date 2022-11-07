import React, { createContext, useState } from 'react';
export const AuthContext=createContext();
const Authprovider = ({children}) => {
    const [theme,setTheme]=useState(false);


    const auth={
    theme,
    setTheme
    }
    return (
        
        <div>
            <AuthContext.Provider value={auth}>
            {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default Authprovider;