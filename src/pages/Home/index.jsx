import { Link } from "react-router-dom";
//Import Components
import Hero from '../../components/HeroGif'
import WorkGallery from '../../components/WorkGallery'
import ButtonArt from '../../components/ButtonArt'

//Import Data
import works from '../../data/works.json'

function Home() {
  return (
    <div>
      <Hero />
      <WorkGallery works={(works)} />
      <ButtonArt />
    </div>
  )
}

export default Home
