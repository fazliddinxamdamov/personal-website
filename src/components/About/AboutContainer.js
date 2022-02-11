import React, {useEffect, useState} from "react";
import './about.css'
import img from '../home/java.jpg'
import me from './me.jpg'
import pdp from './pdp.JPG'
import andijon from './andijon.jpg'
import Slide from 'react-reveal/Slide';
import Shake from 'react-reveal/Shake';
import Reveal from 'react-reveal/Reveal';


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
                    <p>O'zim haqimda qisqacha...</p>
                </div>
            </Slide>
            <div className={"about-description"}>
                <Slide top>
                    <div className={"div-img2"}>
                        <img src={me} className={"img"} alt={"not found"}/>
                    </div>
                </Slide>

                <div className={"description"}>
                    <p>Mening ismim Fazliddin Xamdamov.</p>
                    <p>2002-yilda Andijonda tug'ilganman. Hozirda Toshkentda Java Backend yo'nalishi bo'yicha o'z
                        tajribamni oshirib bormoqdaman.</p>
                </div>
            </div>


            <div className={"about-description"}>
                <p></p>
                <div className={"div-img"}>
                    <img src={andijon} className={"img"} alt={"not found"}/>
                </div>
                <div className={"description"}>
                    <p>Andijon(Anjan).</p>
                    <p>2002-yilda Andijonda tug'ilganman. Hozirda Toshkentda Java Backend yo'nalishi bo'yicha o'z
                        tajribamni oshirib bormoqdaman.</p>
                </div>
            </div>


            <div className={"about-description"}>
                <p></p>
                <div className={"div-img"}>
                    <img src={pdp} className={"img"} alt={"not found"}/>
                </div>
                <div className={"description"}>
                    <p>PDP IT Academy.</p>
                    <p>2002-yilda Andijonda tug'ilganman. Hozirda Toshkentda Java Backend yo'nalishi bo'yicha o'z
                        tajribamni oshirib bormoqdaman.</p>
                </div>
            </div>


        </div>
    )
}

export default AboutContainer