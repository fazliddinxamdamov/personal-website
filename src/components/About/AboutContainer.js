import React from "react";
import './about.css'
import img from '../home/java.jpg'
import me from './me.jpg'
import pdp from './pdp.JPG'
import andijon from './andijon.jpg'
import Slide from 'react-reveal/Slide';
import Shake from 'react-reveal/Shake';

function AboutContainer() {
    return (
        <div className={"containerAbout"}>

            <div className={"title"}>
                <Shake><h1>Assalomu alaykum🖐️</h1></Shake>
                <p>O'zim haqimda qisqacha...</p>
            </div>

            <Slide left>
                <div className={"about-description"}>
                    <div className={"div-img2"}>
                        <img src={me} className={"img"} alt={"not found"}/>
                    </div>
                    <div className={"description"}>
                        <p>Mening ismim Fazliddin Xamdamov.</p>
                        <p>2002-yilda Andijonda tug'ilganman. Hozirda Toshkentda Java Backend yo'nalishi bo'yicha o'z
                            tajribamni oshirib bormoqdaman.</p>
                    </div>
                </div>
            </Slide>

            <Slide left>
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
            </Slide>

            <Slide left>
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
            </Slide>

        </div>
    )
}

export default AboutContainer