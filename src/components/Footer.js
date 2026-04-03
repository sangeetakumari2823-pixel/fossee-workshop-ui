import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3 style={styles.heading}>FOSSEE Workshops</h3>
          <p style={styles.text}>
            Free and Open Source Software for Education — IIT Bombay
          </p>
        </div>

        <div style={styles.section}>
          <h4 style={styles.subheading}>Quick Links</h4>
          <ul style={styles.list}>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/types" style={styles.link}>Workshops</Link></li>
            <li><Link to="/propose" style={styles.link}>Propose Workshop</Link></li>
            <li><Link to="/login" style={styles.link}>Login</Link></li>
          </ul>
        </div>

        <div style={styles.section}>
          <h4 style={styles.subheading}>Contact</h4>
          <p style={styles.text}>Email: contact@fossee.in</p>
          <p style={styles.text}>IIT Bombay, Mumbai - 400076</p>
        </div>
      </div>

      <div style={styles.bottom}>
        <p>© 2024 FOSSEE, IIT Bombay. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#1a1a2e',
    color: '#ccc',
    marginTop: '40px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '32px',
    padding: '40px 24px',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  section: {
    flex: '1',
    minWidth: '200px',
  },
  heading: {
    color: 'white',
    fontSize: '18px',
    marginBottom: '12px',
  },
  subheading: {
    color: 'white',
    fontSize: '15px',
    marginBottom: '12px',
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.8',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    color: '#aaa',
    fontSize: '14px',
    lineHeight: '2',
    textDecoration: 'none',
  },
  bottom: {
    textAlign: 'center',
    padding: '16px',
    borderTop: '1px solid #333',
    fontSize: '13px',
    color: '#888',
  },
};

export default Footer;