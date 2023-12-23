import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
  const [click, setClick] = useState(false)

  const handleClick = ()=> setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return(
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to= "/jessblinks" className='navbar-logo'></Link>
        <div className='menu-icon' onClick={handleClick}></div>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>

      </div>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'>
      <Link to= '/AboutMe' className='nav-links' onClick={closeMobileMenu}>
          About Me
        </Link>
        <Link to= '/services' className='nav-links' onClick={closeMobileMenu}>
          Services
        </Link>
        <Link to= '/appointment'className='nav-links' onClick={closeMobileMenu}>
          Book Appointment
        </Link>
        <Link to= '/Gallery' className='nav-links' onClick={closeMobileMenu}>
          Gallery
        </Link>
      </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar