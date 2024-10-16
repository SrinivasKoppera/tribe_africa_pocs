// CarouselScreen.tsx
import React from "react";
import "./1.css";

interface CarouselScreenProps {
  images: string[];
  titles: string[];
  activeIndex: number;
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
  getClassNames: (index: number) => string;
  handleDotClick: (index: number) => void;
}

const CarouselScreen: React.FC<CarouselScreenProps> = ({
  images,
  titles,
  activeIndex,
  isHovered,
  setIsHovered,
  getClassNames,
  handleDotClick,
}) => {
  return (
    <div
      id="slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((img, index) => (
        <label
          key={index}
          className={`slider-item ${getClassNames(index)} ${
            activeIndex === index && isHovered ? "transparent" : ""
          }`}
          id={`slider${index + 1}`}
        >
          <img src={img} alt={`image${index + 1}`} />
          <h1>{titles[index]}</h1>
          {activeIndex === index && isHovered && (
            <span className="click-here-text">Click here</span>
          )}
        </label>
      ))}
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselScreen;
