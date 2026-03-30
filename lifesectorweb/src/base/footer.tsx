import './footer.css';
import logo from "../assets/LifeSector(1).png"

function Header() {
  return (
    <footer className="gradient-footer text-white py-5">
      <div className="container-fluid px-4">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-4">
            <img className='logo2' src={logo} alt="Life sector Logo" />
            <p className="opacity-75">
              Creating beautiful worship places for the serving Lord. Serving God with to the best of our Knowledge
            </p>
            <div className="d-flex gap-2 mt-4">

              {/* X */}
              <a href="#" className="social-icon">
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                  <path d="M18.244 2H21.5l-7.49 8.56L22 22h-6.828l-5.35-6.996L3.8 22H.5l8.02-9.165L2 2h6.828l4.836 6.32L18.244 2z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="social-icon">
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                  <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17.8 2.6 12 2.6 12 2.6h-.1s-5.8 0-8.6.3c-.4.1-1.3.1-2.1 1-.6.7-.8 2.3-.8 2.3S0 8.1 0 10v2c0 1.9.4 3.8.4 3.8s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.8.2 7.4.3 8.4.3 0 0 5.8 0 8.6-.3.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3S24 13.9 24 12v-2c0-1.9-.5-3.8-.5-3.8zM9.5 14.8V8.8l6 3-6 3z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="social-icon">
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 15c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm4.8-3.2c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="social-icon">
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.6v-2.9h2.6V9.4c0-2.6 1.5-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="footer-link">About Us</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Ministries</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Our Services</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Contact us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-lg-2 col-md-4">
            <h6 className="fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="footer-link">Podcats</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Sermons</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Calender</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4">
            <h6 className="fw-bold mb-3">Stay in touch</h6>
            <p className="opacity-75">Stay updated with our latest updates and events.</p>
            <div className="input-group mt-3">
              <input
                type="email"
                className="form-control newsletter-input"
                placeholder="Enter your email"
              />
              <button className="btn btn-light px-4" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="my-4 opacity-25" />

        {/* Copyright */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <small className="opacity-75">© 2025 Life Sector. All rights reserved.</small>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <a href="#" className="footer-link me-3"><small>Terms</small></a>
            <a href="#" className="footer-link me-3"><small>Privacy</small></a>
            <a href="#" className="footer-link"><small>Cookies</small></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Header;
