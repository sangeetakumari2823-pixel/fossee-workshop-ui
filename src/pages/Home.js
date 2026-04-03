import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const features = [
    { icon: '🎓', title: 'Expert Instructors', desc: 'Learn from IIT Bombay faculty and industry experts.' },
    { icon: '📱', title: 'Mobile Friendly', desc: 'Access workshops anytime, anywhere on any device.' },
    { icon: '🆓', title: 'Free & Open Source', desc: 'All workshops are free for students and educators.' },
    { icon: '📜', title: 'Certification', desc: 'Get certified after successfully completing workshops.' },
  ];

  const workshops = [
    { id: 1, title: 'Python', level: 'Beginner', duration: '2 days', seats: 30 },
    { id: 2, title: 'Scilab', level: 'Intermediate', duration: '3 days', seats: 25 },
    { id: 3, title: 'OpenFOAM', level: 'Advanced', duration: '5 days', seats: 20 },
  ];

  return (
    <div>
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Learn. Grow. Innovate.</h1>
          <p style={styles.heroSubtitle}>
            Join thousands of students in free FOSSEE workshops powered by IIT Bombay
          </p>
          <div style={styles.heroButtons}>
            <Link to="/types" style={styles.primaryBtn}>Browse Workshops</Link>
            <Link to="/register" style={styles.secondaryBtn}>Register Free</Link>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why FOSSEE Workshops?</h2>
        <div style={styles.featuresGrid}>
          {features.map((f, i) => (
            <div key={i} style={styles.featureCard}>
              <div style={styles.featureIcon}>{f.icon}</div>
              <h3 style={styles.featureTitle}>{f.title}</h3>
              <p style={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...styles.section, backgroundColor: '#f0f4ff' }}>
        <h2 style={styles.sectionTitle}>Popular Workshops</h2>
        <div style={styles.workshopsGrid}>
          {workshops.map((w) => (
            <div key={w.id} style={styles.workshopCard}>
              <div style={styles.workshopHeader}>
                <h3 style={styles.workshopTitle}>{w.title}</h3>
                <span style={styles.levelBadge}>{w.level}</span>
              </div>
              <p style={styles.workshopInfo}>⏱ Duration: {w.duration}</p>
              <p style={styles.workshopInfo}>👥 Seats: {w.seats}</p>
              <Link to={`/details/${w.id}`} style={styles.workshopBtn}>View Details</Link>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link to="/types" style={styles.primaryBtn}>View All Workshops</Link>
        </div>
      </section>

      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Ready to host a workshop?</h2>
        <p style={styles.ctaText}>Propose a workshop at your college today</p>
        <Link to="/propose" style={styles.ctaBtn}>Propose a Workshop</Link>
      </section>
    </div>
  );
}

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
    color: 'white', padding: '80px 24px', textAlign: 'center',
  },
  heroContent: { maxWidth: '700px', margin: '0 auto' },
  heroTitle: { fontSize: '42px', fontWeight: 'bold', marginBottom: '16px' },
  heroSubtitle: { fontSize: '18px', marginBottom: '32px', opacity: 0.9 },
  heroButtons: { display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' },
  primaryBtn: {
    backgroundColor: 'white', color: '#1a73e8',
    padding: '12px 28px', borderRadius: '25px', fontWeight: 'bold', fontSize: '15px',
  },
  secondaryBtn: {
    backgroundColor: 'transparent', color: 'white',
    padding: '12px 28px', borderRadius: '25px',
    fontWeight: 'bold', fontSize: '15px', border: '2px solid white',
  },
  section: { padding: '60px 24px' },
  sectionTitle: { textAlign: 'center', fontSize: '28px', marginBottom: '40px', color: '#1a1a2e' },
  featuresGrid: { display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', maxWidth: '1100px', margin: '0 auto' },
  featureCard: {
    backgroundColor: 'white', borderRadius: '12px', padding: '28px',
    flex: '1', minWidth: '220px', maxWidth: '260px', textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },
  featureIcon: { fontSize: '36px', marginBottom: '12px' },
  featureTitle: { fontSize: '17px', marginBottom: '8px', color: '#1a1a2e' },
  featureDesc: { fontSize: '14px', color: '#666', lineHeight: '1.6' },
  workshopsGrid: { display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', maxWidth: '1100px', margin: '0 auto' },
  workshopCard: {
    backgroundColor: 'white', borderRadius: '12px', padding: '24px',
    flex: '1', minWidth: '240px', maxWidth: '320px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },
  workshopHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' },
  workshopTitle: { fontSize: '18px', color: '#1a1a2e' },
  levelBadge: { backgroundColor: '#e8f0fe', color: '#1a73e8', padding: '4px 10px', borderRadius: '12px', fontSize: '12px' },
  workshopInfo: { fontSize: '14px', color: '#666', marginBottom: '8px' },
  workshopBtn: {
    display: 'block', marginTop: '16px', backgroundColor: '#1a73e8', color: 'white',
    padding: '10px', borderRadius: '8px', textAlign: 'center', fontSize: '14px',
  },
  cta: { backgroundColor: '#1a1a2e', color: 'white', padding: '60px 24px', textAlign: 'center' },
  ctaTitle: { fontSize: '28px', marginBottom: '12px' },
  ctaText: { fontSize: '16px', marginBottom: '28px', opacity: 0.8 },
  ctaBtn: {
    backgroundColor: '#1a73e8', color: 'white',
    padding: '14px 32px', borderRadius: '25px', fontWeight: 'bold', fontSize: '15px',
  },
};

export default Home;