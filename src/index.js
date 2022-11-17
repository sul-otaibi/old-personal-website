import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Particles from 'particlesjs';
import REactGA from "react-ga4";

REactGA.initialize("G-QMX6EHT7TF");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.onload = () => {
  Particles.init({
    selector: "#bg-particles"
  })
};

const particles = () => Particles.init({
  selector: ".background",
  color:["#395B64", "#A5C9CA", "#E7F6F2","#000000", "#ffffff"],
    connectParticles: true,
    maxParticles: 300,
    responsive: [{
      breakpoint: 768,
      options: {
        maxParticles: 40
      }
    },
    {
      breakpoint: 992,
      options: {
        maxParticles: 80
      }
    },
    {
      breakpoint: 1370,
      options: {
        maxParticles: 120,
      }
    },
    {
      breakpoint: 2000,
      options: {
        maxParticles: 200
      }
    }]
  });

particles();