import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import "./index.css";

function Menu({ className }) {
  return (
    <ul className={className}>
      <li>
        <Link to="/" key="home">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" key="about">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" key="contact">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
/*
    <li>
        <Link to="/art" key="about">Art Stuff</Link>
    </li>
*/
