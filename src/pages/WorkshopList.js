import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function WorkshopList() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const workshops = [
    { id: 1, title: 'Python', category: 'Programming', level: 'Beginner', duration: '2 days', seats: 30, desc: 'Learn Python programming from scratch with hands-on exercises.', icon: '🐍', bg: '#FFF3CD' },
    { id: 2, title: 'Scilab', category: 'Simulation', level: 'Intermediate', duration: '3 days', seats: 25, desc: 'Scientific computing and simulation using Scilab.', icon: '📐', bg: '#F0E6FF' },
    { id: 3, title: 'OpenFOAM', category: 'Simulation', level: 'Advanced', duration: '5 days', seats: 20, desc: 'Computational fluid dynamics with OpenFOAM.', icon: '🌊', bg: '#E6F7FF' },
    { id: 4, title: 'QGIS', category: 'GIS', level: 'Beginner', duration: '2 days', seats: 35, desc: 'Geographic information systems using open source QGIS.', icon: '🗺️', bg: '#E6FFF3' },
    { id: 5, title: 'Arduino', category: 'Hardware', level: 'Beginner', duration: '2 days', seats: 28, desc: 'Hands-on electronics and programming with Arduino.', icon: '⚡', bg: '#FFF0F0' },
    { id: 6, title: 'R Language', category: 'Programming', level: 'Intermediate', duration: '3 days', seats: 22, desc: 'Statistical computing and data analysis using R.', icon: '📊', bg: '#FFF3CD' },
  ];

  const categories = ['All', 'Programming', 'Simulation', 'GIS', 'Hardware'];

  const levelColor = {
    Beginner: { bg: '#E6FFF3', text: '#1A6B3C' },
    Intermediate: { bg: '#FFF3CD', text: '#7A4F00' },
    Advanced: { bg: '#F0E6FF', text: '#3D0099' },
  };

  const filtered = workshops.filter(w => {
    const matchSearch = w.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'All' || w.category === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.dotsOverlay} />
        <div style={styles.blobGold} />
        <span style={styles.sparkle}>✦</span>
        <span style={{ ...styles.sparkle, right: '60px', top: '20px', fontSize: '14px', color: '#5B21B6' }}>✦</span>
        <div style={{ position: 'relative' }}>
          <h1 style={styles.title}>All Workshops 🎯</h1>
          <p style={styles.subtitle}>Explore free open-source workshops by FOSSEE, IIT Bombay</p>
        </div>
      </div>

      <div style={styles.body}>
        {/* Search */}
        <input
          type="text"
          placeholder="🔍  Search workshops..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />

        {/* Filter buttons */}
        <div style={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                ...styles.filterBtn,
                ...(filter === cat ? styles.filterActive : {}),
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div style={styles.grid}>
          {filtered.length === 0 ? (
            <div style={styles.noResult}>
              <p style={{ fontSize: '32px' }}>🔍</p>
              <p style={{ color: '#4A2D8A', fontWeight: '600' }}>No workshops found.</p>
              <p style={{ color: '#9080B8', fontSize: '13px' }}>Try a different search or filter.</p>
            </div>
          ) : (
            filtered.map(w => (
              <div key={w.id} style={styles.card}>
                <div style={{ ...styles.cardIcon, backgroundColor: w.bg }}>{w.icon}</div>
                <div style={styles.cardTop}>
                  <h3 style={styles.cardTitle}>{w.title}</h3>
                  <span style={{
                    ...styles.badge,
                    backgroundColor: levelColor[w.level].bg,
                    color: levelColor[w.level].text,
                  }}>
                    {w.level}
                  </span>
                </div>
                <p style={styles.cardDesc}>{w.desc}</p>
                <div style={styles.cardInfo}>
                  <span>⏱ {w.duration}</span>
                  <span>👥 {w.seats} seats</span>
                  <span>📂 {w.category}</span>
                </div>
                <Link to={`/details/${w.id}`} style={styles.cardBtn}>
                  View Details →
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { backgroundColor: '#FAF7FF', minHeight: '100vh' },
  header: {
    position: 'relative', overflow: 'hidden',
    backgroundColor: '#FAF7FF',
    padding: '48px 28px 36px',
    borderBottom: '2px solid #F0E6FF',
  },
  dotsOverlay: {
    position: 'absolute', inset: 0,
    backgroundImage: 'radial-gradient(circle, #9B7FD4 1.5px, transparent 1.5px)',
    backgroundSize: '24px 24px', opacity: 0.3,
  },
  blobGold: {
    position: 'absolute', top: '-30px', right: '-30px',
    width: '160px', height: '160px', background: '#FFD700',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', opacity: 0.18,
  },
  sparkle: {
    position: 'absolute', bottom: '20px', left: '40px',
    color: '#FFD700', fontSize: '20px', opacity: 0.7,
  },
  title: { color: '#1C0A4A', fontSize: '32px', fontWeight: '800', marginBottom: '8px' },
  subtitle: { color: '#4A2D8A', fontSize: '15px', fontWeight: '500' },
  body: { padding: '32px 28px', maxWidth: '1100px', margin: '0 auto' },
  search: {
    width: '100%', padding: '14px 18px',
    borderRadius: '14px', border: '1.5px solid #E8DAFF',
    fontSize: '14px', marginBottom: '16px',
    outline: 'none', backgroundColor: 'white',
    color: '#1C0A4A',
  },
  filters: { display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' },
  filterBtn: {
    padding: '8px 18px', borderRadius: '50px',
    border: '1.5px solid #E8DAFF', backgroundColor: 'white',
    cursor: 'pointer', fontSize: '13px',
    color: '#4A2D8A', fontWeight: '600',
  },
  filterActive: {
    backgroundColor: '#5B21B6', color: '#FFD700',
    border: '1.5px solid #5B21B6',
  },
  grid: { display: 'flex', flexWrap: 'wrap', gap: '20px' },
  card: {
    backgroundColor: 'white', borderRadius: '20px',
    padding: '22px', flex: '1', minWidth: '260px',
    border: '1.5px solid #E8DAFF',
    display: 'flex', flexDirection: 'column', gap: '10px',
  },
  cardIcon: {
    width: '48px', height: '48px', borderRadius: '12px',
    display: 'flex', alignItems: 'center',
    justifyContent: 'center', fontSize: '24px',
  },
  cardTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle: { fontSize: '17px', color: '#1C0A4A', fontWeight: '700' },
  badge: { padding: '4px 10px', borderRadius: '50px', fontSize: '11px', fontWeight: '700' },
  cardDesc: { fontSize: '13px', color: '#4A2D8A', lineHeight: '1.6', fontWeight: '500' },
  cardInfo: {
    display: 'flex', gap: '12px', flexWrap: 'wrap',
    fontSize: '12px', color: '#9080B8', fontWeight: '500',
  },
  cardBtn: {
    marginTop: 'auto', backgroundColor: '#5B21B6',
    color: '#FFD700', padding: '10px 16px',
    borderRadius: '10px', textAlign: 'center',
    fontSize: '13px', fontWeight: '700',
  },
  noResult: {
    textAlign: 'center', padding: '48px',
    width: '100%', display: 'flex',
    flexDirection: 'column', alignItems: 'center', gap: '8px',
  },
};

export default WorkshopList;