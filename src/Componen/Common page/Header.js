import React, { useContext } from 'react';
import { Link } from 'react-daisyui';
import logo from "../../logo.png"
import { AuthContext } from '../Context/Authprovider';
import "./header.css"
const Header = () => {
    const { theme,setTheme}=useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 navbers">
        <li><Link>Home</Link></li>
      <li><Link>profile</Link></li>
      <li><Link>Services</Link></li>
      <li><Link>My reviews</Link></li>
      <li><Link>Add service</Link></li>
      <li><Link>Login</Link></li>
      <li><Link>Logout</Link></li>
       
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
      <li><Link>Home</Link></li>
      <li><Link>profile</Link></li>
      <li><Link>Services</Link></li>
      <li><Link>My reviews</Link></li>
      <li><Link>Add service</Link></li>
      <li><Link>Login</Link></li>
      <li><Link>Logout</Link></li>
      


     
    </ul>
  </div>
  <div className="navbar-end">
  <div class="avatar">
  <div class="w-10 rounded-full mr-5">
    <img src="https://placeimg.com/192/192/people" />
  </div>
  <input type="checkbox" class="toggle mt-2" onClick={(e)=>setTheme(e.target.checked)} />
</div>
  </div>
</div>
        </div>
    );
};

export default Header;