import React from 'react';
import { Link } from 'react-router-dom';

function ViewProfile() {
  const user = {
    name: 'Sangeeta Kumari',
    username: 'sangeetakumari2823',
    email: 'sangeeta@example.com',
    college: 'IIT Bombay',
    city: 'Mumbai',
    state: 'Maharashtra',
    joined: 'January 2024',
    role: 'Student',
  };

  const workshops = [
    { id: 1, title: 'Python Workshop', status: 'Completed', date: 'Feb 2024' },
    { id: 2, title: 'Scilab Workshop', status: 'Upcoming', date: 'May 2024' },
  ];

  const statusColor = {
    Completed: { bg: '#e6f4ea', text: '#2e7d32' },
    Upcoming: { bg: '#e8f0fe', text: '#1a73e8' },
    Cancelled: { bg: '#fce8e6', text: '#c62828' },
  };

  return (
    <div style={styles.page}>
      {/* Profile Header */}
      <div style={styles.profileCard}>
        <div style={styles.avatarCircle}>
          {user.name.charAt(0)}
        </div>
        <div style={styles.profileInfo}>
          <h1 style={styles.name}>{user.name}</h1>
          <p style={styles.username}>@{user.username}</p>
          <span style={styles.roleBadge}>{user.role}</span>
        </div>
        <Link to="/edit-profile" style={styles.editBtn}>
          ✏️ Edit Profile
        </Link>
      </div>

      <div style={styles.content}>
        {/* Personal Details */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Personal Information</h2>
          <div style={styles.detailsGrid}>
            {[
              { label: 'Email', value: user.email, icon: '📧' },
              { label: 'College', value: user.college, icon: '🏫' },
              { label: 'City', value: user.city, icon: '📍' },
              { label: 'State', value: user.state, icon: '🗺️' },
              { label: 'Member Since', value: user.joined, icon: '📅' },
            ].map((item, i) => (
              <div key={i} style={styles.detailItem}>
                <span style={styles.detailIcon}>{item.icon}</span>
                <div>
                  <p style={styles.detailLabel}>{item.label}</p>
                  <p style={styles.detailValue}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop History */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>My Workshops</h2>
          {workshops.length === 0 ? (
            <p style={styles.noWorkshops}>No workshops registered yet.</p>
          ) : (
            <div style={styles.workshopList}>
              {workshops.map((w) => (
                <div key={w.id} style={styles.workshopItem}>
                  <div>
                    <p style={styles.workshopTitle}>{w.title}</p>
                    <p style={styles.workshopDate}>📅 {w.date}</p>
                  </div>
                  <span style={{
                    ...styles.statusBadge,
                    backgroundColor: statusColor[w.status].bg,
                    color: statusColor[w.status].text,
                  }}>
                    {w.status}
                  </span>
                </div>
              ))}
            </div>
          )}
          <Link to="/types" style={styles.browseBtn}>
            Browse More Workshops
          </Link>
        </div>

        {/* Account Actions */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Account</h2>
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
  page: { maxWidth: '900px', margin: '0 auto', padding: '40px 24px' },
  profileCard: {
    backgroundColor: '#1a73e8',
    borderRadius: '16px', padding: '32px',
    display: 'flex', alignItems: 'center',
    gap: '24px', flexWrap: 'wrap',
    marginBottom: '24px', color: 'white',
  },
  avatarCircle: {
    width: '80px', height: '80px',
    borderRadius: '50%', backgroundColor: 'white',
    color: '#1a73e8', fontSize: '32px',
    fontWeight: 'bold', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
  },
  profileInfo: { flex: 1 },
  name: { fontSize: '26px', fontWeight: 'bold', marginBottom: '4px' },
  username: { fontSize: '14px', opacity: 0.85, marginBottom: '8px' },
  roleBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: '4px 12px', borderRadius: '12px', fontSize: '13px',
  },
  editBtn: {
    backgroundColor: 'white', color: '#1a73e8',
    padding: '10px 20px', borderRadius: '8px',
    fontWeight: 'bold', fontSize: '14px',
  },
  content: { display: 'flex', flexDirection: 'column', gap: '20px' },
  card: {
    backgroundColor: 'white', borderRadius: '12px',
    padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
  },
  cardTitle: { fontSize: '18px', color: '#1a1a2e', marginBottom: '20px', fontWeight: 'bold' },
  detailsGrid: { display: 'flex', flexWrap: 'wrap', gap: '20px' },
  detailItem: {
    display: 'flex', alignItems: 'center', gap: '12px',
    flex: '1', minWidth: '200px',
  },
  detailIcon: { fontSize: '22px' },
  detailLabel: { fontSize: '12px', color: '#888', marginBottom: '2px' },
  detailValue: { fontSize: '15px', color: '#1a1a2e', fontWeight: '500' },
  workshopList: { display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' },
  workshopItem: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', padding: '14px 16px',
    backgroundColor: '#f8f9fa', borderRadius: '8px',
  },
  workshopTitle: { fontSize: '15px', color: '#1a1a2e', fontWeight: '500' },
  workshopDate: { fontSize: '13px', color: '#888', marginTop: '4px' },
  statusBadge: {
    padding: '4px 12px', borderRadius: '12px',
    fontSize: '12px', fontWeight: '600',
  },
  noWorkshops: { color: '#888', fontSize: '14px', marginBottom: '16px' },
  browseBtn: {
    display: 'inline-block', color: '#1a73e8',
    fontSize: '14px', fontWeight: '600',
  },
  actionButtons: { display: 'flex', gap: '12px', flexWrap: 'wrap' },
  actionBtn: {
    padding: '10px 20px', borderRadius: '8px',
    border: '1px solid #ddd', fontSize: '14px',
    color: '#333', backgroundColor: 'white',
  },
  logoutBtn: {
    color: '#c62828', borderColor: '#fce8e6',
    backgroundColor: '#fce8e6',
  },
};

export default ViewProfile;