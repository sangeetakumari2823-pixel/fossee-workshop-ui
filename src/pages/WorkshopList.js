import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function WorkshopList() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const workshops = [
    { id: 1, title: 'Python', category: 'Programming', level: 'Beginner', duration: '2 days', seats: 30, desc: 'Learn Python programming from scratch with hands-on exercises.' },
    { id: 2, title: 'Scilab', category: 'Simulation', level: 'Intermediate', duration: '3 days', seats: 25, desc: 'Scientific computing and simulation using Scilab.' },
    { id: 3, title: 'OpenFOAM', category: 'Simulation', level: 'Advanced', duration: '5 days', seats: 20, desc: 'Computational fluid dynamics with OpenFOAM.' },
    { id: 4, title: 'QGIS', category: 'GIS', level: 'Beginner', duration: '2 days', seats: 35, desc: 'Geographic information systems using open source QGIS.' },
    { id: 5, title: 'Arduino', category: 'Hardware', level: 'Beginner', duration: '2 days', seats: 28, desc: 'Hands-on electronics and programming with Arduino.' },
    { id: 6, title: 'R Language', category: 'Programming', level: 'Intermediate', duration: '3 days', seats: 22, desc: 'Statistical computing and data analysis using R.' },
  ];

  const categories = ['All', 'Programming', 'Simulation', 'GIS', 'Hardware'];

  const filtered = workshops.filter(w => {
    const matchSearch = w.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'All' || w.category === filter;
    return matchSearch && matchFilter;
  });

  const levelColor = { Beginner: '#e6f4ea', Intermediate: '#fff3e0', Advanced: '#fce8e6' };
  const levelText = { Beginner: '#2e7d32', Intermediate: '#e65100', Advanced: '#c62828' };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>All Workshops</h1>
        <p style={styles.subtitle}>Explore free open-source workshops by FOSSEE, IIT Bombay</p>
      </div>

      {/* Search and Filter */}
      <div style={styles.controls}>
        <input
          type="text"
          placeholder="🔍 Search workshops..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />
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
      </div>

      {/* Workshop Cards */}
      <div style={styles.grid}>
        {filtered.length === 0 ? (
          <p style={styles.noResult}>No workshops found. Try a different search.</p>
        ) : (
          filtered.map(w => (
            <div key={w.id} style={styles.card}>
              <div style={styles.cardTop}>
                <h3 style={styles.cardTitle}>{w.title}</h3>
                <span style={{
                  ...styles.badge,
                  backgroundColor: levelColor[w.level],
                  color: levelText[w.level],
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
  );
}

const styles = {
  page: { maxWidth: '1100px', margin: '0 auto', padding: '40px 24px' },
  header: { textAlign: 'center', marginBottom: '40px' },
  title: { fontSize: '32px', color: '#1a1a2e', marginBottom: '8px' },
  subtitle: { fontSize: '16px', color: '#666' },
  controls: { marginBottom: '32px' },
  search: {
    width: '100%', padding: '12px 16px',
    borderRadius: '8px', border: '1px solid #ddd',
    fontSize: '15px', marginBottom: '16px', outline: 'none',
  },
  filters: { display: 'flex', gap: '10px', flexWrap: 'wrap' },
  filterBtn: {
    padding: '8px 18px', borderRadius: '20px',
    border: '1px solid #ddd', backgroundColor: 'white',
    cursor: 'pointer', fontSize: '14px', color: '#555',
  },
  filterActive: {
    backgroundColor: '#1a73e8', color: 'white', border: '1px solid #1a73e8',
  },
  grid: {
    display: 'flex', flexWrap: 'wrap', gap: '24px',
  },
  card: {
    backgroundColor: 'white', borderRadius: '12px',
    padding: '24px', flex: '1', minWidth: '280px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    display: 'flex', flexDirection: 'column', gap: '12px',
  },
  cardTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle: { fontSize: '18px', color: '#1a1a2e' },
  badge: { padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
  cardDesc: { fontSize: '14px', color: '#666', lineHeight: '1.6' },
  cardInfo: { display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13px', color: '#888' },
  cardBtn: {
    marginTop: 'auto', backgroundColor: '#1a73e8', color: 'white',
    padding: '10px 16px', borderRadius: '8px',
    textAlign: 'center', fontSize: '14px', fontWeight: '600',
  },
  noResult: { color: '#888', fontSize: '16px', textAlign: 'center', width: '100%' },
};

export default WorkshopList;
