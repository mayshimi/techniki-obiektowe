import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Import stylów

const images = [
  require('../images/image1.jpg'), // Dodaj ścieżki do obrazów
  require('../images/image2.jpg'),
  require('../images/image3.jpg')
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funkcja do zmiany obrazu na kolejny
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Funkcja do zmiany obrazu na poprzedni
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatyczna zmiana obrazów co 3 sekundy
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Zmienia obraz co 3 sekundy
    return () => clearInterval(interval); // Czyści interwał przy odmontowaniu komponentu
  }, []);

  return (
    <div className="slider-container">
      <button className="prev-btn" onClick={prevImage}>
        &#10094;
      </button>
      <img src={images[currentIndex]} alt="Slideshow" className="slider-image" />
      <button className="next-btn" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
}

export default ImageSlider;
