import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const features = [
    { icon: '🎓', title: 'Expert Instructors', desc: 'Learn from IIT Bombay faculty and industry experts.', bg: '#FFF3CD' },
    { icon: '📱', title: 'Mobile Friendly', desc: 'Access workshops anytime, anywhere on any device.', bg: '#F0E6FF' },
    { icon: '🆓', title: 'Always Free', desc: 'All workshops are completely free for students.', bg: '#FFF0F0' },
    { icon: '📜', title: 'Certification', desc: 'Get an official certificate after completing workshops.', bg: '#E6FFF3' },
  ];

  const workshops = [
    { id: 1, title: 'Python', level: 'Beginner', duration: '2 days', seats: 30, icon: '🐍', bg: '#FFF3CD' },
    { id: 2, title: 'Scilab', level: 'Intermediate', duration: '3 days', seats: 25, icon: '📐', bg: '#F0E6FF' },
    { id: 3, title: 'OpenFOAM', level: 'Advanced', duration: '5 days', seats: 20, icon: '🌊', bg: '#FFF0F0' },
  ];

  const stats = [
    { value: '50K+', label: 'Students trained' },
    { value: '20+', label: 'Workshop types' },
    { value: '500+', label: 'Colleges reached' },
    { value: '100%', label: 'Free forever' },
  ];

  return (
    <div>
      {/* Hero */}
      <section style={styles.hero}>
        {/* dotted pattern overlay */}
        <div style={styles.dotsOverlay} />
        {/* blobs */}
        <div style={styles.blobGold} />
        <div style={styles.blobPurple} />
        {/* sparkles */}
        <span style={{ ...styles.sparkle, top: '30px', left: '60px', fontSize: '22px' }}>✦</span>
        <span style={{ ...styles.sparkle, top: '80px', right: '100px', fontSize: '14px', color: '#5B21B6' }}>✦</span>
        <span style={{ ...styles.sparkle, bottom: '40px', right: '50px', fontSize: '18px' }}>✦</span>

        <div style={styles.heroContent}>
          <div style={styles.heroBadge}>
            <span>🎉</span>
            <span style={styles.heroBadgeText}>500+ students joined this month!</span>
          </div>
          <h1 style={styles.heroTitle}>
            Your next big skill<br />
            <span style={styles.heroHighlight}>starts here.</span> ✨
          </h1>
          <p style={styles.heroSubtitle}>
            Free workshops by IIT Bombay. Learn Python, Scilab, and more — from real experts, at your own college.
          </p>
          <div style={styles.heroButtons}>
            <Link to="/types" style={styles.primaryBtn}>Explore Workshops 🚀</Link>
            <Link to="/register" style={styles.secondaryBtn}>Register Free</Link>
          </div>
          <p style={styles.heroTags}>✓ No fees &nbsp;·&nbsp; ✓ Certificate &nbsp;·&nbsp; ✓ Expert instructors</p>
        </div>
      </section>

      {/* Stats */}
      <section style={styles.statsBar}>
        <div style={styles.statsWave} />
        {stats.map((s, i) => (
          <div key={i} style={styles.statItem}>
            <p style={styles.statValue}>{s.value}</p>
            <p style={styles.statLabel}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* Features */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why FOSSEE Workshops?</h2>
        <p style={styles.sectionSubtitle}>Built for students, by experts who care</p>
        <div style={styles.featuresGrid}>
          {features.map((f, i) => (
            <div key={i} style={styles.featureCard}>
              <div style={{ ...styles.featureIconBox, backgroundColor: f.bg }}>
                {f.icon}
              </div>
              <h3 style={styles.featureTitle}>{f.title}</h3>
              <p style={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workshops */}
      <section style={styles.workshopsSection}>
        <div style={styles.stripedBg} />
        <div style={{ position: 'relative' }}>
          <div style={styles.workshopsHeader}>
            <div>
              <h2 style={styles.sectionTitle}>Popular workshops 🔥</h2>
              <p style={styles.sectionSubtitle}>Handpicked by our community</p>
            </div>
            <Link to="/types" style={styles.viewAllLink}>View all →</Link>
          </div>
          <div style={styles.workshopsGrid}>
            {workshops.map((w) => (
              <div key={w.id} style={styles.workshopCard}>
                <div style={{ ...styles.workshopIcon, backgroundColor: w.bg }}>{w.icon}</div>
                <div style={styles.workshopTop}>
                  <h3 style={styles.workshopTitle}>{w.title}</h3>
                  <span style={styles.levelBadge}>{w.level}</span>
                </div>
                <p style={styles.workshopInfo}>⏱ {w.duration} &nbsp;·&nbsp; 👥 {w.seats} seats</p>
                <Link to={`/details/${w.id}`} style={styles.joinBtn}>Join now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <div style={styles.ctaZigzag} />
        <p style={styles.ctaEmoji}>🏫</p>
        <h2 style={styles.ctaTitle}>Bring a workshop to your college!</h2>
        <p style={styles.ctaText}>It's completely free. Fill a quick form and our team will reach out within 3 days.</p>
        <Link to="/propose" style={styles.ctaBtn}>Propose a Workshop 🎯</Link>
      </section>
    </div>
  );
}

const styles = {
  hero: {
    position: 'relative',
    overflow: 'hidden',
    padding: '52px 28px 44px',
    backgroundColor: '#FAF7FF',
  },
  dotsOverlay: {
    position: 'absolute', inset: 0,
    backgroundImage: 'radial-gradient(circle, #9B7FD4 1.5px, transparent 1.5px)',
    backgroundSize: '24px 24px',
    opacity: 0.35,
  },
  blobGold: {
    position: 'absolute', top: '10px', right: '30px',
    width: '180px', height: '180px',
    background: '#FFD700',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
    opacity: 0.2,
  },
  blobPurple: {
    position: 'absolute', bottom: '-20px', left: '20px',
    width: '140px', height: '140px',
    background: '#5B21B6',
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    opacity: 0.12,
  },
  sparkle: {
    position: 'absolute', color: '#FFD700', opacity: 0.7,
  },
  heroContent: { position: 'relative', maxWidth: '600px' },
  heroBadge: {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    background: '#FFF3CD', border: '1.5px solid #FFD700',
    borderRadius: '50px', padding: '6px 14px', marginBottom: '20px',
  },
  heroBadgeText: { color: '#7A4F00', fontSize: '12px', fontWeight: '700' },
  heroTitle: {
    color: '#1C0A4A', fontSize: '40px', fontWeight: '800',
    lineHeight: 1.15, marginBottom: '16px',
  },
  heroHighlight: {
    color: '#3D0099',
    background: 'rgba(255,255,255,0.75)',
    padding: '2px 10px', borderRadius: '8px',
  },
  heroSubtitle: {
    color: '#2D1060', fontSize: '15px', lineHeight: 1.8,
    marginBottom: '28px', maxWidth: '420px', fontWeight: '500',
  },
  heroButtons: { display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '14px' },
  primaryBtn: {
    background: '#5B21B6', color: 'white',
    padding: '13px 28px', borderRadius: '14px',
    fontSize: '14px', fontWeight: '700',
  },
  secondaryBtn: {
    background: 'white', color: '#3D0099',
    border: '2px solid #C4A8FF',
    padding: '13px 24px', borderRadius: '14px',
    fontSize: '14px', fontWeight: '700',
  },
  heroTags: { color: '#2D1060', fontSize: '12px', fontWeight: '600' },

  statsBar: {
    background: '#5B21B6', padding: '20px 28px',
    display: 'flex', gap: '8px',
    justifyContent: 'space-around', flexWrap: 'wrap',
    position: 'relative',
  },
  statsWave: {
    position: 'absolute', top: '-1px', left: 0, right: 0,
    height: '30px', background: '#FAF7FF',
    clipPath: 'ellipse(55% 100% at 50% 0%)',
  },
  statItem: { textAlign: 'center', paddingTop: '16px' },
  statValue: { color: '#FFD700', fontSize: '22px', fontWeight: '800', marginBottom: '2px' },
  statLabel: { color: '#E0D4FF', fontSize: '11px', fontWeight: '500' },

  section: { padding: '52px 28px', backgroundColor: '#FAF7FF' },
  sectionTitle: { color: '#1C0A4A', fontSize: '22px', fontWeight: '800', marginBottom: '6px' },
  sectionSubtitle: { color: '#4A2D8A', fontSize: '13px', fontWeight: '500', marginBottom: '28px' },
  featuresGrid: {
    display: 'flex', flexWrap: 'wrap', gap: '16px',
  },
  featureCard: {
    background: 'white', borderRadius: '20px', padding: '24px',
    flex: '1', minWidth: '200px',
    border: '1.5px solid #E8DAFF',
  },
  featureIconBox: {
    width: '48px', height: '48px', borderRadius: '12px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '24px', marginBottom: '14px',
  },
  featureTitle: { color: '#1C0A4A', fontSize: '15px', fontWeight: '700', marginBottom: '6px' },
  featureDesc: { color: '#4A2D8A', fontSize: '13px', lineHeight: 1.6 },

  workshopsSection: { position: 'relative', padding: '36px 28px', background: '#F8F4FF', overflow: 'hidden' },
  stripedBg: {
    position: 'absolute', inset: 0,
    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(91,33,182,0.03) 40px, rgba(91,33,182,0.03) 80px)',
  },
  workshopsHeader: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: '20px',
  },
  viewAllLink: { color: '#3D0099', fontSize: '13px', fontWeight: '700', borderBottom: '2px solid #3D0099' },
  workshopsGrid: { display: 'flex', gap: '14px', flexWrap: 'wrap' },
  workshopCard: {
    background: 'white', borderRadius: '20px', padding: '20px',
    flex: '1', minWidth: '180px', border: '1.5px solid #E8DAFF',
    display: 'flex', flexDirection: 'column', gap: '8px',
  },
  workshopIcon: {
    width: '48px', height: '48px', borderRadius: '12px',
    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px',
  },
  workshopTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  workshopTitle: { color: '#1C0A4A', fontSize: '15px', fontWeight: '700' },
  levelBadge: {
    background: '#F0E6FF', color: '#3D0099',
    padding: '3px 10px', borderRadius: '50px',
    fontSize: '11px', fontWeight: '600',
  },
  workshopInfo: { color: '#4A2D8A', fontSize: '12px', fontWeight: '500' },
  joinBtn: {
    background: '#5B21B6', color: '#FFD700',
    textAlign: 'center', padding: '9px',
    borderRadius: '10px', fontSize: '13px', fontWeight: '700',
    marginTop: 'auto',
  },

  cta: {
    background: '#1C0A4A', padding: '52px 28px',
    textAlign: 'center', position: 'relative',
  },
  ctaZigzag: {
    position: 'absolute', top: '-1px', left: 0, right: 0, height: '24px',
    background: '#F8F4FF',
    clipPath: 'polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0)',
  },
  ctaEmoji: { fontSize: '36px', marginBottom: '12px' },
  ctaTitle: { color: '#FFD700', fontSize: '22px', fontWeight: '800', marginBottom: '10px' },
  ctaText: { color: '#E0D4FF', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px', fontWeight: '500' },
  ctaBtn: {
    background: '#FFD700', color: '#1C0A4A',
    padding: '13px 32px', borderRadius: '14px',
    fontSize: '14px', fontWeight: '800',
  },
};

export default Home;