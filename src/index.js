import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Particles from 'particlesjs';

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
  color:["#395B64", "#A5C9CA", "#E7F6F2"],
    connectParticles: true,
    maxParticles: 160,
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
      breakpoint: 1200,
      options: {
        maxParticles: 120
      }
    }]
  });

particles();