import PropsType from "prop-types";
import "./index.css";

function WorkTitle({ id, title, tags }) {
  return (
    <>
      <h1 className="work-title">
        <div>
        {id} {title}{" "}
        </div>
        <div className="work-title-tag-list">
        {tags.map((tag) => (
          <div key={`${tag}-${id}`} className="work-title-tag">
            {tag}
          </div>
        ))}
        </div>
      </h1>
    </>
  );
}

WorkTitle.propTypes = {
  id: PropsType.string.isRequired,
  title: PropsType.string.isRequired,
  tags: PropsType.arrayOf(PropsType.string).isRequired,
};

export default WorkTitle;
