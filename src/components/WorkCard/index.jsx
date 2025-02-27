import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.css";

function WorkCard({ work }) {
  return (
    <div className="work-card">
      <img
        src={`/assets/images/works/${work.cover}`}
        alt={work.title}
        className="work-img"
        data-aos="slide-left"
      />
      <div className="work-text" data-aos="zoom-in">
        <div className="work-text-row">
          <h3 className="work-id">{work.id}</h3>
          <h3 className="work-title">{work.title}</h3>
          <h4 className="work-text-year">{work.year}</h4>
          <div className="work-text-2col">
            <div>
              {work.tags.map((tag) => (
                <div key={`${tag}-${work.id}`} className="work-tag">
                  {tag}
                </div>
              ))}
            </div>
            <div>
              {work.label === "Coming Soon" ? (
                <br />
              ) : (
                <button className="work-text-btn">
                  <Link to={`/work/${work.id}`} key={work.id}>
                    Read Project
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

WorkCard.propTypes = {
  work: PropTypes.object.isRequired,
};

export default WorkCard;
