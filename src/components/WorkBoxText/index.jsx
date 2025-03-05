import PropTypes from "prop-types";
import "./index.css";

function WorkBoxText({ detail }) {
  return (
    <div className="work-line">
      <p className="work-col work-box" dangerouslySetInnerHTML={{ __html: detail.col1 }}></p>
      <p className="work-col" dangerouslySetInnerHTML={{ __html: detail.col2 }}></p>
    </div>
)

}

WorkBoxText.propTypes = {
  detail: PropTypes.object.isRequired,
};

export default WorkBoxText;