import PropTypes from "prop-types";
import ModalImage from "react-modal-image";

import "./index.css";

function ArtCard({ description, picture }) {
  return (
    <div className="card">
      <ModalImage
        className="modal-image"
        small={`/assets/images/art/${picture}`}
        large={`/assets/images/artbig/${picture}`}
        title={description}
        hideDownload={true}
        hideZoom={true}
        alt={description}
      />
        <h3 inert="true" className="overlay-text">{description}</h3>
    </div>
  );
}

ArtCard.propTypes = {
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default ArtCard;
