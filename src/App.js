import './App.css';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
// import Projects from './components/Projects';
import Contact from './components/Contact';
import ReactGA from 'react-ga';

ReactGA.initialize('G-QMX6EHT7TF');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Projects /> */}
      <Contact />
    </>
  );
}

export default App;
