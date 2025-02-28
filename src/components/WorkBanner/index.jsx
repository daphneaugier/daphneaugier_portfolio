import PropsType from "prop-types";
import "./index.css";

function WorkBanner({ work }) {
  return (
    <>
    <img src={`/assets/images/${work.cover}`} alt={work.title} className="work-banner" />
    </>
  );
}

WorkBanner.propTypes = {
  work: PropsType.object.isRequired,
};

export default WorkBanner;
