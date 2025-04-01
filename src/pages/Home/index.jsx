import { useEffect } from "react";
import PropTypes from "prop-types";
import Hero from "../../components/Hero";
import WorkGallery from "../../components/WorkGallery";
import ButtonArt from "../../components/MyButton";

//Import Data
import video from "../../assets/videos/daphne-desk.mp4";

function Home({works}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero video={video} />
      <WorkGallery works={works} />
      <br />
      <br />
      <ButtonArt link="art" label="Art!" size="large" />
    </div>
  );
}


Home.propTypes = {
  works: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default Home;
