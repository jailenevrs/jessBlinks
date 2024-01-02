import React from 'react';
import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
import { InlineWidget } from "react-calendly";

import lash2 from '../assets/lash2.png';
import lash3 from '../assets/lash3.png';
import eyelash from '../assets/eyelash.png';
import lash4 from '../assets/lash4.JPEG';
import lash5 from '../assets/lash5.JPEG';
import lash6 from '../assets/lash6.JPEG';


const Slideshow = () => {
  return (
    <div className="slideshow-container">
      <div className="image-container">
        <img
          src={eyelash}
          className="image shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>
      <div className="image-container">
        <img
          src={lash2}
          className="image shadow-1-strong rounded mb-4"
          alt="Wintry Mountain Landscape"
        />
      </div>
      <div className="image-container">
        <img
          src={lash3}
          className="image shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>
      <div className="image-container">
        <img
          src={lash4}
          className="image shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>
      <div className="image-container">
        <img
          src={lash5}
          className="image shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>
      <div className="image-container">
        <img
          src={lash6}
          className="image shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>
      </div>
  );
};

export default Slideshow;
