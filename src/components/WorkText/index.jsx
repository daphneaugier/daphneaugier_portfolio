import PropTypes from "prop-types";
import "./index.css";

function WorkText({ title, lines }) {

  return (
    <div className="work-text">
      <h2>{title}</h2>
      {lines.map((line, index) => (
        <p key={index} className="work-line" dangerouslySetInnerHTML={{ __html: line }}></p>
      ))}
    </div>
)

}

WorkText.propTypes = {
  title: PropTypes.string.isRequired,
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WorkText;