import Hero from '../../components/HeroGif'
import Error from '../../components/Error'
import { useEffect } from 'react'

function Lost() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div>
      <Hero />
      <Error />
    </div>
  )
}

export default Lost
