//Import Components
import Hero from '../../components/Hero'
import WorkGallery from '../../components/WorkGallery'
import MainMenu from '../../components/MainMenu'

import video from '../../assets/videos/daphjaune.mp4'

//Import Data
import works from '../../data/works.json'

function Home() {
  return (
    <div>
      <MainMenu />
      <Hero video={video} />
      <WorkGallery works={(works)} />
    </div>
  )
}

export default Home
