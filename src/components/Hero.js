import React, { useState, useEffect} from "react";
import "./Hero.css";


const Hero = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    
    
    
    useEffect(() => {
        const arr = ["a Software Engineer", "a Web Developer", "Sultan Alotaibi"];
        setText(arr[index]);
        fadeIn("name", 300, 0);
        setTimeout(() => {
            index < arr.length - 1 ? setIndex(index + 1) : setIndex(0);
        }, 1400);
        fadeOut("name", 300, 1000);
        
    },[index]);

    
    return(
        <section id="home">
            <div className="blur">
                <h1 id="before">Hi, I am</h1>
                <h1 id="name" className="hide">{text}</h1>
            </div>
        </section>
    );
}

const fadeIn = (id, duration, delay) => {
    var el = document.getElementById(id);
    el.animate([{ opacity: 0 }, { opacity: 1 }], { 
        duration: duration,
        delay: delay,
        fill: "forwards" });
    }

const fadeOut = (id, duration, delay) => {
    var el = document.getElementById(id);
    el.animate([{ opacity: 1 }, { opacity: 0 }], { 
        duration: duration,
        delay: delay,
        fill: "forwards" });
    }


export default Hero;