import React from "react";
import './about2.css'
// import img from '../home/java.jpg'
import me from './me2.jpg'
import pdp from './pdp.JPG'
import andijon from './andijon.jpg'
import xazna from './xazna.jpg'

function AboutContainer() {

    return (
        <div className={"containerAbout"}>
                <div className={"title"}>
                    <h1>Assalomu alaykum🖐️</h1>
                    <p>briefly about myself...</p>
                    <br/>
                </div>
            <div className={"about-description"}>
                    <div className={"div-img2"}>
                        <img src={me} className={"img"} alt={"not found"}/>
                    </div>

                <div className={"description"}>
                    <p>My fullname is Fazliddin Xamdamov</p>
                    <p>I was born in 2002 in Andijan. I am currently improving my Java Backend experience in Tashkent and my goal is to become an experienced software engineer</p>
                </div>
            </div>


            <div className={"about-description"}>
                <p></p>
                <div className={"div-img"}>
                        <img src={andijon} className={"img"} alt={"not found"}/>
                </div>
                <div className={"description"}>
                    <p>Andijon</p>
                    <p>I was born and raised in the city you see in this picture. I am very proud of this and I can say that even though I have been a guest so far, I bring a lot of strength to my family and the people who live in this place. Hopefully this will continue</p>
                </div>
            </div>


            <div className={"about-description"}>
                <p></p>
                <div className={"div-img"}>
                        <img src={pdp} className={"img"} alt={"not found"}/>
                </div>
                <div className={"description"}>
                    <p>at <a target={"_blank"} href="https://pdp.uz/"><span className={"pdp-link"}>PDP IT Academy</span></a></p>
                    <p>In this picture, I am doing my work at the PDP IT Academy in Tashkent.
                        It was at this time that I was preparing my website, if I am not mistaken.
                        And I also want to mention that I’ve learned what I’ve read here,
                        and I haven’t stopped learning yet. I express my gratitude to the PDP.
                    </p>
                    <p>(November 2021 - April 2022)</p>
                    <br/>
                </div>
            </div>

            <div className={"about-description"}>
                <p></p>
                <div className={"div-img"}>
                        <img src={xazna} className={"img"} alt={"not found"}/>
                </div>
                <div className={"description"}>
                    <p>at <a target={"_blank"} href="https://www.xb.uz/"><span className={"pdp-link"}>XALQ BANK</span></a></p>
                    <p>
                        Currently, I am working as a programmer at XAZNA(Xalq Bank). Despite the fact that I have not been working long, I think that I will get along well with everyone))
                    </p>
                    <p>(October 2022)</p>
                    <br/>
                </div>
            </div>


        </div>
    )
}

export default AboutContainer