import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./index.css";
import Menu from "../Menu";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-row">
        <div className="footer-col1">
          <div>© Daphné Augier | {year}</div>
          <br />
          <div className="footer-address">
            <a href="mailto:daphne.augier@gmail.com">daphne.augier@gmail.com</a>
          </div>
        </div>
        <div className="footer-col2">
          <Menu className="footer-menu" />
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
      </div>
    </footer>
  );
}

export default Footer;
