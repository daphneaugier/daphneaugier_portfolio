import PropTypes from "prop-types";
import "./index.css";

const SPLIT_IMAGES = new Set(["work02/landing.png"]);

function WorkTextImage({ txt, img, alt }) {
  const src = `/assets/images/${img}`;
  const isSplit = SPLIT_IMAGES.has(img);

  return (
    <>
      <div className="work-line">
        <p
          className="work-col"
          dangerouslySetInnerHTML={{ __html: txt }}
        ></p>
      </div>
      <div className="work-line">
        <button
          type="button"
          className={isSplit ? "work-zoom work-zoom-split" : "work-zoom"}
          aria-label={`View larger: ${alt}`}
        >
          {isSplit ? (
            <>
              <span
                className="work-img-half work-img-half-top"
                style={{ backgroundImage: `url(${src})` }}
                aria-hidden="true"
              />
              <span
                className="work-img-half work-img-half-bottom"
                style={{ backgroundImage: `url(${src})` }}
                aria-hidden="true"
              />
              <img className="work-img work-img-split-source" src={src} alt={alt} />
            </>
          ) : (
            <img className="work-img" src={src} alt={alt} />
          )}
        </button>
      </div>
    </>
  );
}

WorkTextImage.propTypes = {
    txt: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default WorkTextImage;
