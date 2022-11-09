import React, { useContext } from 'react';
import { AuthContext } from '../Context/Authprovider';
import useTitle from '../hook/Title';


const Profile = () => {
    const { user}=useContext(AuthContext);
    useTitle(user.displayName)
 
    return (
        <div>
        
            <div className="mb-10 p-8">
              
            <form className="flex justify-center flex-col gap-5 shadow-lg shadow-cyan-500/50 items-center m-auto lg:w-5/12 sm:w-full p-10">
            <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} alt='' />
            </div>
            </div>
            <h1 className="text-xl font-bold mb-5 uppercase">{user?.displayName} </h1>
            <input type="text" placeholder="Enter Your name" name="name" value={user?.displayName} className="input input-bordered input-secondary w-full max-w-xs" />
            <input type="email" name="email" placeholder="Enter your email" value={user?.email} className="input input-bordered input-secondary w-full max-w-xs" />
            
            <button className="btn bg-pink-600 border-none">Save</button>
            </form>
        </div>
        </div>
    );
};

export default Profile;