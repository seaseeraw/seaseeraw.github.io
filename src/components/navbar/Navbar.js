import React from "react";
import './Navbar.css';
import {Link } from "react-router-dom";
const Navbar = () =>{
    return(
        <ul>
            {/* <li> <Link to={`/`}>Home</Link></li> */}
            <li> <Link to={`/about`}>About</Link></li>
            {/* <li> <Link to={`/contact`}>Contact</Link></li>
            <li> <Link to={`/menu`}>Menu</Link></li> */}
        {/* <li><a href="About us.html">About us</a></li>
         <li><a href="restueant web.html">Home</a></li>
         <li><a href="contact us.html">Contact us</a></li>
         <li><a href="menu.html">menu</a></li> */}
               </ul>
    )
}

export default Navbar;
