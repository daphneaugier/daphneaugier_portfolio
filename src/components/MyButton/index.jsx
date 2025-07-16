import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import './index.css'

function MyButton({link, label, size, new_page=false}) {
  return (
    <Link to={link} key={link} target={new_page ? "_blank" : ""}
     className={size==="basic" ? "basic-button" : "large-button"}>
      {label}
    </Link>
  )
}

MyButton.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  new_page: PropTypes.bool
};

export default MyButton
