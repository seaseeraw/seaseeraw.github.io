import React from "react";
import './Navbar.css';
import {Link } from "react-router-dom";
const Navbar = () =>{
    return(
        <ul>
            {/* <li> <Link to={`/`}>Home</Link></li> */}
            <li> <Link to={`/about`}>About me</Link></li>
             {/* <li> <Link to={`/contact`}>Contact</Link></li> */}
           
               </ul>
    )
}

export default Navbar;
