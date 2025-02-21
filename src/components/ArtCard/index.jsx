import PropTypes from "prop-types";
import ModalImage from "react-modal-image";

import "./index.css";

function ArtCard({ title, description, picture }) {
  return (
    <div className="card">
    <ModalImage
      className="modal-image"
      small={`/assets/images/art/${picture}`}
      large={`/assets/images/artbig/${picture}`}
      hideDownload={true}
      hideZoom={true}
      alt={title}
    />
      <h3 className="overlay-text">{description}</h3>
      </div>
  );
}

ArtCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
  /*
            <img src={`/assets/images/art/${picture}`} alt={title} />
             <caption className='caption'>{title}</caption>
            <p className='description' dangerouslySetInnerHTML={{__html: description}}></p> */

export default ArtCard;
