import React, {useEffect, useState} from "react";
import './HomePage.css'
import img from './me2.jpg'
import myImage from '../home/3-4-removebg-preview.jpg'
import '../../fonts/Inconsolata/Inconsolata-Medium.ttf'
import github from './github2.png'
import linkedIn from './4747495_linked in_social media_networking_icon.png'
import dev from './dev.png'
import medium from './7088990_medium_medium logo_icon.png'
import facebook from './facebook.png'
import mail from './mail4.png'
import {Link} from "react-router-dom";
import Slide from 'react-reveal/Slide';
import ReactRain from 'react-rain-animation';
import "react-rain-animation/lib/style.css";
import LoadingIndicator from "../common/LoadingIndicator";

function HomePage() {

    const [isLoading, setIsLoading] = useState(true);

    const cacheImages = async (srcArray) => {
        const promises = await srcArray.map((src) => {
            return new Promise(function (resolve, reject) {
                const img = new Image();
                img.src = src;
                img.onload = resolve();
                img.onerror = reject();
            })
        })
        await Promise.all(promises);
        setIsLoading(false)

    }

    useEffect(() => {
        const imgs = [
            img, github, linkedIn, dev, medium, facebook, mail
        ];
        cacheImages(imgs);
    }, [])


    return (
        <div>
            {isLoading
                ?
                <div>
                    <LoadingIndicator/>
                </div>
                :
                <div className={"home-about-info"}>
                    {/*<ReactRain numDrops = "600"/>*/}
                    <Slide left>
                        <div className={"home-about-description"}>
                            <div className={"home-my-img-div"}>
                                <img src={img} className={"home-my-img"} alt={"My image not found"}/>
                            </div>

                            <div className={"home-p1"}>
                                <p>I'm Fazliddin Xamdamov</p>
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
                                    <a target={"_blank"} href={"https://github.com/fazliddinxamdamov"} rel="noreferrer">
                                        <img
                                            src={github} alt="."/> </a>
                                </div>

                                <div className={"github-icon"}>
                                    <a target={"_blank"} href={"https://www.facebook.com/fazliddin.xamdamov.96"}
                                       rel="noreferrer"> <img src={facebook} alt="."/>
                                    </a>
                                </div>

                                <div className={"github-icon"}>
                                    <a href={"https://fazliddinxamdamov102@gmail.com"} target={"_blank"}
                                       rel="noreferrer"> <img
                                        src={mail} alt="."/>
                                    </a>
                                </div>

                                <div className={"github-icon"}>
                                    <a target={"_blank"} href={"https://medium.com/@fazliddinxamdamov"}
                                       rel="noreferrer"> <img
                                        src={medium} alt="."/> </a>
                                </div>

                                <div className={"github-icon"}>
                                    <a target={"_blank"} href={"https://dev.to/fazliddinxamdamov"} rel="noreferrer">
                                        <img
                                            src={dev} alt="."/> </a>
                                </div>

                                <div className={"github-icon"}>
                                    <a target={"_blank"} href={"https://www.linkedin.com/in/fazliddin-xamdamov"}
                                       rel="noreferrer"> <img src={linkedIn} alt="."/></a>
                                </div>
                            </div>
                        </div>
                    </Slide>

                    <div className={"about-img"}>
                        <img src={img} className={"home-abstract-img"} alt={"not found"}/>
                    </div>
                </div>
            }
        </div>

    )
}

export default HomePage