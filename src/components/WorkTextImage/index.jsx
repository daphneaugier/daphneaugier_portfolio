import PropTypes from "prop-types";
import "./index.css";

function WorkTextImage({ txt, img, alt }) {
  return (
    <div className="work-line">
      <p
        className="work-txtimg-col1"
        dangerouslySetInnerHTML={{ __html: txt }}
      ></p>
      <img
        className="work-col2"
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
