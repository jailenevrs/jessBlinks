import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { InlineWidget } from "react-calendly";

import lash2 from '../assets/lash2.png';
import lash3 from '../assets/lash3.png';
import eyelash from '../assets/eyelash.png';

const Slideshow = () => {
  const images = [lash2, lash3, eyelash];

  return (
    <Slide>
      <div className="each-slide-effect">
        <div style={{
          'backgroundImage': `url(${images[0]})`,
          'backgroundSize': 'contain', 
          'backgroundRepeat': 'no-repeat', 
          'backgroundPosition': 'center', 
          'width': '100%', 
          'height': '400px' 
        }}>
          {/* <span>Slide 1</span> */}
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{
          'backgroundImage': `url(${images[1]})`,
          'backgroundSize': 'contain',
          'backgroundRepeat': 'no-repeat',
          'backgroundPosition': 'center',
          'width': '75%',
          'height': '500px'
        }}>
          {/* <span>Slide 2</span> */}
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{
          'backgroundImage': `url(${images[2]})`,
          'backgroundSize': 'contain',
          'backgroundRepeat': 'no-repeat',
          'backgroundPosition': 'center',
          'width': '75%',
          'height': '500px'
        }}>
          {/* <span>Slide 3</span> */}
        </div>
      </div>
    </Slide>
   
  
  );
 
};

export default Slideshow;
