import React from "react";
import './Portfolio.css'
import Slide from 'react-reveal/Slide';
import img_1 from './programming-course.png'
import img_2 from './database (3).png'
import img_3 from './search-engine-optimization.png'

function Service() {
    return (
        <div className={"service-container"}>

            <div className={"service-entry"}>
                <Slide top>
                    <div className={"service-my-service"}>
                        <h1>My services</h1>
                        <p>I’m always trying to make the assignments completely perfect</p>
                    </div>
                </Slide>
            </div>


            <div className={"services"}>
                <div className={"box-1"}>
                    <img src={img_1} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa est illo impedit itaque iure
                        odio quae sapiente ullam vero? Dolor, soluta voluptatibus? Animi, delectus nam non odio quo
                        sint.</p>
                </div>
                <div className={"box-1"}>
                    <img src={img_2} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa est illo impedit itaque iure
                        odio quae sapiente ullam vero? Dolor, soluta voluptatibus? Animi, delectus nam non odio quo
                        sint.</p>
                </div>
                <div className={"box-1"}>
                    <img src={img_3} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa est illo impedit itaque iure
                        odio quae sapiente ullam vero? Dolor, soluta voluptatibus? Animi, delectus nam non odio quo
                        sint.</p>
                </div>

            </div>


        </div>
    )
}

export default Service