import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar glass-effect">
      <div className="navbar-brand">
        <Link to="home" smooth={true} duration={600} offset={-60} onClick={closeMenu}>
          <span className="logo-text">Deepak Kumar</span>
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        {["home", "about", "education", "projects", "contact"].map((item) => (
          <Link
            key={item}
            to={item}
            smooth={true}
            duration={600}
            offset={-60}
            onClick={closeMenu}
            className="nav-link"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  );
}



