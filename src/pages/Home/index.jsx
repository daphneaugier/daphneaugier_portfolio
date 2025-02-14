import { Link } from "react-router-dom";
//Import Components
import Hero from '../../components/HeroGif'
import WorkGallery from '../../components/WorkGallery'
// import ButtonArt from '../../components/ButtonArt'

import video from '../../assets/videos/daphjaune.mp4'

//Import Data
import works from '../../data/works.json'

function Home() {
  return (
    <div>
      <Hero video={video} />
      <WorkGallery works={(works)} />
    </div>
  )
}

//       <ButtonArt />

export default Home
