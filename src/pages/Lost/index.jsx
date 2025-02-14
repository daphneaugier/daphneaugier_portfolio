//Import Components
import Hero from '../../components/HeroGif'
import Error from '../../components/Error'
import video from '../../assets/videos/daphjaune.mp4'

function Lost() {
  return (
    <div>
      <Hero video={video} />
      <Error />
    </div>
  )
}

export default Lost
