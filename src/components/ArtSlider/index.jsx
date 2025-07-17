import Slide from "./Slide";
import "./index.css";
import PropTypes from "prop-types";

const ArtSlider = ({ images, active, setActive }) => {

  const onNext = () => {
    if (active < images.length - 1) {
      setActive(active + 1);
    }
  };

  const onPrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <div className="slider">
      <div className="slides">
        {images.map((e, i) => (
          <Slide key={e.id} {...e} active={i === active} />
        ))}
      </div>
      <div className="navigation">
        <div className="navigation-bottom">
          {images.map((e, i) => (
            <div
              className={`dots ${i === active ? "active" : ""}`}
              key={e.id}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
        <div className="navigation-next-prev">
          <div className="next-prev prev" onClick={onPrev}>
            {" "}
            &lt;{" "}
          </div>
          <div className="next-prev next" onClick={onNext}>
            {" "}
            &gt;{" "}
          </div>
        </div>
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
    setActive: PropTypes.func.isRequired,
};

export default ArtSlider;