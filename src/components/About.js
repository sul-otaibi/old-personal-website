import { motion } from "framer-motion"
import "./About.css";

export default function About() {
    return (
        <section id="about" className="scroll-snap">
            <h1>KNOW ME MORE</h1>
            <motion.div
            initial={{opacity:0, x: "-100%"}}
            whileInView={{ opacity: 1 , x: "50%"}}
            className="picture-1"
            >
            <imgs src="../assets/data-analysis.jpg"/>
            </motion.div>
            <p>I am a senior software engineering student at King Fahd University of Petroleum & Minerals. I am passionate about what I do and always pursue more knowledge in the areas of Data Analysis, Web development and Software engineering in general.</p>
            <br></br>
            <p>I am currently looking for a job opportunity to exercise my gained knowledge throughout my studies.</p>
            <span className="cta">
                <p>I AM AVAILABLE</p>
                <a href="mailto:sul.otaibi@outlook.sa">CONTACT ME</a>
            </span>
        </section>
    );
}