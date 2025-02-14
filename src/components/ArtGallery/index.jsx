import "./index.css";
import MyArt from '../../data/art.json'
import { Link } from "react-router-dom";
import ArtCard from "../ArtCard";

function ArtGallery() {

  return (
    <section className="daphne">
      <h1>
        Art Gallery
      </h1>

      <h3>
        Film photographies
      </h3>
      <section className="art-gallery">
            {MyArt.map((art) => (
                <ArtCard
                  key={art.id}
                  // title={art.title}
                  // description={art.description}
                  picture={art.picture}
                />
            ))}
          </section>

    </section>
  );
}

export default ArtGallery;
