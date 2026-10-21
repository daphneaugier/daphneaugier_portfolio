import PropsType from "prop-types";
import "./index.css";

function WorkBanner({ cover, title }) {
  return (
    <figure className="work-banner-frame">
      <button type="button" className="work-zoom work-banner-zoom" aria-label={`View larger: ${title}`}>
        <img src={`/assets/images/${cover}`} alt={title} className="work-banner" />
      </button>
    </figure>
  );
}

WorkBanner.propTypes = {
  cover: PropsType.string.isRequired,
  title: PropsType.string.isRequired,
};

export default WorkBanner;
