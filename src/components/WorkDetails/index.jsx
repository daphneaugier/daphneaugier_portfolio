import PropTypes from "prop-types";
import WorkBoxText from "../WorkBoxText";
import WorkText from "../WorkText";
import WorkTextImage from "../WorkTextImage";
import WorkTextList from "../WorkTextList";

import "./index.css";

function WorkDetails({ work }) {

  return (
    <article className="work-details">
      {work.details.map((detail, index) => (
        <div key={index} className="work-detail">
          {detail.type === "boxtxt" ? <WorkBoxText box={detail.box} txt={detail.txt} /> : ""}
          {detail.type === "txtimg" ? <WorkTextImage txt={detail.txt} img={detail.img} alt={detail.alt} /> : ""}
          {detail.type === "txt" ? <WorkText title={detail.title} lines={detail.lines} /> : ""}
          {detail.type === "txtlist" ? <WorkTextList title={detail.title} subtitle={detail.subtitle} lines={detail.lines} /> : ""}
        </div>
      ))}
    </article>
  );
}


WorkDetails.propTypes = {
  work: PropTypes.object.isRequired,
};

export default WorkDetails;
