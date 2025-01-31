import { Link } from "react-router-dom";
import "./index.css";

function WorkCard({ work }) {
  return (
    <div className="work-card">
      {work.label === "Coming Soon" ? (
        <img
          src={work.cover}
          alt={work.title}
          className="work-img"
          data-aos="slide-left"
        />
      ) : (
        <Link to={`/work/${work.id}`} key={work.id}>
          <img
            src={work.cover}
            alt={work.title}
            className="work-img"
            data-aos="slide-left"
          />
        </Link>
      )}
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
      </div>
    </div>
  );
}

export default WorkCard;
