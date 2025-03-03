import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import './index.css'

function MyButton({link, key, label, size}) {
  return (
    <button className={size==="basic" ? "basic-button" : "large-button"}>
    <Link to={link} key={key}>
      {label}
    </Link>
  </button>
  )
}

MyButton.propTypes = {
  link: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default MyButton
