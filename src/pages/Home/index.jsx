//Import Components
import Hero from '../../components/Hero'
import WorkGallery from '../../components/WorkGallery'
import Contact from '../../components/Contact'

import video from '../../assets/videos/daphjaune.mp4'

//Import Data
import works from '../../data/works.json'

function Home() {
  return (
    <div>
      <Hero video={video} />
      <WorkGallery works={(works)} />
      <Contact />
    </div>
  )
}

export default Home
