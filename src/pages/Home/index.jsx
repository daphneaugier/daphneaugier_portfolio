import { useEffect } from 'react'

import Hero from '../../components/Hero'
import WorkGallery from '../../components/WorkGallery'
import ButtonArt from '../../components/MyButton'

//Import Data
import works from '../../data/works.json'
import video from '../../assets/videos/daphne-desk.mp4'

function Home() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div>
      <Hero video={video} />
      <WorkGallery works={(works)} />
      <br/>
      <br/>
      <ButtonArt link="art" label="Art!" size="large" />
    </div>
  )
}

export default Home
