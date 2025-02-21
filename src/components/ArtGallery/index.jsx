import "./index.css";
import ArtCard from "../ArtCard";
import PropTypes from "prop-types";

function ArtGallery({ data }) {
  if (!data.length) {
    return (
      <div className="art-gallery">
        <h2 className="noResults">The Gallery is Empty</h2>
      </div>
    );
  }

  return (
    <div className="art-gallery">
      {data.map((item) => (
        <ArtCard
          key={item.id}
          title={item.title}
          description={item.description}
          picture={item.picture}
          className="image"
        />
      ))}
    </div>
  );
}

ArtGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArtGallery;
