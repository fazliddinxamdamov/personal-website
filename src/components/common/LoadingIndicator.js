import React from 'react';
import {FadeLoader} from "react-spinners";


export default function LoadingIndicator(props) {
    return (
        <div className="loading-indicator" style={{display: 'block', textAlign: 'center', marginTop: '150px', marginBottom: '300px'}}>
            <FadeLoader color="#000"/>
        </div>
    );
}