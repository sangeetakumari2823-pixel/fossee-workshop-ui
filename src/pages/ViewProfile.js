import React from 'react';
import { Link } from 'react-router-dom';

function ViewProfile() {
  const user = {
    name: 'Sangeeta Kumari',
    username: 'sangeeta.kumari.28.23',
    email: 'sangeeta@example.com',
    college: 'VIT Bhopal',
    city: 'Bhopal',
    state: 'Madha Pradesh',
    joined: 'april 2026',
    role: 'Student',
  };

  const workshops = [
    { id: 1, title: 'Python Workshop', status: 'Completed', date: 'Feb 2024', icon: '🐍' },
    { id: 2, title: 'Scilab Workshop', status: 'Upcoming', date: 'May 2024', icon: '📐' },
  ];

  const statusStyle = {
    Completed: { bg: '#E6FFF3', text: '#1A6B3C' },
    Upcoming: { bg: '#F0E6FF', text: '#3D0099' },
    Cancelled: { bg: '#FFF0F0', text: '#8B0000' },
  };

  return (
    <div style={styles.page}>
      <div style={styles.dotsOverlay} />
      <div style={styles.blobGold} />

      <div style={styles.container}>
        {/* Profile Header */}
        <div style={styles.profileCard}>
          <div style={styles.avatar}>{user.name.charAt(0)}</div>
          <div style={styles.profileInfo}>
            <h1 style={styles.name}>{user.name}</h1>
            <p style={styles.username}>@{user.username}</p>
            <span style={styles.roleBadge}>{user.role}</span>
          </div>
          <Link to="/edit-profile" style={styles.editBtn}>✏️ Edit Profile</Link>
        </div>

        {/* Personal Details */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>👤 Personal Information</h2>
          <div style={styles.detailsGrid}>
            {[
              { label: 'Email', value: user.email, icon: '📧' },
              { label: 'College', value: user.college, icon: '🏫' },
              { label: 'City', value: user.city, icon: '📍' },
              { label: 'State', value: user.state, icon: '🗺️' },
              { label: 'Member Since', value: user.joined, icon: '📅' },
            ].map((item, i) => (
              <div key={i} style={styles.detailItem}>
                <div style={styles.detailIconBox}>{item.icon}</div>
                <div>
                  <p style={styles.detailLabel}>{item.label}</p>
                  <p style={styles.detailValue}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshops */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🎯 My Workshops</h2>
          <div style={styles.workshopList}>
            {workshops.map((w) => (
              <div key={w.id} style={styles.workshopItem}>
                <div style={styles.workshopLeft}>
                  <div style={styles.workshopIconBox}>{w.icon}</div>
                  <div>
                    <p style={styles.workshopTitle}>{w.title}</p>
                    <p style={styles.workshopDate}>📅 {w.date}</p>
                  </div>
                </div>
                <span style={{
                  ...styles.statusBadge,
                  backgroundColor: statusStyle[w.status].bg,
                  color: statusStyle[w.status].text,
                }}>
                  {w.status}
                </span>
              </div>
            ))}
          </div>
          <Link to="/types" style={styles.browseBtn}>
            Browse More Workshops →
          </Link>
        </div>

        {/* Account Actions */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>⚙️ Account</h2>
          <div style={styles.actionButtons}>
            <Link to="/change-password" style={styles.actionBtn}>
              🔒 Change Password
            </Link>
            <Link to="/logout" style={{ ...styles.actionBtn, ...styles.logoutBtn }}>
              🚪 Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh', backgroundColor: '#FAF7FF',
    position: 'relative', overflow: 'hidden', padding: '40px 24px',
  },
  dotsOverlay: {
    position: 'absolute', inset: 0,
    backgroundImage: 'radial-gradient(circle, #9B7FD4 1.5px, transparent 1.5px)',
    backgroundSize: '24px 24px', opacity: 0.25,
  },
  blobGold: {
    position: 'absolute', top: '-40px', right: '-40px',
    width: '200px', height: '200px', background: '#FFD700',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', opacity: 0.15,
  },
  container: { position: 'relative', maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' },
  profileCard: {
    backgroundColor: '#5B21B6', borderRadius: '24px',
    padding: '32px', display: 'flex',
    alignItems: 'center', gap: '20px',
    flexWrap: 'wrap',
  },
  avatar: {
    width: '72px', height: '72px', borderRadius: '50%',
    backgroundColor: '#FFD700', color: '#1C0A4A',
    fontSize: '28px', fontWeight: '800',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  profileInfo: { flex: 1 },
  name: { fontSize: '22px', fontWeight: '800', color: 'white', marginBottom: '4px' },
  username: { fontSize: '13px', color: '#C4B0F0', marginBottom: '8px' },
  roleBadge: {
    backgroundColor: 'rgba(255,215,0,0.2)', color: '#FFD700',
    padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '700',
  },
  editBtn: {
    backgroundColor: '#FFD700', color: '#1C0A4A',
    padding: '10px 20px', borderRadius: '12px',
    fontWeight: '800', fontSize: '13px',
  },
  card: {
    backgroundColor: 'white', borderRadius: '20px',
    padding: '28px', border: '1.5px solid #E8DAFF',
  },
  cardTitle: { fontSize: '16px', fontWeight: '800', color: '#1C0A4A', marginBottom: '20px' },
  detailsGrid: { display: 'flex', flexWrap: 'wrap', gap: '16px' },
  detailItem: {
    display: 'flex', alignItems: 'center', gap: '12px',
    flex: '1', minWidth: '200px',
  },
  detailIconBox: {
    width: '40px', height: '40px', borderRadius: '10px',
    backgroundColor: '#F0E6FF', display: 'flex',
    alignItems: 'center', justifyContent: 'center', fontSize: '18px',
  },
  detailLabel: { fontSize: '11px', color: '#9080B8', marginBottom: '2px', fontWeight: '600' },
  detailValue: { fontSize: '14px', color: '#1C0A4A', fontWeight: '600' },
  workshopList: { display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' },
  workshopItem: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', padding: '14px 16px',
    backgroundColor: '#FAF7FF', borderRadius: '12px',
    border: '1.5px solid #F0E6FF',
  },
  workshopLeft: { display: 'flex', alignItems: 'center', gap: '12px' },
  workshopIconBox: {
    width: '36px', height: '36px', borderRadius: '10px',
    backgroundColor: '#F0E6FF', display: 'flex',
    alignItems: 'center', justifyContent: 'center', fontSize: '18px',
  },
  workshopTitle: { fontSize: '14px', color: '#1C0A4A', fontWeight: '700' },
  workshopDate: { fontSize: '12px', color: '#9080B8', marginTop: '2px' },
  statusBadge: {
    padding: '4px 12px', borderRadius: '50px',
    fontSize: '11px', fontWeight: '700',
  },
  browseBtn: { color: '#5B21B6', fontSize: '13px', fontWeight: '700', borderBottom: '2px solid #5B21B6' },
  actionButtons: { display: 'flex', gap: '12px', flexWrap: 'wrap' },
  actionBtn: {
    padding: '10px 20px', borderRadius: '12px',
    border: '1.5px solid #E8DAFF', fontSize: '13px',
    color: '#1C0A4A', backgroundColor: '#FAF7FF', fontWeight: '600',
  },
  logoutBtn: {
    color: '#8B0000', borderColor: '#FFE0E0', backgroundColor: '#FFF0F0',
  },
};

export default ViewProfile;