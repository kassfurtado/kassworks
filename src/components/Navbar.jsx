import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <Link to="/" className="logo">
          kass<span className="logo-dot">.</span>works
        </Link>

        <div className="nav-links">
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact" className="nav-contact">
            Get in Touch
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
