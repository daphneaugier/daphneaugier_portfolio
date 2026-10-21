import Daphne from '../../components/Daphne'
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
          <meta name="description" content="Born in France, based in Montréal. Software engineer turned QA engineer with a background in UI/UX design. Painter, photographer, and creative at heart." />
        </Helmet>
        <Daphne/>
    </div>
  )
}

export default About
