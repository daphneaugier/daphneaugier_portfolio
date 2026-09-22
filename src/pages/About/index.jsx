import Daphne from '../../components/Daphne'
import Experience from '../../components/Experience'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

function About() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
        <Helmet>
          <title>About | Daphné Augier</title>
          <meta name="description" content="QA Engineer with a background in software engineering, web development, and UI/UX design. Here's my path so far." />
        </Helmet>
        <Daphne/>
        <br />{" "}
        <br />{" "}
        <br />{" "}
        <Experience />
    </div>
  )
}

export default About
