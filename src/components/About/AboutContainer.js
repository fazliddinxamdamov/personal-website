import React, {useEffect, useState} from "react";
import './about2.css'
import img from '../home/java.jpg'
import me from './me.jpg'
import pdp from './pdp.JPG'
import andijon from './andijon.jpg'
import Slide from 'react-reveal/Slide'
function AboutContainer() {

    const [post, setPost] = useState(null)
    useEffect(() => {
        fetch("http://localhost:8080/about").then(response => response.ok).then(response => {
            const {body} = response
        })
    }, [])

    return (
        <div className={"containerAbout"}>
            <Slide left>
                <div className={"title"}>
                    <h1>Assalomu alaykum🖐️</h1>
                    <p>briefly about myself...</p>
                </div>
            </Slide>
            <div className={"about-description"}>
                <Slide top>
                    <div className={"div-img2"}>
                        <img src={me} className={"img"} alt={"not found"}/>
                    </div>
                </Slide>

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
                    <p>Andijon(Anjan)</p>
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
                    <p>.</p>
                </div>
            </div>


        </div>
    )
}

export default AboutContainer