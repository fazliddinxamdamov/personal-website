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
                    <p>2002-yilda Andijonda tug'ilganman. Hozirda Toshkentda Java Backend yo'nalishi bo'yicha o'z tajribamni oshirib bormoqdaman.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorum mollitia nesciunt quia quibusdam quisquam ullam voluptatum. A atque cupiditate ex modi mollitia odio perferendis rem reprehenderit sint soluta tempora ut vero, voluptatem voluptatibus voluptatum. Aliquam consequatur dicta dolorem enim iure maxime nulla officiis quasi quidem totam! Ad alias aspernatur at commodi corporis ea, enim eos fugit iste, magnam, nemo nostrum odio optio quaerat quam quia quidem quisquam quo suscipit tempora tempore vel veritatis voluptates. Eos itaque iusto repellat, vero voluptate voluptatibus! Adipisci alias aliquam assumenda, atque corporis exercitationem expedita iste itaque labore, odit quaerat ratione saepe sit, ut vitae!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutContainer