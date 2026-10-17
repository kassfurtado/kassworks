
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            kass<span className="logo-dot">.</span>works
          </Link>

          <p>
            Thoughtful care for pets and homes
            in London & Middlesex.
          </p>
        </div>

        <div className="footer-navigation">
          <h3>Explore</h3>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <a href="mailto:hello@kass.works">
            hello@kass.works
          </a>
          <p>London, Ontario</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} kass.works</span>
        <span>Designed & built by Kass Furtado</span>
      </div>
    </footer>
  );
}

export default Footer;
