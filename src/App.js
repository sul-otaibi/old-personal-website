import './App.css';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { motion } from "framer-motion"

export default function App() {
  const particlesInit = useCallback(async main => {
    await loadFull(main);
  }, []);

  return (
    <>
      <Navbar />
      <motion.section 
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1 , scale: 1}}
      transition={{ duration: 1 }}
      >
      <Hero />
      </motion.section>
      <motion.section 
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1 , scale: 1}}
      transition={{ duration: 1 }}
      >
        <About />
      </motion.section>
      <motion.section 
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1 , scale: 1}}
      transition={{ duration: 1 }}
      >
        <Contact />
      </motion.section>
      <Particles options={particlesOptions} init={particlesInit}/>
    </>
  );
}