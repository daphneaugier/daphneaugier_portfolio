import PropTypes from "prop-types";
import "./index.css";

function WorkTextImage({ detail }) {
  return (
    <div className="work-line">
      <p
        className="work-txtimg-col1"
        dangerouslySetInnerHTML={{ __html: detail.col1 }}
      ></p>
      <img
        className="work-col2"
        src={`/assets/images/${detail.img}`}
        alt={detail.alt}
      />
    </div>
  );
}

WorkTextImage.propTypes = {
  detail: PropTypes.object.isRequired,
};

export default WorkTextImage;
