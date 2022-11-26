import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to='home' smooth={true} duration={500}>Home</Link></li>
        <li className="p__opensans"><Link to='about' smooth={true} duration={500}>About</Link></li>
        <li className="p__opensans"><Link to='menu' smooth={true} duration={500}>Menu</Link></li>
        <li className="p__opensans"><Link to='awards' smooth={true} duration={500}>Awards</Link></li>
        <li className="p__opensans"><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>
      <div className="app__navbar-login">
        {/* <a href="#login" className="p__opensans">Log In / Registration</a> */}
        <Link to='login' smooth={true} duration={500} className="p__opensans">Log In / Registration</Link>
        <div />
        {/* <a href="/" className="p__opensans">Book Table</a> */}
        <Link to='/' smooth={true} duration={500} className="p__opensans">Book Table</Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              {/* <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li> */}

              <li><Link to='home' smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Home</Link></li>
              <li><Link to='about' smooth={true} duration={500} onClick={() => setToggleMenu(false)}>About</Link></li>
              <li><Link to='menu' smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Menu</Link></li>
              <li><Link to='awards' smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Awards</Link></li>
              <li><Link to='contact' smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
