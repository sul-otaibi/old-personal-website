import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import OtherLinks from "./components/OtherLinks";
import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { motion } from "framer-motion";
import ReactDOM from "react-dom/client";

const modalRoot = ReactDOM.createRoot(document.getElementById("modal"));

export default function App() {
  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  return (
    <>
      <Navbar />
      <motion.section
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <About modalRoot={modalRoot} />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Projects modalRoot={modalRoot} />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <ContactForm />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <OtherLinks />
      </motion.section>

      <Particles options={particlesOptions} init={particlesInit} />
    </>
  );
}
