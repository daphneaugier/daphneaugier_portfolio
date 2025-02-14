import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.css";

function WorkCard({ work }) {
  return (
    <div className="work-card">
        <img
          src={work.cover}
          alt={work.title}
          className="work-img"
          data-aos="slide-left"
        />
      <div className="work-text" data-aos="zoom-in">
        <div className="work-text-row">
          <h3>{work.id} {work.title}</h3>
          <h4 className="work-text-year">{work.year}</h4>
        </div>
        <div className="work-text-row2">
        {work.tags.map((tag) => (
          <h4 key={`${tag}-${work.id}`} className="work-tag">{tag}</h4>
        ))}
        </div>
        {work.label === "Coming Soon" ? (<br/>) : (
        <button className="basic-button">
        <Link to={`/work/${work.id}`} key={work.id}>
          Read More
        </Link>
      </button>
        )}
      </div>
    </div>
  );
}

WorkCard.propTypes = {
  work: PropTypes.object.isRequired,
};

export default WorkCard;
