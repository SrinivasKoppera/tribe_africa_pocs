// CharmingHotelsCarouselContainer.tsx
import React, { useState } from "react";
import CharmingHotelsCarouselScreen from "./carousel-screen";

const images = [
  "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  "https://photographylife.com/wp-content/uploads/2018/11/Moeraki-Boulders-New-Zealand.jpg",
  "https://cdn.fstoppers.com/styles/full/s3/media/2019/12/04/nando-jpeg-quality-001.jpg",
  "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  "https://photographylife.com/wp-content/uploads/2018/11/Moeraki-Boulders-New-Zealand.jpg",
  "https://cdn.fstoppers.com/styles/full/s3/media/2019/12/04/nando-jpeg-quality-001.jpg",
  "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  "https://photographylife.com/wp-content/uploads/2018/11/Moeraki-Boulders-New-Zealand.jpg",
  "https://cdn.fstoppers.com/styles/full/s3/media/2019/12/04/nando-jpeg-quality-001.jpg",
];

const CharmingHotelsCarouselContainer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let itemsPerPage = 0;

  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    itemsPerPage = 1;
  } else if (screenWidth < 1024) {
    itemsPerPage = 2;
  } else {
    itemsPerPage = 3;
  }

  const handleNext = () => {
    if (currentIndex + itemsPerPage < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isNextDisabled = currentIndex >= images.length - itemsPerPage;
  const isPrevDisabled = currentIndex === 0;

  return (
    <CharmingHotelsCarouselScreen
      images={images}
      currentIndex={currentIndex}
      handleNext={handleNext}
      handlePrev={handlePrev}
      isNextDisabled={isNextDisabled}
      isPrevDisabled={isPrevDisabled}
      itemsPerPage={itemsPerPage}
    />
  );
};

export default CharmingHotelsCarouselContainer;
