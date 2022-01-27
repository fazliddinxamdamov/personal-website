import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function LayoutManager({children}) {
    return(
        <>
            <Navbar />

            {children}

            <Footer />
        </>
    )
}

export default LayoutManager