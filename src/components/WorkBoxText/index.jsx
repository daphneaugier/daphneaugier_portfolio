import PropTypes from "prop-types";
import "./index.css";

function WorkBoxText({ box, txt }) {
  return (
    <div className="work-line">
      <div className="work-col">
      <p className="work-box" dangerouslySetInnerHTML={{ __html: box }}></p>
      </div>
      <p className="work-col" dangerouslySetInnerHTML={{ __html: txt }}></p>
    </div>
)

}

WorkBoxText.propTypes = {
  box: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
};

export default WorkBoxText;