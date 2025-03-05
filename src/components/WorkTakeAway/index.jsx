import PropTypes from "prop-types";
import "./index.css";

function WorkTakeAway({ title, text }) {

  return (
    <div className="work-details work-box" style={{marginTop: "24px"}}> 
      <h3>{title}</h3>
      {Array.isArray(text) ? text.map((item, index) => (
        <p className="work-line" key={index}>{item}</p>
      )) : <p className="work-line">{text}</p>}
    </div>
  );
}

WorkTakeAway.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
};

export default WorkTakeAway;
