import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          kass.works
        </Link>

        <div className="nav-links">
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;