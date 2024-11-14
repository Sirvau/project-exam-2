import { useState } from 'react';
import PropTypes from 'prop-types';

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full flex justify-center">
      {' '}
      {/* Centers entire slider */}
      <div className="relative w-full sm:max-w-xl md:max-w-2xl">
        {' '}
        {/* Restricts image width */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item  h-[320px] sm:h-[400px] md:h-[450px] ${index === currentIndex ? 'block' : 'hidden'}`}>
            <img
              src={image.url}
              alt={image.alt || `Slide ${index + 1}`}
              className="w-full h-full object-cover object-bottom border-0 rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-between px-4">
              {' '}
              {/* Aligns buttons */}
              <button
                onClick={handlePrevious}
                className="btn btn-sm md:btn-md btn-circle border-0 hover:bg-primary bg-tBase text-primary hover:text-tBase">
                ❮
              </button>
              <button
                onClick={handleNext}
                className="btn btn-sm md:btn-md btn-circle border-0 hover:bg-primary bg-tBase text-primary hover:text-tBase">
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string
    })
  ).isRequired
};

export default ImageSlider;
