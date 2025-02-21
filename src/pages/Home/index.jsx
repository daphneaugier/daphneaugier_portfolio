import { useEffect } from 'react'

import Hero from '../../components/HeroGif'
import WorkGallery from '../../components/WorkGallery'
import ButtonArt from '../../components/ButtonArt'

//Import Data
import works from '../../data/works.json'

function Home() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div>
      <Hero />
      <WorkGallery works={(works)} />
      <br/>
      <br/>
      <ButtonArt />
    </div>
  )
}

export default Home
