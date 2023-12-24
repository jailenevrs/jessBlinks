


import React from 'react';
import selfie from '../pages/selfie.jpeg';

function AboutMe() {
  return (
    <>
   
      <div className='border-boutme'>
        <div className='leftbox'></div>
        <p className='rectangle-text'>A lash technician based in South Florida with a passion for enhancing natural beauty, I am dedicated to providing exceptional lash services that leave my clients feeling confident. Maintaining a clean and sanitary environment is also a priority, using high-quality products to ensure the health and safety of my clients. Book an appointment with me - let's enhance your natural beauty and elevate your lash game.</p>
        <h2 className='sign'>Jessica Wong</h2>
      </div>
      <div className='image-and-signature'>
        <div className='oval-image'>
          <img className='selfie' src={selfie} alt='' />

        </div>
       
   
      </div>
    </>
  );
}

export default AboutMe;
