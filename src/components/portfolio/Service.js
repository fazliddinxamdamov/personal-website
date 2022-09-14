import React from "react";
import './Portfolio.css'
import Slide from 'react-reveal/Slide';
import img_1 from './programming-course.png'
import img_2 from './database (3).png'
import img_3 from './search-engine-optimization.png'
import resume from './Xamdamov Fazliddin Faroxiddin.pdf'

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
                    <p>Develop and optimize a perfect product using new technologies without additional and unnecessary errors.</p>
                </div>
                <div className={"box-1"}>
                    <img src={img_2} alt=""/>
                    <p>When working with data, sort them and get them in a minimum amount of time.
                        Write complex and easy-to-understand sql queries and link them firmly to the backend.</p>
                </div>
                <div className={"box-1"}>
                    <img src={img_3} alt=""/>
                    <p>Ability to collect and work with relevant data at the right time. Ability to adapt to the project and code review.</p>
                </div>

            </div>

            <div className={"service-resume-div"}>
                <div>
                    <a className={"service-resume"} href={resume} download>
                        <div>
                            <p>View my resume</p>
                        </div>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Service