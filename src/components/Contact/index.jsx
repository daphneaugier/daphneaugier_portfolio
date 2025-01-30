import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faMapMarker } from "@fortawesome/free-solid-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"

import './index.css'

function Contact() {

  return (
    <section className="contact">
    <div className="contact-intro">
        <h2>Contact me</h2>
        <p className="contact-text">
        I'd love to hear from you! Whether you want to discuss a
        project, explore collaboration opportunities, or just chat
        about design and creativity, feel free to reach out!
        </p>
        <div className="contact-details">
            <form action="">
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                />

                <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                />

                <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Enter your message"
                ></textarea>

                <button type="submit" className="button work-button">
                Send
                </button>
            </form>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faPhone} />&nbsp;+ 1 (514) 224-7342
                </li>
                <li>
                    <FontAwesomeIcon icon={faPhone} />&nbsp;+ 33 7 77 22 12 48
                </li>
                <br/>
                <li>
                <FontAwesomeIcon icon={faAt} />&nbsp;daphne.augier@gmail.com
                </li>
                <br/>
                <li>
                <FontAwesomeIcon icon={faMapMarker} />&nbsp;
                    706-5333 Casgrain <br />
                    Montréal (QC) H2T 1X3 <br />
                    Canada
                </li>
                <br/>
                <li>
                    <a
                    href="https://github.com/daphneaugier"
                    title="Github"
                    className="fa-icon"
                    >
                    <FontAwesomeIcon icon={faGithub} alt="GitHub" />
                    </a>
                    &nbsp;
                    <a
                    href="https://www.linkedin.com/in/daphneaugier/"
                    title="LinkedIn"
                    className="fa-icon"
                    >
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>    
                </li>
            </ul>
        </div>
    </div>
</section>
)
}

export default Contact
