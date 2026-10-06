import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="/" className="footer-logo">
        kass.works
      </Link>

      <p>Pet care • House sitting • London & Middlesex</p>

      <div className="footer-links">
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <p>Built by Kass Furtado.</p>
    </footer>
  );
}

export default Footer;