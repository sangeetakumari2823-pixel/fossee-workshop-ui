import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login functionality will connect to backend!');
  };

  return (
    <div style={styles.page}>
      {/* decorative dots */}
      <div style={styles.dotsOverlay} />
      <div style={styles.blobGold} />
      <div style={styles.blobPurple} />

      <div style={styles.card}>
        <div style={styles.iconBox}>🔐</div>
        <h2 style={styles.title}>Welcome back!</h2>
        <p style={styles.subtitle}>Login to your FOSSEE account</p>

        <div style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Username</label>
            <input
              type="text" name="username"
              value={form.username} onChange={handleChange}
              placeholder="Enter your username"
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input
              type="password" name="password"
              value={form.password} onChange={handleChange}
              placeholder="Enter your password"
              style={styles.input}
            />
          </div>

          <div style={styles.forgotRow}>
            <Link to="/forgot-password" style={styles.forgot}>Forgot password?</Link>
          </div>

          <button onClick={handleSubmit} style={styles.btn}>
            Login →
          </button>
        </div>

        <p style={styles.bottomText}>
          Don't have an account?{' '}
          <Link to="/register" style={styles.bottomLink}>Register here</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#FAF7FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    position: 'relative',
    overflow: 'hidden',
  },
  dotsOverlay: {
    position: 'absolute', inset: 0,
    backgroundImage: 'radial-gradient(circle, #9B7FD4 1.5px, transparent 1.5px)',
    backgroundSize: '24px 24px',
    opacity: 0.3,
  },
  blobGold: {
    position: 'absolute', top: '-40px', right: '-40px',
    width: '200px', height: '200px',
    background: '#FFD700',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
    opacity: 0.15,
  },
  blobPurple: {
    position: 'absolute', bottom: '-40px', left: '-40px',
    width: '180px', height: '180px',
    background: '#5B21B6',
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    opacity: 0.1,
  },
  card: {
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: '24px',
    padding: '40px',
    width: '100%',
    maxWidth: '420px',
    border: '1.5px solid #E8DAFF',
  },
  iconBox: {
    fontSize: '36px',
    textAlign: 'center',
    marginBottom: '12px',
  },
  title: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#1C0A4A',
    marginBottom: '6px',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '14px',
    color: '#4A2D8A',
    textAlign: 'center',
    marginBottom: '28px',
    fontWeight: '500',
  },
  form: { display: 'flex', flexDirection: 'column', gap: '18px' },
  field: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '13px', fontWeight: '700', color: '#1C0A4A' },
  input: {
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1.5px solid #E8DAFF',
    fontSize: '14px',
    outline: 'none',
    color: '#1C0A4A',
    backgroundColor: '#FAF7FF',
  },
  forgotRow: { textAlign: 'right', marginTop: '-8px' },
  forgot: { fontSize: '12px', color: '#5B21B6', fontWeight: '600' },
  btn: {
    backgroundColor: '#5B21B6',
    color: '#FFD700',
    padding: '14px',
    borderRadius: '12px',
    border: 'none',
    fontSize: '15px',
    fontWeight: '800',
    cursor: 'pointer',
  },
  bottomText: {
    textAlign: 'center',
    marginTop: '24px',
    fontSize: '13px',
    color: '#4A2D8A',
  },
  bottomLink: {
    color: '#5B21B6',
    fontWeight: '700',
  },
};

export default Login;