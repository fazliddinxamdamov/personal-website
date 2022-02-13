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
import Slide from 'react-reveal/Slide';

function HomePage() {
    return (
        <div className={"home-about-info"}>
            <Slide left>
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
                                <Link to='/about' style={{color: 'inherit', textDecoration: 'none'}}>
                                    <button type={"button"} className={"about-me-button1"}>About me</button>
                                </Link>
                            </div>
                            <div className={"home-button-item2"}>
                                <Link to='/portfolio' style={{color: 'inherit', textDecoration: 'none'}}>
                                    <button type={"button"} className={"about-me-button2"}>Services</button>
                                </Link>
                            </div>
                        </div>

                        <div className={"home-social-icon-div"}>
                            <div className={"github-icon"}>
                                <a target={"_blank"}  href={"https://github.com/fazliddinxamdamov"} rel="noreferrer"> <img src={github} alt="."/> </a>
                            </div>

                            <div className={"github-icon"}>
                                <a target={"_blank"}  href={"https://www.facebook.com/fazliddin.xamdamov.96"} rel="noreferrer"> <img src={facebook} alt="."/>
                                </a>
                            </div>

                            <div className={"github-icon"}>
                                <a href={"https://fazliddinxamdamov102@gmail.com"} target={"_blank"} rel="noreferrer"> <img src={mail}
                                                                                                           alt="."/>
                                </a>
                            </div>

                            <div className={"github-icon"}>
                                <a  target={"_blank"}  href={"https://fazliddinxamdamov.medium.com"} rel="noreferrer"> <img src={medium} alt="."/> </a>
                            </div>
                            <div className={"github-icon"}>
                                <a  target={"_blank"}  href={"https://www.linkedin.com/in/fazliddin-xamdamov"} rel="noreferrer"> <img src={linkedIn} alt="."/>
                                </a>
                            </div>
                        </div>
                    </div>
            </Slide>

            <div className={"about-img"}>
            <img src={img} className={"home-abstract-img"} alt={"not found"}/>
        </div>
        </div>
    )
}

export default HomePage