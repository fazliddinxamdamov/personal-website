import React from "react";
import './about2.css'
import AboutContainer from './AboutContainer'
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function About() {
    return (
        <div>
            <Navbar/>
            <AboutContainer/>
            <Footer/>
        </div>
    );
}

export default About