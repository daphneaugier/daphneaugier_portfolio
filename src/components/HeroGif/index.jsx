import { ReactTyped } from "react-typed";
import './index.css'
import daphne from '../../assets/videos/daphjaune.gif'

function HeroGif() {
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
          <div className="gif-container">
            <img src={daphne} alt="Daphné Augier at her desk" />
          </div>
        </section>    </div>
  )
}

export default HeroGif
