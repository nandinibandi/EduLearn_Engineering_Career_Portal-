import { useState } from "react";
import { Link } from "react-router-dom";

// Props: user (null if logged out, object if logged in)
function Navbar({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        🎓 EduLearn
      </Link>

      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={menuOpen ? "nav-links open" : "nav-links"}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/careers" onClick={closeMenu}>Careers</Link>
        <Link to="/jobs" onClick={closeMenu}>Jobs</Link>
        <Link to="/interview" onClick={closeMenu}>Interview</Link>

        {user ? (
          <Link to="/profile" onClick={closeMenu}>Profile</Link>
        ) : (
          <>
            <Link to="/login" onClick={closeMenu}>Login</Link>
            <Link to="/register" className="nav-register" onClick={closeMenu}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
