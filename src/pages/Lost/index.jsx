import Hero from '../../components/Hero'
import Error from '../../components/Error'
import { useEffect } from 'react'

import video from '../../assets/videos/daphne-desk.mp4'
function Lost() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div>
      <Hero video={video}/>
      <Error />
    </div>
  )
}

export default Lost
