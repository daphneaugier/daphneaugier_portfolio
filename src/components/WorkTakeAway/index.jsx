import PropTypes from "prop-types";
import "./index.css";

function WorkTakeAway({ title, text }) {
  const items = Array.isArray(text) ? text : [text];

  return (
    <div className="work-takeaway">
      <h2>{title}</h2>
      <ol className="work-takeaway-list">
        {items.map((item, index) => (
          <li className="work-takeaway-item" key={index}>
            <span className="work-takeaway-index">{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

WorkTakeAway.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default WorkTakeAway;
