import { useState } from "react";
import "./slideshow.scss";
import flecheDroite from "../../assets/VectorDroite.png";
import flecheGauche from "../../assets/VectorGauche.png";

function SlideShow(slides) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = slides.pictures.length;
  const next = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };
  const previous = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };
  return (
    <div className="carousel">
      {length > 1 && (
        <div onClick={previous}>
          <img
            src={flecheGauche}
            alt="flèche vers la gauche"
            className="carousel-btn-left"
          />
        </div>
      )}
      {length > 1 && (
        <div onClick={next}>
          <img
            src={flecheDroite}
            alt="flèche vers la droite"
            className="carousel-btn-right"
          />
        </div>
      )}
      <p className="counter-pic">
        {currentIndex + 1}/{slides.pictures.length}
      </p>
      {slides.pictures.map((image, index) => {
        return (
          <figure className="place-slide" key={index}>
            {index === currentIndex && (
              <img
                src={image}
                alt="Exemple du logement"
                className="carousel-img"
              />
            )}
          </figure>
        );
      })}
    </div>
  );
}

export default SlideShow;
