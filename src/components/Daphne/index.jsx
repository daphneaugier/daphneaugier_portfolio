import { ReactTyped } from "react-typed";
import React, { useState } from "react";
import ReactCurvedText from "react-curved-text";

import "./index.css";
import daphne from "../../assets/images/daphne.png";

function Daphne() {
  const text = "Get in touch & let's make something";
  const fontSize = 32;
  const textPathFill = null;

  return (
    <section className="daphne">
      <h1>
        I'm Daphné Augier,
        <br />{" "}
        <ReactTyped
          strings={["nice to meet you!"]}
          typeSpeed={100}
          backSpeed={100}
          cursorChar="|"
          loop
        />
      </h1>
      <p>
        I was born and raised in France by a French-Italian family before moving
        to Canada, where I’ve stayed ever since.
        <br />
        <br />
      </p>
      <p>
        I am a lifelong multidisciplinary artist, who has always been passionate
        about creative hobbies; whether painting (oil or watercolor), drawing,
        photography, etc.
        <br />
        <br />
      </p>
      <p>
        My interest for technology led me to graduating in Software Engineering,
        where I developed a strong knwoledge in programming and computational
        thinking. However, my passion for design naturally guided me toward
        UI/UX where I focused on creating intuitive and accessible platforms.
        <br />
        <br />
      </p>
      <p>
        I’ve worked first as a developer (for both mobile and web platforms),
        then a UI/UX designer, collaborating with a variety of clients and
        projects. My approach is both meticulous and playful. I aim to create
        experiences that feel seamless, engaging, and human-centered.
        <br />
        <br />
      </p>
      <p>
        When I’m not designing, you’ll find me painting, reading or cooking.
      </p>
      <div className="daphne-row">
        <div className="daphne-col1">
          <ReactCurvedText
            width={400}
            height={400}
            cx={200}
            cy={200}
            rx={120}
            ry={120}
            startOffset={0}
            reversed={true}
            text={text}
            textProps={fontSize ? { style: { fontSize: fontSize } } : null}
            textPathProps={textPathFill ? { fill: textPathFill } : null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={{ className: "rotating-curved-text" }}
          />
        </div>
        <div>
          <img 
          data-aos="fade-up"
          data-aos-duration="1500"
          src={daphne} alt="Daphné Augier" className="daphne-img" />
        </div>
      </div>
    </section>
  );
}

export default Daphne;
