import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Experience from "../../components/Experience";
import WorkGallery from "../../components/WorkGallery";

import works from "../../data/works.json";

function WorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Work | Daphné Augier</title>
        <meta
          name="description"
          content="Work experience, education, and featured projects from Daphné Augier — SDET, QA engineer, and former UI/UX designer based in Montréal."
        />
      </Helmet>
      <Experience />
      <WorkGallery works={works} />
    </div>
  );
}

export default WorkPage;
