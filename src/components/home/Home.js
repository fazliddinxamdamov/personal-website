import React from "react";
import './HomePage.css'
import HomePage from "./HomePage";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";


function Home() {
    return(
        <div>
            <Navbar/>
            <HomePage/>
            <Footer/>
        </div>
    )
}

export default Home