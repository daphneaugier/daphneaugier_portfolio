import PropTypes from "prop-types";
import "./index.css";
import MyButton from "../MyButton";

function WorkCard({ work }) {
  return (
    <div className="work-card">
      <img
        src={`/assets/images/works/${work.cover}`}
        alt={work.title}
        data-aos="slide-left"
      />
      <div className="workcard-text" data-aos="zoom-in">
        <div className="work-text-row">
          <h3 className="work-id">{work.id}</h3>
          <h3 className="workcard-title">{work.title}</h3>
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
                <MyButton link={`/work/${work.id}`} key={work.id} label="Read Project" size="basic" />
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
