import React, { useContext } from 'react';
import { Link } from 'react-daisyui';
import { NavLink } from 'react-router-dom';
import logo from "../../logo.png"
import { AuthContext } from '../Context/Authprovider';
import "./header.css"
const Header = () => {
    const { theme,setTheme,loading,user,signoutall}=useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 navbers">
        <li><NavLink className={({isActive})=>isActive? 'text-black-800 font-bold' : undefined} to="/">Home</NavLink></li>
      <li><NavLink className={({isActive})=>isActive? 'text-black-800 font-bold' : undefined} to="home">profile</NavLink></li>
      <li><NavLink className={({isActive})=>isActive? 'text-black-800 font-bold' : undefined} to="/service">Services</NavLink></li>
      {
        user?<><li><NavLink className={({isActive})=>isActive? 'text-black-800 font-bold' : undefined} to="home">My reviews</NavLink></li>
        <li><NavLink className={({isActive})=>isActive? 'text-black-800 font-bold' : undefined} to="home">Add service</NavLink></li>
        <li><NavLink onClick={signoutall}>Logout</NavLink></li></>:
        <li><NavLink className={({isActive})=>isActive? 'text-black-800 font-bold' : undefined} to="/Loginpage">Login</NavLink></li>
      }
      </ul>
    </div>
    
    <Link className="btn btn-ghost normal-case text-sm">
    <div class="flex items-center">
    <div class="w-10 rounded-full">
    <img src={logo} alt=" " />
  </div>
    
    <div class="flex items-center flex-col text-base">
        <strong>Artworld</strong>
        <span>Photography</span>
    </div>
   </div>
        
        </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><NavLink className={({isActive})=>isActive? 'text-black-800 font-bold' : undefined} to="/">Home</NavLink></li>
      <li><NavLink className={({isActive})=>isActive? 'text-black-800 font-bold' : undefined} to="home">profile</NavLink></li>
      <li><NavLink className={({isActive})=>isActive? 'text-black-800 font-bold' : undefined} to="/service">Services</NavLink></li>
      {
        user?<><li><NavLink className={({isActive})=>isActive? 'text-black-800 font-bold' : undefined} to="home">My reviews</NavLink></li>
        <li><NavLink className={({isActive})=>isActive? 'text-black-800 font-bold' : undefined} to="home">Add service</NavLink></li>
        <li><NavLink  onClick={signoutall}>Logout</NavLink></li></>:
        <li><NavLink className={({isActive})=>isActive? 'text-black-800 font-bold' : undefined} to="/Loginpage">Login</NavLink></li>
      }
      
      
      
      
      


     
    </ul>
  </div>
  <div className="navbar-end">
    
  <div class="avatar">
    {
      user?.photoURL&&<div class="w-10 rounded-full mr-5">
      <img src={user.photoURL} alt='' />
       </div>
    }
  
  <input type="checkbox" class="toggle mt-2" onClick={(e)=>setTheme(e.target.checked)} />
</div>
  </div>
</div>

        </div>
    );
};

export default Header;