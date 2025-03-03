import PropTypes from "prop-types";
import WorkBoxText from "../WorkBoxText";
import WorkText from "../WorkText";
import WorkTextImage from "../WorkTextImage";
import "./index.css";

function WorkDetails({ work }) {

  return (
    <article className="work-details">
      <WorkBoxText detail={work.detail1} />
      <WorkTextImage detail={work.detail2} />
      <WorkText detail={work.detail3} />
    </article>
  );
}


WorkDetails.propTypes = {
  work: PropTypes.object.isRequired,
};

export default WorkDetails;
