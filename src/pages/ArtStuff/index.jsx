import ArtGallery from '../../components/ArtGallery'
import data from '../../data/art.json'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

function ArtStuff() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ ]);

  return (
    <section className="art-section page-container">
      <Helmet>
        <title>Art | Daphné Augier</title>
        <meta name="description" content="Photography, painting, and other creative work by Daphné Augier." />
      </Helmet>
      <h1>Art Gallery</h1>
      <p className="art-intro">
        This is where I keep the work I make outside of a brief: 35mm photography for now,
        with paintings and linocuts joining as I get them photographed properly.
      </p>
        <ArtGallery data={data} />
    </section>
  )
}

export default ArtStuff
