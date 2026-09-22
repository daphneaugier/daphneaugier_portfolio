import "./index.css";
import PropTypes from "prop-types";

const ArtModal = ({ children, show, onClose, onPrev, onNext, title, active, total }) => {
  if (!show) {
    return null;
  }

  const stop = (e) => e.stopPropagation();

  return (
    <div className="modal-wrapper" onClick={onClose}>
      <div className="modal-backdrop" />
      <button className="modal-close" onClick={(e) => { stop(e); onClose(); }} aria-label="Close">
        &times;
      </button>
      {total > 1 && (
        <>
          <button
            className="modal-nav-btn prev"
            onClick={(e) => { stop(e); onPrev(); }}
            aria-label="Previous image"
          >
            &#8249;
          </button>
          <button
            className="modal-nav-btn next"
            onClick={(e) => { stop(e); onNext(); }}
            aria-label="Next image"
          >
            &#8250;
          </button>
        </>
      )}
      <div className="modal-content" onClick={stop}>
        <div className="modal-body">{children}</div>
        {title ? <div className="modal-title">{title}</div> : null}
        {total > 1 && (
          <div className="modal-counter">
            {active + 1} / {total}
          </div>
        )}
      </div>
    </div>
  );
};

ArtModal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  title: PropTypes.string,
  active: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ArtModal;
