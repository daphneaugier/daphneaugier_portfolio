import "./index.css";
import PropTypes from "prop-types";

const ArtModal = ({ children, show, onClose, title }) => {
  return (
    show && (
      <>
        <div className="modal-backdrop" onClick={onClose} />
        <div className="modal-wrapper">
          <div className="modal-content">
            <div className="modal-header">
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-title">{title}</div>
          </div>
        </div>
      </>
    )
  );
};

ArtModal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ArtModal;