import './header.css';
import LifeSector from "../assets/LifeSector.png";
import { useEffect, useState } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger navbar slide-in after initial render
    const raf = requestAnimationFrame(() => setLoaded(true));

    // Handle scroll to add scrolled class
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className={`header ${loaded ? 'loaded' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid navb_s">
          <a className="navbar-brand" href="#">
            <img className='logo' src={LifeSector} alt="Life sector Icon" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="/">About us</a></li>
              <li className="nav-item"><a className="nav-link" href="/ministries">Ministries</a></li>
              <li className="nav-item"><a className="nav-link" href="/services">Our Services</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact_us">Contact Us</a></li>
              <li className="nav-item"><a className="nav-link" href="gallery">Gallery</a></li>
              <li className="nav-item"><a className="nav-link" href="#">The Ministry Team</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Podcasts</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;