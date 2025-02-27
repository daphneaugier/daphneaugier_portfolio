import "./index.css";
//import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu";

function Header() {
  return (
    <>
      <header>
        <nav className="main-nav">
          <Menu className="main-menu" />
        </nav>
      </header>
      <nav className="download-nav">
        <a
          href="/pdf/CV_DaphneAugier.pdf"
          className="header-button"
          target="_blank"
        >
          Download CV
        </a>
      </nav>
    </>
  );
}

export default Header;
