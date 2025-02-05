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
      <section className="art-gallery">
            {MyArt.map((art) => (
              <Link
                className="card-link"
                key={art.id}
                to={`/art/${art.id}`}
              >
                <ArtCard
                  key={art.id}
                  title={art.title}
                  description={art.description}
                  picture={art.picture}
                />
              </Link>
            ))}
          </section>

    </section>
  );
}

export default ArtGallery;
