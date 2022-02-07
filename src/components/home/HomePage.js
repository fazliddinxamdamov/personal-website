import React from "react";
import './HomePage.css'
import img from './abstract.png'
import myImage from '../home/java.jpg'
import '../../fonts/Inconsolata/Inconsolata-Medium.ttf'
import github from './github2.png'
import linkedIn from './4747495_linked in_social media_networking_icon.png'
import medium from './7088990_medium_medium logo_icon.png'
import facebook from './facebook.png'
import mail from './mail4.png'
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <div className={"home-about-info"}>
            <div className={"home-about-description"}>
                <div className={"home-my-img-div"}>
                    <img src={myImage} className={"home-my-img"} alt={"not found"}/>
                </div>

                <div className={"home-p1"}>
                    <p>Hi, I'm Fazliddin</p>
                    <br/>
                    <p>Back-End Developer from Andijan, Uzbekistan</p>

                </div>
                <div className={"home-about-buttons"}>
                    <div className={"home-button-item1"}>
                        <button type={"button"} className={"about-me-button1"}> <Link to='/about' style={{ color: 'inherit', textDecoration: 'none'}}>About me</Link> </button>
                    </div>
                    <div className={"home-button-item2"}>
                        <button type={"button"} className={"about-me-button2"}><Link to='/portfolio' style={{ color: 'inherit',textDecoration: 'none'}} >Services</Link></button>
                    </div>
                </div>

                <div className={"home-social-icon-div"}>
                    <div className={"github-icon"}>
                        <a href={"https://github.com/fazliddinxamdamov"}> <img src={github} alt="."/> </a>
                    </div>

                    <div className={"github-icon"}>
                        <a href={"https://www.facebook.com/fazliddin.xamdamov.96"}> <img src={facebook} alt="."/> </a>
                    </div>

                    <div className={"github-icon"}>
                        <a href={"https://fazliddinxamdamov102@gmail.com"} target={"_blank"}> <img src={mail} alt="."/> </a>
                    </div>

                    <div className={"github-icon"}>
                        <a href={"https://fazliddinxamdamov.medium.com"}> <img src={medium} alt="."/> </a>
                    </div>
                    <div className={"github-icon"}>
                        <a href={"https://www.linkedin.com/in/fazliddin-xamdamov"}> <img src={linkedIn} alt="."/> </a>
                    </div>


                </div>
            </div>

            <div className={"about-img"}>
                <img src={img} className={"img"} alt={"not found"}/>
            </div>
        </div>
    )
}

export default HomePage