import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

export default function Contact() {
    return(
        <section id="contact" className="scroll-snap">
            <h1>MY OTHER PAGES</h1>
            <div className="links-list">
                <a href="https://www.linkedin.com/in/sul-otaibi/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/sul-otaibi"><FontAwesomeIcon icon={faGithubSquare} /></a>
            </div>
        </section>
    );
}