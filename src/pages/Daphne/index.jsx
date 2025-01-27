//Import Components
import Hero from '../../components/Hero'
import Cv from '../../components/Cv'
import Menu from '../../components/Menu'

import video from '../../assets/videos/daphjaune.mp4'


function Home() {
  return (
    <div>
        <Menu/>
      <Hero video={video} />
      <Cv/>
    </div>
  )
}

export default Home
