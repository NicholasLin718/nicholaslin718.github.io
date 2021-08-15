import React from 'react';
import "./intro.scss";
import backgroundvid from "./nightsky.mp4"
export default function Intro() {
    return (
        <div className="home" id="home">

            <video width="1920" height="1080" autoPlay loop muted alt=""
                style={
                    {
                        position: "absolute",
                        width:"100%",
                        left: "50%",
                        top:"50%",
                        height: "100%",
                        objectFit: 'cover',
                        transform: "translate(-50%, -50%)",
                        zIndex: "-1"
                    }
                }
            >
                <source src={backgroundvid} type = "video/mp4"/>
            </video>
            {/* <div className="left">
                <div className="imgContainer">
                    <img src = "images/face.png" alt = ""/>
                </div>
            </div>
            <div className="right">
                
            </div> */}

            <section className="Home" id="Home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">Hello, my name is</div>
                        <div className="text-2">Nicholas Lin</div>
                        <div className="text-3">and I am a <span>tall person</span></div>
                        <a href="#aboutme">Learn more</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
