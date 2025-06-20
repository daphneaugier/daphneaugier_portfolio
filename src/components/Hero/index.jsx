import { ReactTyped } from "react-typed";
import PropTypes from "prop-types";
import './index.css'

function Hero({video}) {
  return (
    <div>
        <section className="hero-container">
            <div className="hero-content">
            <h1>
            Hello,<br />
                I'm {" "}
                <ReactTyped strings={["Daphné Augier", "a UI/UX Designer",  "a Web Developer"]} 
                typeSpeed={100}
                backSpeed={100}
                cursorChar="|" loop />            </h1>
          </div>
          <div className="video-container">
            <video autoPlay loop muted>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
    </div>
  )
}
Hero.propTypes = {
  video: PropTypes.string.isRequired,
};

export default Hero
