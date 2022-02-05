import React from "react";
import './about.css'
import img from '../home/java.jpg'

function AboutContainer() {
    return (
        <div className={"containerAbout"}>
            <div className={"title"}>
                <h1>Assalomu alaykum🖐️</h1>
                <p>O'zim haqimda qisqacha ...</p>
            </div>

            <div className={"about-description"}>

                <div className={"div-img"}>
                    <img src={img} className={"img"} alt={"not found"}/>
                </div>

                <div className={"description"}>
                    <p>Mening ismim Fazliddin Xamdamov.</p>

                    <p>2002-yilda Andijoda tug'ilganman. Hozirda Toshkentda Java Backend yo'nalishida o'z tajribamni oshirib kelmoqdaman.</p>
                </div>
            </div>


        </div>
    )
}

export default AboutContainer