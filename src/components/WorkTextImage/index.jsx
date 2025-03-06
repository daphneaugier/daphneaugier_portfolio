import PropTypes from "prop-types";
import "./index.css";

function WorkTextImage({ txt, img, alt }) {
  return (
    <div className="work-line">
      <p
        className="work-col"
        dangerouslySetInnerHTML={{ __html: txt }}
      ></p>
      <img
        className="work-col work-img"
        src={`/assets/images/${img}`}
        alt={alt}
      />
    </div>
  );
}

WorkTextImage.propTypes = {
    txt: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default WorkTextImage;
