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
      <div style={styles.successPage}>
        <div style={styles.successCard}>
          <div style={styles.successIcon}>✅</div>
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
      <div style={styles.header}>
        <h1 style={styles.title}>Propose a Workshop</h1>
        <p style={styles.subtitle}>
          Want to host a FOSSEE workshop at your college? Fill in the details below.
        </p>
      </div>

      <div style={styles.formCard}>
        {/* Personal Details */}
        <h3 style={styles.sectionTitle}>Your Details</h3>
        <div style={styles.grid}>
          <div style={styles.field}>
            <label style={styles.label}>Full Name *</label>
            <input
              type="text" name="name"
              value={form.name} onChange={handleChange}
              placeholder="Your full name" style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Email *</label>
            <input
              type="email" name="email"
              value={form.email} onChange={handleChange}
              placeholder="Your email" style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Phone Number *</label>
            <input
              type="tel" name="phone"
              value={form.phone} onChange={handleChange}
              placeholder="Your phone number" style={styles.input}
            />
          </div>
        </div>

        {/* College Details */}
        <h3 style={{ ...styles.sectionTitle, marginTop: '28px' }}>College Details</h3>
        <div style={styles.grid}>
          <div style={styles.field}>
            <label style={styles.label}>College Name *</label>
            <input
              type="text" name="college"
              value={form.college} onChange={handleChange}
              placeholder="Your college name" style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>City *</label>
            <input
              type="text" name="city"
              value={form.city} onChange={handleChange}
              placeholder="City" style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>State *</label>
            <input
              type="text" name="state"
              value={form.state} onChange={handleChange}
              placeholder="State" style={styles.input}
            />
          </div>
        </div>

        {/* Workshop Details */}
        <h3 style={{ ...styles.sectionTitle, marginTop: '28px' }}>Workshop Details</h3>
        <div style={styles.grid}>
          <div style={styles.field}>
            <label style={styles.label}>Workshop Type *</label>
            <select
              name="workshopType"
              value={form.workshopType}
              onChange={handleChange}
              style={styles.input}
            >
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
            <input
              type="date" name="expectedDate"
              value={form.expectedDate} onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Expected Participants *</label>
            <input
              type="number" name="participants"
              value={form.participants} onChange={handleChange}
              placeholder="Number of students" style={styles.input}
            />
          </div>
        </div>

        <div style={{ ...styles.field, marginTop: '16px' }}>
          <label style={styles.label}>Additional Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Any special requirements or questions..."
            style={{ ...styles.input, height: '100px', resize: 'vertical' }}
          />
        </div>

        <button onClick={handleSubmit} style={styles.btn}>
          Submit Proposal
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: { maxWidth: '800px', margin: '0 auto', padding: '40px 24px' },
  header: { textAlign: 'center', marginBottom: '32px' },
  title: { fontSize: '30px', color: '#1a1a2e', marginBottom: '8px' },
  subtitle: { fontSize: '15px', color: '#666' },
  formCard: {
    backgroundColor: 'white', borderRadius: '16px',
    padding: '36px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
  },
  sectionTitle: { fontSize: '17px', fontWeight: 'bold', color: '#1a73e8', marginBottom: '16px' },
  grid: { display: 'flex', flexWrap: 'wrap', gap: '16px' },
  field: { display: 'flex', flexDirection: 'column', gap: '6px', flex: '1', minWidth: '220px' },
  label: { fontSize: '14px', fontWeight: '600', color: '#333' },
  input: {
    padding: '12px 14px', borderRadius: '8px',
    border: '1px solid #ddd', fontSize: '14px', outline: 'none', width: '100%',
  },
  btn: {
    marginTop: '24px', backgroundColor: '#1a73e8',
    color: 'white', padding: '14px 32px',
    borderRadius: '8px', border: 'none',
    fontSize: '16px', fontWeight: 'bold',
    cursor: 'pointer', width: '100%',
  },
  successPage: {
    minHeight: '80vh', display: 'flex',
    alignItems: 'center', justifyContent: 'center', padding: '24px',
  },
  successCard: {
    backgroundColor: 'white', borderRadius: '16px',
    padding: '48px', textAlign: 'center',
    maxWidth: '440px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
  },
  successIcon: { fontSize: '56px', marginBottom: '16px' },
  successTitle: { fontSize: '24px', color: '#1a1a2e', marginBottom: '12px' },
  successText: { fontSize: '15px', color: '#666', lineHeight: '1.7', marginBottom: '24px' },
};

export default ProposeWorkshop;