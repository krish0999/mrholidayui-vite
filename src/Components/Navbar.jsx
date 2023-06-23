
import React, { useState } from "react";

import MenuItems from './MenuItems';
import "./NavbarStyles.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    const [click, setClick] = useState(false);
  const handelClick = () => setClick(!click);
   
        return (
            <nav className='NavbarItems'>
                <Link style={{textDecoration:"none"}} to="/"><h1 className='navbar-logo' >mrHoliday</h1></Link>
                <div className='menu-icons' onClick={handelClick}> 
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={click?"nav-menu active":"nav-menu "}>
                    {MenuItems.map ((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        );
    }


export default Navbar;