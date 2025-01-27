//Import Components
import Hero from '../../components/Hero'
import Menu from '../../components/Menu'
import Error from '../../components/Error'
import video from '../../assets/videos/daphjaune.mp4'

function Lost() {
  return (
    <div>
      <Menu />
      <Hero video={video} />
      <Error />
    </div>
  )
}

export default Lost
