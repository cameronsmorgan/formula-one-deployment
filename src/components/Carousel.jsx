import React, { useState, useEffect } from "react";
import Image1 from "../assets/images/Image1.jpg";
import Image2 from "../assets/images/Image2.jpg";
import Image3 from "../assets/images/Image3.jpeg";
import Image4 from "../assets/images/Image4.jpg";
import './Carousel.css';

const images = [Image1, Image2, Image3, Image4];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);  //stores index of current image

  useEffect(() => {
    const interval = setInterval(() => {  //starts timer on mount & increments every 3sec
      setCurrentIndex(prev => (prev + 1) % images.length); //loops back to 0
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="carousel" aria-label="Image Carousel">
      <figure>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
        <figcaption>Slide {currentIndex + 1} of {images.length}</figcaption>
      </figure>
      <nav className="dots" aria-label="Carousel navigation">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${currentIndex === idx ? "active" : ""}`}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={currentIndex === idx ? "true" : "false"}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </nav>
    </section>
  );
};

export default Carousel;
