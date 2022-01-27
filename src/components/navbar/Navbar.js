import React from "react";
import './Navbar.css'
import navbarLogo from './navbar-logo.jpg'
import {Link, NavLink} from "react-router-dom";

function Navbar(){
    return(
        <div className={"container"}>
            <div className={"productName"}>
                <a href={"#"} className={"navbar-brand"}>
                    <img src={navbarLogo} className={"navbar-logo"} alt="Navbar Logo not Found :("/>
                    <p>Fazliddin Xamdamov</p>
                </a>
            </div>

            <div className={"collapse navbar-collapse my-links"}>
                <ul className={"navbar-nav my-navbar-nav"}>
                    <li className={"nav-item my-nav-item"}> <NavLink to='/' >Home</NavLink>  </li>
                    <li className={"nav-item my-nav-item"}> <NavLink to='/portfolio'>Portfolio</NavLink>  </li>
                    <li className={"nav-item my-nav-item"}> <NavLink to='/about' >About</NavLink>  </li>


                </ul>
            </div>

        </div>
    )
}

export default Navbar