import PropTypes from "prop-types";

function WorkTextImage({ txt, img, alt }) {
  return (
    <div className="work-line">
      <p
        className="work-col"
        dangerouslySetInnerHTML={{ __html: txt }}
      ></p>
      <button type="button" className="work-zoom" aria-label={`View larger: ${alt}`}>
        <img
          className="work-img"
          src={`/assets/images/${img}`}
          alt={alt}
        />
      </button>
    </div>
  );
}

WorkTextImage.propTypes = {
    txt: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default WorkTextImage;
