import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../../components/Hero";
import MyButton from "../../components/MyButton";
import ReactCurvedText from "react-curved-text";
import video from "../../assets/videos/daphne-desk.mp4";
import "./index.css";

function Home() {
  const text = "Scroll down to read";
  const fontSize = 22;
  const textPathFill = null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Daphné Augier | QA Engineer & UI/UX Designer in Montréal</title>
        <meta name="description" content="Portfolio of Daphné Augier, QA Engineer and former UI/UX designer and web developer in Montréal. Case studies, testing work, and creative projects." />
      </Helmet>
      <div className="hero">
        <Hero video={video} />
        <a href="#now" className="curved-text-link">
          <ReactCurvedText
            width={140}
            height={140}
            cx={70}
            cy={70}
            rx={36}
            ry={36}
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
      <section id="now" className="home-now page-container">
        <p className="home-now-label">Now</p>
        <h2 className="home-now-title">
          SDET at GameAddik. I build the quality layer for a large consumer platform. Then I design and ship products on the side.
        </h2>
        <ul className="home-now-list">
          <li>
            <span className="home-now-index">01</span>
            <div>
              <h3>Quality engineering</h3>
              <p>pytest, Playwright, APIs, and CI/CD. First dedicated quality hire. I own test strategy, automation, and release bars each sprint.</p>
            </div>
          </li>
          <li>
            <span className="home-now-index">02</span>
            <div>
              <h3>Product &amp; systems</h3>
              <p>Full-stack work for real clients: radio CMS, restaurant sites, a Flutter marketplace. I design the flow, then I make it run.</p>
            </div>
          </li>
          <li>
            <span className="home-now-index">03</span>
            <div>
              <h3>Craft</h3>
              <p>UI/UX, film photography, painting. The same eye I use on a listing page I use on a test case: what will a real person miss?</p>
            </div>
          </li>
        </ul>
        <div className="home-now-actions">
          <MyButton link="/work" label="See work" size="basic" />
          <MyButton link="/about" label="About" size="basic" />
        </div>
      </section>
    </div>
  );
}

export default Home;
