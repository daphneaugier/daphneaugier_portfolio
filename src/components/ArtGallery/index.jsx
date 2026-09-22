import { useState, useEffect, useMemo } from "react";
import ArtModal from "../ArtModal";
import ArtSlider from "../ArtSlider";
import "./index.css";
import PropTypes from "prop-types";

function ArtGallery({ data }) {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("all");

  const categories = useMemo(
    () => [...new Set(data.map((e) => e.category).filter(Boolean))],
    [data]
  );

  const visibleData = useMemo(
    () => (filter === "all" ? data : data.filter((e) => e.category === filter)),
    [data, filter]
  );

  useEffect(() => {
    setActive(0);
  }, [filter]);

  useEffect(() => {
    document.addEventListener("contextmenu", preventDefault);
    return () => document.removeEventListener("contextmenu", preventDefault);
  }, []);

  const goNext = () => {
    setActive((prev) => (prev < visibleData.length - 1 ? prev + 1 : 0));
  };

  const goPrev = () => {
    setActive((prev) => (prev > 0 ? prev - 1 : visibleData.length - 1));
  };

  useEffect(() => {
    if (!show) return undefined;

    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        setShow(false);
      } else if (event.key === "ArrowRight") {
        goNext();
      } else if (event.key === "ArrowLeft") {
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, visibleData.length]);

  if (!data.length) {
    return (
      <div className="art-gallery">
        <h2 className="noResults">The Gallery is Empty</h2>
      </div>
    );
  }

  const handleClick = (index) => {
    setActive(index);
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  const current = visibleData[active];
  const title = current
    ? [current.description, current.lieu, current.date, current.medium]
        .filter(Boolean)
        .join(", ")
    : "";

  return (
    <div className="art">
      {categories.length > 1 && (
        <div className="art-filters">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              className={filter === c ? "active" : ""}
              onClick={() => setFilter(c)}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>
      )}
      {current && (
        <ArtModal
          show={show}
          onClose={onClose}
          onPrev={goPrev}
          onNext={goNext}
          title={title}
          active={active}
          total={visibleData.length}
        >
          <ArtSlider images={visibleData} active={active} />
        </ArtModal>
      )}
      <div className="art-gallery">
        {visibleData.map((e, i) => (
          <div
            className={i === active ? "active card" : "card"}
            onClick={() => handleClick(i)}
            key={e.description}
          >
            <img
              className="modal-image"
              src={`/assets/images/artbig/${e.picture}`}
              alt={e.description}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function preventDefault(e) {
  e.preventDefault();
}

ArtGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArtGallery;
