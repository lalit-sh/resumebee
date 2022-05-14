import React from "react";
import './Head.css'
import logo from '../../../assets/images/Logo.png'


const Head = () =>{
    return(
        <>
            <div className="h-container">
                <div className="h-left">
                    <img src={logo} alt=""/>

                    <span>An OpenSource Project for 
                        <br/>
                        easy and effective
                        <br/>    
                        Resume Building
                     </span>
                </div>
            </div>
        </>
    )
} 

export default Head