import React from "react";
import './Navbar.css'
import navbarLogo from '../footer/footer-logo.jpg'
import {Link, NavLink} from "react-router-dom";

function Navbar() {
    return (
        <div className={"container"}>
            <div className={"productName"}>
                <a href={"/"} className={"navbar-brand"}>
                    <img src={navbarLogo} className={"navbar-logo"} alt="Navbar Logo not Found :("/>
                    <p>Fazliddin Xamdamov</p>
                </a>
            </div>

            <div className={"collapse navbar-collapse my-links"}>
                <ul className={"navbar-nav my-navbar-nav"}>
                    <li className={"nav-item my-nav-item"}><NavLink to='/'>Home</NavLink></li>
                    <li className={"nav-item my-nav-item"}><NavLink to='/portfolio'>Services</NavLink></li>
                    <li className={"nav-item my-nav-item"}><NavLink to={{pathname: "//t.me/s/faz1iddinBLog"}} target="_blank">Channel</NavLink></li>
                    <li className={"nav-item my-nav-item"}><NavLink to='/about'>About</NavLink></li>
                </ul>
            </div>


            <div className={"burger"}>
                <div className={"b-child1"}></div>
                <div className={"b-child2"}></div>
                <div className={"b-child3"}></div>
            </div>


        </div>
    )
}

export default Navbar