import ArtGallery from '../../components/ArtGallery'
import data from '../../data/art.json'
import { useEffect } from 'react'

function ArtStuff() {

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
  }, [ ]);
  
  return (
    <section className="art-section">
      <h1>Art Gallery</h1>
        <ArtGallery data={data} />
    </section>
  )
}

export default ArtStuff
