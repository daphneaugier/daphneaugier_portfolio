import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import WorkDetails from "../../components/WorkDetails";

//Import Data
import workList from "../../data/works.json";

import "./index.css";
import WorkTitle from "../../components/WorkTitle";
import WorkText from "../../components/WorkText";
import WorkBanner from "../../components/WorkBanner";
import MyButton from "../../components/MyButton";

function Work() {
  const { workId } = useParams();
  const work = workList.find((item) => item.id === workId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!work) {
    return <Navigate to="/lost" />;
  }

  return (
    <div>
      <section className="works">
        <WorkTitle work={work} />
        <WorkBanner work={work} />
        <WorkDetails work={work} />
        {work.link !== "" ? <MyButton style="text-align:center" link={work.link} key={work.id} label="Visit site" size="basic" /> : ""}
        {work.away !== "" ? <WorkText detail={work.away} /> : ""}
        
      </section>
    </div>
  );
}

export default Work;
