import React, { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isLast, setIsLast] = useState(false);
  useEffect(() => {
    const arr = ["a Software Engineer", "a Web Developer", "Sultan Alotaibi"];
    var wait = 1400;
    if (index === arr.length - 1) {
      setIsLast(true);
      wait = 5400;
    } else {
      setIsLast(false);
      wait = 1400;
    }

    setText(arr[index]);
    fadeIn("name", 300, 0);
    setTimeout(() => {
      if (isLast) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, wait);

    if (isLast) {
      fadeOut("name", 300, 5000);
    } else {
      fadeOut("name", 300, 1000);
    }
  }, [index, isLast]);

  return (
    <section id="home">
      <div className="blur">
        <h1 id="before">Hi, I am</h1>
        <h1 id="name" className="hide">
          {text}
        </h1>
      </div>
    </section>
  );
}

const fadeIn = (id, duration, delay) => {
  var el = document.getElementById(id);
  el.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: duration,
    delay: delay,
    fill: "forwards",
  });
};

const fadeOut = (id, duration, delay) => {
  var el = document.getElementById(id);
  el.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: duration,
    delay: delay,
    fill: "forwards",
  });
};
