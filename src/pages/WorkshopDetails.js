import React from 'react';
import { useParams, Link } from 'react-router-dom';

function WorkshopDetails() {
  const { id } = useParams();

  const workshops = {
    1: {
      title: 'Python Workshop',
      level: 'Beginner',
      duration: '2 days',
      seats: 30,
      category: 'Programming',
      instructor: 'Prof. Anil Kumar',
      description: `This workshop introduces students to Python programming language. 
      You will learn variables, loops, functions, file handling and basic data structures. 
      Hands-on coding sessions will help reinforce concepts learned.`,
      topics: [
        'Introduction to Python & Setup',
        'Variables, Data Types & Operators',
        'Control Flow: if/else, loops',
        'Functions and Modules',
        'File Handling',
        'Introduction to NumPy & Matplotlib',
      ],
      requirements: [
        'Basic computer knowledge',
        'Laptop with minimum 4GB RAM',
        'No prior programming experience needed',
      ],
    },
    2: {
      title: 'Scilab Workshop',
      level: 'Intermediate',
      duration: '3 days',
      seats: 25,
      category: 'Simulation',
      instructor: 'Prof. Meera Sharma',
      description: `Learn scientific computing using Scilab, a free alternative to MATLAB. 
      This workshop covers numerical methods, signal processing and simulation.`,
      topics: [
        'Introduction to Scilab',
        'Matrix Operations',
        'Plotting and Visualization',
        'Numerical Methods',
        'Signal Processing Basics',
        'Simulation Projects',
      ],
      requirements: [
        'Basic mathematics knowledge',
        'Laptop with Scilab installed',
        'Basic programming knowledge helpful',
      ],
    },
    3: {
      title: 'OpenFOAM Workshop',
      level: 'Advanced',
      duration: '5 days',
      seats: 20,
      category: 'Simulation',
      instructor: 'Prof. Rajesh Verma',
      description: `Deep dive into Computational Fluid Dynamics using OpenFOAM. 
      Learn to simulate real-world fluid flow problems using open source tools.`,
      topics: [
        'CFD Fundamentals',
        'OpenFOAM Installation & Setup',
        'Mesh Generation',
        'Boundary Conditions',
        'Running Simulations',
        'Post-processing Results',
      ],
      requirements: [
        'Knowledge of fluid mechanics',
        'Linux command line basics',
        'Engineering background preferred',
      ],
    },
  };

  const w = workshops[id] || workshops[1];

  const levelColor = { Beginner: '#2e7d32', Intermediate: '#e65100', Advanced: '#c62828' };

  return (
    <div style={styles.page}>
      {/* Back Button */}
      <Link to="/types" style={styles.backBtn}>← Back to Workshops</Link>

      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>{w.title}</h1>
          <p style={styles.instructor}>👨‍🏫 {w.instructor}</p>
        </div>
        <span style={{ ...styles.levelBadge, backgroundColor: levelColor[w.level] }}>
          {w.level}
        </span>
      </div>

      {/* Info Cards */}
      <div style={styles.infoRow}>
        {[
          { icon: '⏱', label: 'Duration', value: w.duration },
          { icon: '👥', label: 'Seats', value: w.seats },
          { icon: '📂', label: 'Category', value: w.category },
        ].map((info, i) => (
          <div key={i} style={styles.infoCard}>
            <span style={styles.infoIcon}>{info.icon}</span>
            <div>
              <p style={styles.infoLabel}>{info.label}</p>
              <p style={styles.infoValue}>{info.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.content}>
        {/* Description */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>About this Workshop</h2>
          <p style={styles.desc}>{w.description}</p>
        </div>

        {/* Topics */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Topics Covered</h2>
          <ul style={styles.list}>
            {w.topics.map((topic, i) => (
              <li key={i} style={styles.listItem}>
                <span style={styles.check}>✓</span> {topic}
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Requirements</h2>
          <ul style={styles.list}>
            {w.requirements.map((req, i) => (
              <li key={i} style={styles.listItem}>
                <span style={styles.dot}>•</span> {req}
              </li>
            ))}
          </ul>
        </div>

        {/* Register Button */}
        <div style={styles.registerBox}>
          <h3 style={styles.registerTitle}>Interested in this workshop?</h3>
          <p style={styles.registerText}>Register now to secure your seat</p>
          <Link to="/register" style={styles.registerBtn}>
            Register for this Workshop
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { maxWidth: '900px', margin: '0 auto', padding: '40px 24px' },
  backBtn: {
    display: 'inline-block', color: '#1a73e8',
    fontSize: '14px', marginBottom: '24px',
  },
  header: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '12px',
  },
  title: { fontSize: '30px', color: '#1a1a2e', marginBottom: '8px' },
  instructor: { fontSize: '15px', color: '#666' },
  levelBadge: {
    color: 'white', padding: '6px 16px',
    borderRadius: '20px', fontSize: '13px', fontWeight: 'bold',
  },
  infoRow: {
    display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px',
  },
  infoCard: {
    display: 'flex', alignItems: 'center', gap: '12px',
    backgroundColor: 'white', padding: '16px 20px',
    borderRadius: '10px', flex: '1', minWidth: '140px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
  },
  infoIcon: { fontSize: '24px' },
  infoLabel: { fontSize: '12px', color: '#888' },
  infoValue: { fontSize: '16px', fontWeight: 'bold', color: '#1a1a2e' },
  content: { display: 'flex', flexDirection: 'column', gap: '32px' },
  section: {
    backgroundColor: 'white', borderRadius: '12px',
    padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
  },
  sectionTitle: { fontSize: '20px', color: '#1a1a2e', marginBottom: '16px' },
  desc: { fontSize: '15px', color: '#555', lineHeight: '1.8' },
  list: { listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' },
  listItem: { fontSize: '15px', color: '#444', display: 'flex', alignItems: 'center', gap: '8px' },
  check: { color: '#1a73e8', fontWeight: 'bold' },
  dot: { color: '#1a73e8' },
  registerBox: {
    backgroundColor: '#1a73e8', borderRadius: '12px',
    padding: '32px', textAlign: 'center', color: 'white',
  },
  registerTitle: { fontSize: '22px', marginBottom: '8px' },
  registerText: { fontSize: '15px', opacity: 0.9, marginBottom: '20px' },
  registerBtn: {
    backgroundColor: 'white', color: '#1a73e8',
    padding: '12px 32px', borderRadius: '25px',
    fontWeight: 'bold', fontSize: '15px', display: 'inline-block',
  },
};

export default WorkshopDetails;