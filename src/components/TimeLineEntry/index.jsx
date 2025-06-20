import PropTypes from "prop-types";
import "./index.css";

function TimeLineEntry({ title, date, details, delay }) {
  return (
    <div
      className="timeline-entry"
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-delay={delay} 
    >
      <h2>{title}</h2>
      <h2>{date}</h2>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}
  const detailsShape = PropTypes.shape({
    detail: PropTypes.string.isRequired,
  })

  TimeLineEntry.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(detailsShape).isRequired,
  }
export default TimeLineEntry;
