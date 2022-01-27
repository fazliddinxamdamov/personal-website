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
                    <p>Mening to'liq ismim Xamdamov Fazliddin Faroxiddin o'g'li.</p>

                    <p>2002-yil 6-sentabrda Andijonning Dalvarzin mahallasida tug'ilganman.</p>
                </div>
            </div>


        </div>
    )
}

export default AboutContainer