import React, { useState } from 'react';
import './TortoiseCarousel.css';

function TortoiseCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };  

  return (
    <div className="carousel-container">
        <button className="carousel-prev-button" onClick={goToPrevious}>Previous</button>
        <div className="carousel-image-container">
            <div className="carousel-text">I eat:</div>
            <img src={images[currentIndex]?.src} alt={`Slide ${currentIndex}`} className="carousel-image" />
            <div className="carousel-caption">{images[currentIndex]?.caption}</div>
            </div>
        <button className="carousel-next-button" onClick={goToNext}>Next</button>
    </div>
  );
}

export default TortoiseCarousel;
