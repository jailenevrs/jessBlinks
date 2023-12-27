


import React from 'react';
import selfie from '../pages/selfie.jpeg';




function AboutMe() {
  return (
    <>
   
     <div className='containers'>
    <div className='left' />
    <div className="right">
      <div className='content'>
        <p className='description'>A lash technician based in South Florida with a passion for enhancing natural beauty, I am dedicated to providing exceptional lash services that leave my clients feeling confident. Maintaining a clean and sanitary environment is also a priority, using high-quality products to ensure the health and safety of my clients. Book an appointment with me - let's enhance your natural beauty and elevate your lash game <br></br> 
        </p>    
        <br></br>
        <p className='sign'>Jessica Wong </p> 
        
                                                                    
</div>
</div>
</div>
    <div className='oval-image'>
        <img className='selfie src={selfie}'></img>   
        </div>
  
    </>
  );
}

export default AboutMe;
