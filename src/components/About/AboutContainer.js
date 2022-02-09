import React from "react";
import './about.css'
import img from '../home/java.jpg'
import me from './me.jpg'

function AboutContainer() {
    return (
        <div className={"containerAbout"}>
            <div className={"title"}>
                <h1>Assalomu alaykum🖐️</h1>
                <p>O'zim haqimda qisqacha...</p>
            </div>

            <div className={"about-description"}>
                <div className={"div-img"}>
                    <img src={me} className={"img"} alt={"not found"}/>
                </div>
                <div className={"description"}>
                    <p>Mening ismim Fazliddin Xamdamov.</p>
                    <p>2002-yilda Andijoda tug'ilganman. Hozirda Toshkentda Java Backend yo'nalishi bo'yicha o'z tajribamni oshirib bormoqdaman.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutContainer