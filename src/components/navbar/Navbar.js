import React, {useState} from "react";
import './Navbar.css'
import navbarLogo from './logo_size.jpg'
import {NavLink} from "react-router-dom";

function Navbar() {

    const [show, setShow] = useState(false);

    function showSwitch() {
        return setShow(!show)
    }

    return (
        <nav>
            <div className={"container navbar"}>

                <div onClick={() => showSwitch()} className={show ? "bars-button active" : "bars-button"}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={"productName"}>
                    <a href={"/"} className={"navbar-brand"}>
                        <img src={navbarLogo} className={"navbar-logo"} alt="Navbar Logo not Found :("/>
                        <p>Fazliddin Xamdamov</p>
                    </a>
                </div>

                <div className={show ? "links active" : "links"}>
                    <NavLink onClick={() => showSwitch()} to='/'>Home</NavLink>
                    <NavLink onClick={() => showSwitch()} to='/blog'>Blog🎊</NavLink>
                    <NavLink onClick={() => showSwitch()} to='/portfolio'>Services</NavLink>
                    <NavLink onClick={() => showSwitch()} to={{pathname: "//t.me/faz1iddinBLog"}} target="_blank">Channel</NavLink>
                    <NavLink onClick={() => showSwitch()} to='/about'> About </NavLink>
                </div>

            </div>
        </nav>

    )
}

export default Navbar