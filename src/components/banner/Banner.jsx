import React, { useEffect, useState } from 'react';
import banner1 from './001.png'; 
import banner2 from './002.jpg';
import banner3 from './003.jpg';
import banner4 from "./004.jpg"
import banner5 from "./005.jpg"
import banner6 from "./006.jpg"
import banner7 from "./007.jpg"

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [banner2, banner1, banner3, banner4, banner5, banner6, banner7];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval);
  });

  return (
    <div className="banner-slider">
      <img src={banners[currentSlide]} className='banner-image' alt={`Banner ${currentSlide + 1}`} />
      <div className="btn-div">
      <button onClick={prevSlide} className='change-btn'><i className='fa-solid fa-angles-left'></i> </button>
      <button onClick={nextSlide} className='change-btn'><i className='fa-solid fa-angles-right'></i></button>
      </div>
    </div>
  );
};

export default BannerSlider;
