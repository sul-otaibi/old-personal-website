// import logo from './logo.svg';
import Particles from 'particlesjs';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  window.onload = () => {
    Particles.init({
      selector: "#bg-particles",
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
  };
  
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <canvas id="bg-particles"></canvas>
    </>
  );
}

export default App;
