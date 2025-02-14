import PropTypes from "prop-types";
import "./index.css";

function Col2({ img, title, tools, role, time }) {
  return (
    <div className="col-deux">
      <img src={`/assets/images/${img}`}
      data-aos="fade-down"
       alt="Project Screenshot" />
      <div className="col-deux-text" data-aos="zoom-in">
        <h2 data-aos="zoom-in">{title}</h2>
        <h3>Timeline:</h3>
        <p>{time}</p>
        <h3>Role: </h3>
        <p>{role}</p>
        <h3>Tools: </h3>
        <ul>{tools}</ul>
      </div>
    </div>
  );
}

Col2.propTypes = {
  img: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  tools: PropTypes.node.isRequired,
  role: PropTypes.node.isRequired,
  time: PropTypes.node.isRequired,
};

export default Col2;
