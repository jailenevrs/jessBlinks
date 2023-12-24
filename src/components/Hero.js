import React from 'react';
import backgroundImage from '../assets/lash.webp'
import "../App.css"
import '../components/Hero.css'

function Hero(){
    const heroStyle= {backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
  };
                    
    return (
        <div className='hero-container' style={heroStyle}>
        <div className='frosted-glass-bar'></div>
           <p className= "hero-text">Elevate Your Eyes, Elevate Your Style</p>

        </div>
    )

}
export default Hero;