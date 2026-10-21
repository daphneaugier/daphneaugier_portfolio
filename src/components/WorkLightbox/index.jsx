import { useEffect } from "react";
import PropTypes from "prop-types";
import ArtModal from "../ArtModal";
import "./index.css";

function WorkLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <ArtModal
      show
      onClose={onClose}
      onPrev={onClose}
      onNext={onClose}
      title={image.alt}
      active={0}
      total={1}
    >
      <img
        className="work-lightbox-image"
        src={image.src}
        alt={image.alt}
      />
    </ArtModal>
  );
}

WorkLightbox.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default WorkLightbox;
