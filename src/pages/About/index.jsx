import Daphne from '../../components/Daphne'
import Experience from '../../components/Experience'
import { useEffect } from 'react'

function About() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div>
        <Daphne/>
        <br />{" "}
        <br />{" "}
        <br />{" "}
        <Experience />
    </div>
  )
}

export default About
