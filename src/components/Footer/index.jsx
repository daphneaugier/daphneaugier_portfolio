import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./index.css";
import Menu from "../Menu";

function Footer() {
  return (
    <footer>
      <div className="footer-row">
        <div className="footer-col1">
          <div>
          © Daphné Augier | 2024
          </div>
          <br />
          <div className="footer-address">
          <a href="mailto:daphne.augier@gmail.com">daphne.augier@gmail.com</a>
          <br />
          <br />
          706-5333 Casgrain <br />
          Montréal (QC) H2T 1X3 <br />
          Canada
        </div>
          </div>
          <Menu className="footer-menu" />
      </div>
      <div className="footer-row">
        <div className="footer-social">
          {" "}
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
