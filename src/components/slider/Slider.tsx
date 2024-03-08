import React, { useState } from "react";
import "./Slider.css";

interface SliderProps {
  images: string[];
  className?: string;
}

const Slider: React.FC<SliderProps> = ({ images, className }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className={`slider ${className}`}>
      <button onClick={prevSlide}>&lt;</button>
      {images.map((image, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && <img src={image} alt="image slide" />}
        </div>
      ))}
      <button onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default Slider;
