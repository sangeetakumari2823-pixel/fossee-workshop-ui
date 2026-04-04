import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <div style={styles.logoIcon}>F</div>
        <Link to="/" style={styles.logoText}>FOSSEE</Link>
      </div>

      <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      <ul style={{ ...styles.navLinks, ...(menuOpen ? styles.navOpen : {}) }}>
        <li><Link to="/" style={styles.navLink} onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/types" style={styles.navLink} onClick={() => setMenuOpen(false)}>Workshops</Link></li>
        <li><Link to="/propose" style={styles.navLink} onClick={() => setMenuOpen(false)}>Propose</Link></li>
        <li><Link to="/profile" style={styles.navLink} onClick={() => setMenuOpen(false)}>Profile</Link></li>
        <li>
          <Link to="/login" style={styles.loginBtn} onClick={() => setMenuOpen(false)}>
            Login →
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: 'white',
    padding: '14px 28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '2px solid #F0E6FF',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoIcon: {
    width: '34px',
    height: '34px',
    background: '#5B21B6',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFD700',
    fontWeight: '800',
    fontSize: '17px',
  },
  logoText: {
    color: '#1C0A4A',
    fontSize: '16px',
    fontWeight: '700',
  },
  hamburger: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#1C0A4A',
    fontSize: '22px',
    cursor: 'pointer',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '22px',
    alignItems: 'center',
  },
  navLink: {
    color: '#3D2070',
    fontSize: '14px',
    fontWeight: '600',
  },
  loginBtn: {
    backgroundColor: '#5B21B6',
    color: 'white',
    padding: '8px 20px',
    borderRadius: '12px',
    fontSize: '13px',
    fontWeight: '700',
  },
  navOpen: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '64px',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: '20px',
    borderBottom: '2px solid #F0E6FF',
    gap: '16px',
  },
};

export default Navbar;