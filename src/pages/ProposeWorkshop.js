import React, { useState } from 'react';

function ProposeWorkshop() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    college: '', city: '', state: '',
    workshopType: '', expectedDate: '',
    participants: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={styles.page}>
        <div style={styles.dotsOverlay} />
        <div style={styles.blobGold} />
        <div style={styles.successCard}>
          <div style={styles.successIcon}>🎉</div>
          <h2 style={styles.successTitle}>Proposal Submitted!</h2>
          <p style={styles.successText}>
            Thank you! Our team will review your proposal and contact you within 3-5 working days.
          </p>
          <button onClick={() => setSubmitted(false)} style={styles.btn}>
            Submit Another Proposal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.dotsOverlay} />
      <div style={styles.blobGold} />
      <div style={styles.blobPurple} />

      <div style={styles.container}>
        <div style={styles.pageHeader}>
          <h1 style={styles.pageTitle}>Propose a Workshop 🏫</h1>
          <p style={styles.pageSubtitle}>
            Want to host a FOSSEE workshop at your college? Fill in the details below — it's completely free!
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.sectionTitle}>👤 Your Details</h3>
          <div style={styles.grid}>
            <div style={styles.field}>
              <label style={styles.label}>Full Name *</label>
              <input type="text" name="name" value={form.name}
                onChange={handleChange} placeholder="Your full name" style={styles.input} />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Email *</label>
              <input type="email" name="email" value={form.email}
                onChange={handleChange} placeholder="your@email.com" style={styles.input} />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Phone Number *</label>
              <input type="tel" name="phone" value={form.phone}
                onChange={handleChange} placeholder="Your phone number" style={styles.input} />
            </div>
          </div>

          <h3 style={{ ...styles.sectionTitle, marginTop: '28px' }}>🏫 College Details</h3>
          <div style={styles.grid}>
            <div style={styles.field}>
              <label style={styles.label}>College Name *</label>
              <input type="text" name="college" value={form.college}
                onChange={handleChange} placeholder="Your college name" style={styles.input} />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>City *</label>
              <input type="text" name="city" value={form.city}
                onChange={handleChange} placeholder="City" style={styles.input} />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>State *</label>
              <input type="text" name="state" value={form.state}
                onChange={handleChange} placeholder="State" style={styles.input} />
            </div>
          </div>

          <h3 style={{ ...styles.sectionTitle, marginTop: '28px' }}>🎯 Workshop Details</h3>
          <div style={styles.grid}>
            <div style={styles.field}>
              <label style={styles.label}>Workshop Type *</label>
              <select name="workshopType" value={form.workshopType}
                onChange={handleChange} style={styles.input}>
                <option value="">Select a workshop</option>
                <option value="python">Python</option>
                <option value="scilab">Scilab</option>
                <option value="openfoam">OpenFOAM</option>
                <option value="qgis">QGIS</option>
                <option value="arduino">Arduino</option>
                <option value="r">R Language</option>
              </select>
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Expected Date *</label>
              <input type="date" name="expectedDate" value={form.expectedDate}
                onChange={handleChange} style={styles.input} />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Expected Participants *</label>
              <input type="number" name="participants" value={form.participants}
                onChange={handleChange} placeholder="Number of students" style={styles.input} />
            </div>
          </div>

          <div style={{ ...styles.field, marginTop: '16px' }}>
            <label style={styles.label}>Additional Message</label>
            <textarea name="message" value={form.message} onChange={handleChange}
              placeholder="Any special requirements or questions..."
              style={{ ...styles.input, height: '100px', resize: 'vertical' }} />
          </div>

          <button onClick={handleSubmit} style={styles.btn}>
            Submit Proposal 🎯
          </button>
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
  blobPurple: {
    position: 'absolute', bottom: '-40px', left: '-40px',
    width: '180px', height: '180px', background: '#5B21B6',
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', opacity: 0.1,
  },
  container: { position: 'relative', maxWidth: '800px', margin: '0 auto' },
  pageHeader: { textAlign: 'center', marginBottom: '32px' },
  pageTitle: { fontSize: '30px', fontWeight: '800', color: '#1C0A4A', marginBottom: '8px' },
  pageSubtitle: { fontSize: '15px', color: '#4A2D8A', fontWeight: '500' },
  card: {
    backgroundColor: 'white', borderRadius: '24px',
    padding: '36px', border: '1.5px solid #E8DAFF',
  },
  sectionTitle: { fontSize: '15px', fontWeight: '800', color: '#5B21B6', marginBottom: '16px' },
  grid: { display: 'flex', flexWrap: 'wrap', gap: '16px' },
  field: { display: 'flex', flexDirection: 'column', gap: '6px', flex: '1', minWidth: '220px' },
  label: { fontSize: '13px', fontWeight: '700', color: '#1C0A4A' },
  input: {
    padding: '12px 14px', borderRadius: '12px',
    border: '1.5px solid #E8DAFF', fontSize: '14px',
    outline: 'none', width: '100%', color: '#1C0A4A',
    backgroundColor: '#FAF7FF',
  },
  btn: {
    marginTop: '24px', backgroundColor: '#5B21B6',
    color: '#FFD700', padding: '14px 32px',
    borderRadius: '12px', border: 'none',
    fontSize: '15px', fontWeight: '800',
    cursor: 'pointer', width: '100%',
  },
  successCard: {
    position: 'relative', backgroundColor: 'white',
    borderRadius: '24px', padding: '48px',
    textAlign: 'center', maxWidth: '440px',
    margin: '80px auto', border: '1.5px solid #E8DAFF',
  },
  successIcon: { fontSize: '56px', marginBottom: '16px' },
  successTitle: { fontSize: '24px', fontWeight: '800', color: '#1C0A4A', marginBottom: '12px' },
  successText: { fontSize: '14px', color: '#4A2D8A', lineHeight: '1.7', marginBottom: '24px', fontWeight: '500' },
};

export default ProposeWorkshop;