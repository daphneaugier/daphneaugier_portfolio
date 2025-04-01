import ArtGallery from '../../components/ArtGallery'
import { useEffect } from 'react'

function ArtStuff({data}) {

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
    <section className="daphne">
      <h1>Art Gallery</h1>
        <ArtGallery data={data} />
    </section>
  )
}

export default ArtStuff
