import PropTypes from "prop-types";
import "./index.css";

function WorkText({ detail, type }) {

  return (
    <div className={`work-text ${type === "box" ? "work-text-box" : ""}`}> 
      {Object.keys(detail).map((key) => (
        <p key={key} className="work-line" dangerouslySetInnerHTML={{ __html: detail[key] }}></p>
      ))}
    </div>
)

}

WorkText.propTypes = {
  detail: PropTypes.object.isRequired,
  type: PropTypes.string,
};

export default WorkText;