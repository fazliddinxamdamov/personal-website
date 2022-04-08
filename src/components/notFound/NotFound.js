import React from "react";
import "./NotFound.css"
import Navbar from "../navbar/Navbar";

function NotFound() {
    return (
        <div>
            <Navbar/>
            <div className={"notFound"}>
                <img src="https://cdn-icons-png.flaticon.com/128/3447/3447539.png" alt="#"/>
                <p className={"p404"}>404</p>
                <h1 color={"#000"}>OOPS :(</h1>
                <h3 color={"#000"}>PAGE NOT FOUND</h3>
            </div>
        </div>
    )
}

export default NotFound