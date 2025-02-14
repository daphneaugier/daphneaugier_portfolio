import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Carousel from "../../components/Carousel";
import WorkDetails from "../../components/WorkDetails";
import Col2 from "../../components/Col2";

//Import Data
import workList from "../../data/works.json";

import "./index.css";

function Work() {
  const { workId } = useParams();
  const work = workList.find((i) => i.id === workId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!work) {
    return <Navigate to="/lost" />;
  }

  const tools = work.tools.map((tool, index) => (
    <li key={index}>{tool}</li>
  ));

  return (
    <div>
      <section className="works">
        <Col2
          img={work.cover}
          title={`${work.id}. ${work.title}`}
          tools={tools}
          time={work.year}
          role={work.role}
        />
        <WorkDetails details={work.details} />
      </section>
    </div>
  );
}

export default Work;
