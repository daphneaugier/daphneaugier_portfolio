import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import WorkDetails from "../../components/WorkDetails";
import WorkLightbox from "../../components/WorkLightbox";

//Import Data
import workList from "../../data/works.json";

import "./index.css";
import WorkTitle from "../../components/WorkTitle";
import WorkBanner from "../../components/WorkBanner";
import MyButton from "../../components/MyButton";
import WorkTakeAway from "../../components/WorkTakeAway";

const ZOOMABLE = "img.work-img, img.work-img50, img.work-img-p, img.work-banner";

function Work() {
  const { workId } = useParams();
  const work = workList.find((item) => item.id === workId);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLightbox(null);
  }, [workId]);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const onWorkClick = (event) => {
    const img =
      event.target.closest(ZOOMABLE) ||
      event.target.closest(".work-zoom")?.querySelector("img");
    if (!img) return;
    event.preventDefault();
    setLightbox({ src: img.currentSrc || img.src, alt: img.alt || "" });
  };

  if (!work) {
    return <Navigate to="/lost" />;
  }

  return (
    <div>
      <Helmet>
        <title>{work.title} | Daphné Augier</title>
        <meta name="description" content={work.text} />
      </Helmet>
      <section className="works page-container" onClick={onWorkClick}>
        {work.title !== "" ? <WorkTitle id={work.id} title={work.title} tags={work.tags} /> : ""}
        {work.cover !== "" ? <WorkBanner cover={work.cover} title={work.title} /> : ""}
        <WorkDetails work={work} />
        <WorkLightbox image={lightbox} onClose={closeLightbox} />
        {work.link !== "" ? (
          <MyButton
            style="text-align:center"
            link={work.link}
            label="Visit site"
            size="basic"
            new_page={true}
            inactive={work.linkInactive}
            hoverLabel={work.linkInactive ? "site deactivated" : undefined}
          />
        ) : ""}
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
