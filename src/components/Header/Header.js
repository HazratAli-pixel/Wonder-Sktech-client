import React, { useContext } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { CiDark } from 'react-icons/ci';
import { MdLightMode } from 'react-icons/md';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';
import './Header.css';

const Header = () => {
    const {modechange, modeToogle, user, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const themechange = ()=>{
      modechange();
    }
    const userlogout = ()=>{
      logout();
      localStorage.removeItem("accessToken")
      const tokenName = 'accessToken';
      const token = '00000';
      const exday = -10;
      setCookie(tokenName, token, exday)
      navigate('/')
    }

    const  setCookie = (cname, cvalue, exdays) => {
      const d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    return (
        <div className='bg-neutral'>    
          <div className="container mx-auto navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
              <Link to='/' className="btn btn-ghost normal-case text-xl"> 
                <img src="./logo.png" alt="" style={{width: '50px'}} className="mr-2 border-4 rounded-full " /> <span className='header_font text-3xl'>Wonder Sketches</span> 
              </Link>
            </div>
            <div className='navbar-end'>
              <div className="hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                  <li><Link to='/'>Home</Link></li>
                  <li><NavLink to='/servicelist' className={({ isActive }) =>
                    isActive ? 'bg-green-400 text-black' : undefined}>Service</NavLink>
                  </li>
                  {
                    user? <><li><NavLink to='/addservice' className={({ isActive }) =>
                    isActive ? 'bg-green-400 text-black' : undefined}>Add Service</NavLink>
                  </li>
                  <li><NavLink to='/myreview' className={({ isActive }) =>
                    isActive ? 'bg-green-400 text-black' : undefined}>My Review</NavLink>
                  </li></>:""
                  }
                  <li><NavLink to='/blog' className={({ isActive }) =>
                    isActive ? 'bg-green-400 text-black' : undefined}>Blog</NavLink>
                  </li>
                  {
                    user? <div className='pl-2'>
                    <Link id='userPhoto' to='/profile'><img id='' src={user.photoURL} className='border-2 border-green-400 rounded-full hover:' alt="" style={{width: "45px", height:"45px"}} srcset="" /></Link>
                    <div className='text-slate-800 bg-lime-300 p-2' id='userinfo'>
                      <p >{user.displayName}</p>
                    </div>
                  </div> : <li><NavLink to='/signin' className={({ isActive }) =>
                    isActive ? 'bg-green-400 text-black' : undefined}>Login</NavLink>
                  </li>
                  }
                  
                  <p className='pl-1'><button type='checked' onClick={themechange} className='btn btn-success'> {modeToogle? <MdLightMode/>: <CiDark/>} </button>
                  </p>
                  <p className='flex'>{user? <button className='p-2' onClick={userlogout}><AiOutlineLogout/></button>:""}</p>
                </ul>
              </div>
              <div className="dropdown relative">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="text-right dropdown-content mt-3 p-2 shadow bg-neutral text-neutral-content rounded-box w-32 absolute right-0">
                  <li><NavLink to='/servicelist' className={({ isActive }) =>
                    isActive ? 'bg-green-400 text-black' : undefined}>Service</NavLink>
                  </li>
                  {
                    user? <><li><NavLink to='/addservice' className={({ isActive }) =>
                    isActive ? 'bg-green-400 text-black' : undefined}>Add Service</NavLink>
                  </li>
                  <li><NavLink to='/myreview' className={({ isActive }) =>
                    isActive ? 'bg-green-400 text-black' : undefined}>My Review</NavLink>
                  </li></>:""
                  }
                  <li className='py-1'><NavLink to='/blog' className={({ isActive }) =>
                    isActive ? 'bg-green-400 text-black p-1 rounded-lg' : 'p-1'}>Blog</NavLink>
                  </li>
                  {
                    user? <div className='pl-2'>
                    <Link id='' to='/profile' className='flex justify-end'><img id='' src={user.photoURL} className='border-2 border-green-400 rounded-full hover:' alt="" style={{width: "45px", height:"45px"}} srcset="" /></Link>
                    <div className='text-white p-2' id=''>
                      <p >{user.displayName}</p>
                    </div>
                  </div> : <li><NavLink to='/signin' className={({ isActive }) =>
                    isActive ? 'bg-green-400 text-black' : undefined}>Login</NavLink>
                  </li>
                  }
                   <p className='pl-1'><button type='checked' onClick={themechange} className='btn btn-success'> {modeToogle? <MdLightMode/>: <CiDark/>} </button>
                  </p>
                  <p className='flex justify-end'>{user? <button className='p-2 flex items-center' onClick={userlogout}>logout</button>:""}</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Header;