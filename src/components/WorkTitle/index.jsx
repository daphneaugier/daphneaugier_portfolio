import PropsType from "prop-types";
import "./index.css";

function WorkTitle({ work }) {
  return (
    <>
      <h1 className="work-title">
        <div>
        {work.id} {work.title}{" "}
        </div>
        <div className="work-title-tag-list">
        {work.tags.map((tag) => (
          <div key={`${tag}-${work.id}`} className="work-title-tag">
            {tag}
          </div>
        ))}
        </div>
      </h1>
    </>
  );
}

WorkTitle.propTypes = {
  work: PropsType.object.isRequired,
};

export default WorkTitle;
