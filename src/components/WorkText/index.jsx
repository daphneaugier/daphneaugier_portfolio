import PropTypes from "prop-types";
import "./index.css";

function WorkText({ detail }) {

  return (
    <div className="work-text">
      {Object.keys(detail).map((key) => (
        <p key={key} className="work-line" dangerouslySetInnerHTML={{ __html: detail[key] }}></p>
      ))}
    </div>
)

}

WorkText.propTypes = {
  detail: PropTypes.object.isRequired,
};

export default WorkText;