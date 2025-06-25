import "./Navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="home" smooth={true} duration={600} offset={-60}>Deepak Kumar</Link>
      </div>
      <div className="navbar-links">
        <button>
          <Link to="home" smooth={true} duration={600} offset={-60}>Home</Link>
        </button>
        <button>
          <Link to="about" smooth={true} duration={600} offset={-60}>About</Link>
        </button>
        <button>
          <Link to="education" smooth={true} duration={600} offset={-60}>Education</Link>
        </button>
        <button>
          <Link to="projects" smooth={true} duration={600} offset={-60}>Projects</Link>
        </button>
        <button>
          <Link to="contact" smooth={true} duration={600} offset={-60}>Contact</Link>
        </button>
      </div>
    </div>
  );
}

