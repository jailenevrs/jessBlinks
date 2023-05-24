import React, {useState} from 'react';
import { SliderData } from './SliderData';


const Slideshow = () => {
  return (
    <div>
      {SliderData.map((slide, index) => (
        <img src={slide.image} alt={`Slide ${index}`} key={index} />
      ))}
    </div>
  );
}

export default Slideshow;