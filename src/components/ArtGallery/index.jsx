import { useState } from "react";
import ArtModal from "../ArtModal";
import ArtSlider from "../ArtSlider";
import "./index.css";
import PropTypes from "prop-types";

function ArtGallery({ data }) {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);

  if (!data.length) {
    return (
      <div className="art-gallery">
        <h2 className="noResults">The Gallery is Empty</h2>
      </div>
    );
  }

  const handleClick = (index) => {
    setActive(index);
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  return (
    <div className="art">
      <ArtModal
        show={show}
        onClose={onClose}
        title={
          data[active].description +
          ", " +
          data[active].lieu +
          ", " +
          data[active].date +
          ", " +
          data[active].medium
        }
      >
        <ArtSlider images={data} active={active} setActive={setActive} />
      </ArtModal>
      <div className="art-gallery">
        {data.map((e, i) => (
          <div
            className={i === active ? "active card" : "card"}
            onClick={() => handleClick(i)}
            key={e.description}
          >
            <img
              className="modal-image"
              src={`/assets/images/artbig/${e.picture}`}
              alt={e.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

ArtGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArtGallery;

        /*
        <img
          src={`/assets/images/artbig/${data[active].picture}`}
          alt={data[active].description}
        />*/