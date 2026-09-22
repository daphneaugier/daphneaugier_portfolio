import Hero from '../../components/Hero'
import Error from '../../components/Error'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

import video from '../../assets/videos/daphne-desk.mp4'
function Lost() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      <Helmet>
        <title>Page Not Found | Daphné Augier</title>
      </Helmet>
      <Hero video={video}/>
      <Error />
    </div>
  )
}

export default Lost
