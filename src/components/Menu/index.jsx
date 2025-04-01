import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useContext } from "react";
import { LanguageContext, languages } from "../../contexts/languages";   

import frFlagIcon from '../../assets/icons/frFlagIcon.png';
import enFlagIcon from '../../assets/icons/enFlagIcon.png';
import "./index.css";

function Menu({ className }) {

  const { lang, setLang } = useContext(LanguageContext);

  const handleClick = () => {
    const name = lang === languages.en ? languages.fr : languages.en
    setLang(name)
  }

  return (
    <ul className={className}>
      <li>
        <Link to="/" key="home">
        {lang === 'en' ? "Home" : "Accueil"}
        </Link>
      </li>
      <li>
        <Link to="/about" key="about">
        {lang === 'en' ? "About" : "À propos"}
        </Link>
      </li>
      <li>
        <Link to="/contact" key="contact">
          Contact
        </Link>
      </li>
      <button
        type='button'
        onClick={handleClick}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {lang === 'fr' ? <img src={enFlagIcon} alt="English flag" className="icon" /> : <img src={frFlagIcon} alt="French flag" className="icon" />}
      </button>
    </ul>
  );
}

Menu.propTypes = {
  className: PropTypes.string,
};

export default Menu;