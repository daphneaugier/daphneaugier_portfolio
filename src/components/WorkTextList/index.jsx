import PropTypes from "prop-types";

function WorkTextList({ title, subtitle, lines }) {
  return (
    <div className="work-text">
      <h2>{title}</h2>
      <p
        className="work-line"
        dangerouslySetInnerHTML={{ __html: subtitle }}
      ></p>
      <ol>
        {lines.map((line, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: line }}
          ></div>
        ))}
      </ol>
    </div>
  );
}

WorkTextList.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WorkTextList;
