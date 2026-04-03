import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/">FOSSEE Workshops</Link>
      </div>

      {/* Hamburger for mobile */}
      <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul style={{ ...styles.navLinks, ...(menuOpen ? styles.navOpen : {}) }}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/types" onClick={() => setMenuOpen(false)}>Workshops</Link></li>
        <li><Link to="/propose" onClick={() => setMenuOpen(false)}>Propose</Link></li>
        <li><Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>
        <li><Link to="/login" onClick={() => setMenuOpen(false)} style={styles.loginBtn}>Login</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#1a73e8',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  },
  logo: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  hamburger: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    color: 'white',
  },
  loginBtn: {
    backgroundColor: 'white',
    color: '#1a73e8',
    padding: '8px 16px',
    borderRadius: '20px',
    fontWeight: 'bold',
  },
  navOpen: {
    display: 'flex',
  },
};

export default Navbar;