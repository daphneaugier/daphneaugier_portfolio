import PropTypes from "prop-types";

const Slide = ({ picture, description, active }) => {
  return (
    <div className={`slide ${active ? "active" : ""}`}>
      <img src={`/assets/images/artbig/${picture}`} alt={description} />
    </div>
  );
};

Slide.propTypes = {
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Slide;