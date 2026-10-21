import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import './index.css'

function MyButton({link, label, size, new_page=false, inactive=false, hoverLabel}) {
  const className = size==="basic" ? "basic-button" : "large-button";

  if (inactive) {
    return (
      <span className={`${className} basic-button--inactive`} tabIndex={0}>
        <span className="button-idle-label">{label}</span>
        <span className="button-hover-label">{hoverLabel}</span>
      </span>
    )
  }

  return (
    <Link to={link} key={link} target={new_page ? "_blank" : ""}
     className={className}>
      {label}
    </Link>
  )
}

MyButton.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  new_page: PropTypes.bool,
  inactive: PropTypes.bool,
  hoverLabel: PropTypes.string
};

export default MyButton
