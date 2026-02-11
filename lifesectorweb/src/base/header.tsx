import './header.css';
import LifeSector from "../assets/LifeSector.png"

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
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
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">About us </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ministries</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Our Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Special Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">The Ministry Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Podcasts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
