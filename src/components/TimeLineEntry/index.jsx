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
      <h4 className="timeline-entry-title">{title}</h4>
      <h5 className="timeline-entry-title">{date}</h5>
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
    delay: PropTypes.string,
  }
export default TimeLineEntry;
