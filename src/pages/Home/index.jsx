import { useEffect } from "react";

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
  const fontSize = 32;
  const textPathFill = null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="hero">
        <Hero video={video} />
        <a href="#works" className="curved-text-link">
          <ReactCurvedText
            width={200}
            height={200}
            cx={100}
            cy={100}
            rx={50}
            ry={50}
            startOffset={0}
            reversed={true}
            text={text}
            textProps={fontSize ? { style: { fontSize: fontSize } } : null}
            textPathProps={textPathFill ? { fill: textPathFill } : null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={{ className: "rotating-curved-text" }}
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
