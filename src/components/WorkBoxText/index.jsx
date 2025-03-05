import PropTypes from "prop-types";
import "./index.css";

function WorkBoxText({ box, txt }) {
  return (
    <div className="work-line">
      <p className="work-col work-box" dangerouslySetInnerHTML={{ __html: box }}></p>
      <p className="work-col" dangerouslySetInnerHTML={{ __html: txt }}></p>
    </div>
)

}

WorkBoxText.propTypes = {
  box: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
};

export default WorkBoxText;