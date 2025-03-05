import PropsType from "prop-types";
import "./index.css";

function WorkBanner({ cover, title }) {
  return (
    <>
    <img src={`/assets/images/${cover}`} alt={title} className="work-banner" />
    </>
  );
}

WorkBanner.propTypes = {
  cover: PropsType.string.isRequired,
  title: PropsType.string.isRequired,
};

export default WorkBanner;
