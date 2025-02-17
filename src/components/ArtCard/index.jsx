import PropTypes from "prop-types";
import ModalImage from "react-modal-image";

import "./index.css";

function ArtCard({ title, description, picture }) {
  return (
    <ModalImage
      className="card"
      small={`/assets/images/art/${picture}`}
      large={`/assets/images/artbig/${picture}`}
      hideDownload={true}
      hideZoom={true}
      alt={title}
    />
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
