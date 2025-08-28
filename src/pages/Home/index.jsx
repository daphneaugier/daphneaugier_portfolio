import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

import Hero from "../../components/Hero";
import WorkGallery from "../../components/WorkGallery";
import ButtonArt from "../../components/MyButton";
import ReactCurvedText from "react-curved-text";
//Import Data
import works from "../../data/works.json";
import video from "../../assets/videos/daphne-desk.mp4";
import "./index.css";

function Home() {
  const text = "Scroll down to read";
  const fontSize = 18;
  const textPathFill = null;


  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Optional: Add a small delay to ensure rendering
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }else{
      window.scrollTo(0, 0);
    }
  }, [location.hash]);


  return (
    <div>
      <div className="hero">
        <Hero video={video} />
        <a href="#works" className="curved-text-link">
          <ReactCurvedText
            width={110}
            height={110}
            cx={55}
            cy={55}
            rx={30}
            ry={30}
            startOffset={0}
            reversed={true}
            text={text}
            textProps={fontSize ? { style: { fontSize: fontSize } } : null}
            textPathProps={textPathFill ? { fill: textPathFill } : null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={{ className: "fixed-curved-text" }}
          />
        </a>
      </div>
      <WorkGallery works={works} />
      <br />
      <div className="center">
        <ButtonArt link="art" label="Art" size="large" />
      </div>
    </div>
  );
}

export default Home;
