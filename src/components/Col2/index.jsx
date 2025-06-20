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
        <h2>Timeline:</h2>
        <p>{time}</p>
        <h2>Role: </h2>
        <p>{role}</p>
        <h2>Tools: </h2>
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
