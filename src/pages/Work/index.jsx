import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import WorkDetails from "../../components/WorkDetails";

import "./index.css";
import WorkTitle from "../../components/WorkTitle";
import WorkBanner from "../../components/WorkBanner";
import MyButton from "../../components/MyButton";
import WorkTakeAway from "../../components/WorkTakeAway";

function Work({workList}) {
  const { workId } = useParams();
  const work = workList.find((item) => item.id === workId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [workId]);

  if (!work) {
    return <Navigate to="/lost" />;
  }

  return (
    <div>
      <section className="works">
        {work.title !== "" ? <WorkTitle id={work.id} title={work.title} tags={work.tags} /> : ""}
        {work.cover !== "" ? <WorkBanner cover={work.cover} title={work.title} /> : ""}
        <WorkDetails work={work} />
        {work.link !== "" ? <MyButton style="text-align:center" link={work.link} label="Visit site" size="basic" new_page={true} /> : ""}
        {work.away.title !== "" ? <WorkTakeAway title={work.away.title} text={work.away.text} /> : ""}
        <br />
        <div className="work-btn">
          {work.previous !== "" ? <MyButton link={`/work/${work.previous}`} label="Previous Project" size="basic" /> : ""}
          {work.next !== "" ? <MyButton link={`/work/${work.next}`} label="Next Project" size="basic" /> : ""}
        </div>
      </section>
    </div>
  );
}

export default Work;
