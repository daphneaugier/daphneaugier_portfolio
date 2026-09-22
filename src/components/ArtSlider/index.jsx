import Slide from "./Slide";
import "./index.css";
import PropTypes from "prop-types";

const ArtSlider = ({ images, active }) => {
  return (
    <div className="slider">
      <div className="slides">
        {images.map((e, i) => (
          <Slide key={e.id} {...e} active={i === active} />
        ))}
      </div>
    </div>
  );
};

ArtSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })
  ).isRequired,
  active: PropTypes.number.isRequired,
};

export default ArtSlider;
