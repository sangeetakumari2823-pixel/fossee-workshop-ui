import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    username: '', password: '', confirm: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert('Passwords do not match!');
      return;
    }
    alert('Registration will connect to backend!');
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>Join FOSSEE Workshops for free</p>

        <div style={styles.form}>
          <div style={styles.row}>
            <div style={styles.field}>
              <label style={styles.label}>First Name</label>
              <input
                type="text" name="firstName"
                value={form.firstName} onChange={handleChange}
                placeholder="First name" style={styles.input}
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Last Name</label>
              <input
                type="text" name="lastName"
                value={form.lastName} onChange={handleChange}
                placeholder="Last name" style={styles.input}
              />
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Email</label>
            <input
              type="email" name="email"
              value={form.email} onChange={handleChange}
              placeholder="Enter your email" style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Username</label>
            <input
              type="text" name="username"
              value={form.username} onChange={handleChange}
              placeholder="Choose a username" style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input
              type="password" name="password"
              value={form.password} onChange={handleChange}
              placeholder="Create a password" style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Confirm Password</label>
            <input
              type="password" name="confirm"
              value={form.confirm} onChange={handleChange}
              placeholder="Repeat your password" style={styles.input}
            />
          </div>

          <button onClick={handleSubmit} style={styles.btn}>
            Create Account
          </button>
        </div>

        <p style={styles.loginText}>
          Already have an account?{' '}
          <Link to="/login" style={styles.loginLink}>Login here</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh', backgroundColor: '#f0f4ff',
    display: 'flex', alignItems: 'center',
    justifyContent: 'center', padding: '24px',
  },
  card: {
    backgroundColor: 'white', borderRadius: '16px',
    padding: '40px', width: '100%', maxWidth: '480px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '26px', fontWeight: 'bold',
    color: '#1a1a2e', marginBottom: '8px', textAlign: 'center',
  },
  subtitle: {
    fontSize: '14px', color: '#666',
    textAlign: 'center', marginBottom: '32px',
  },
  form: { display: 'flex', flexDirection: 'column', gap: '18px' },
  row: { display: 'flex', gap: '12px', flexWrap: 'wrap' },
  field: { display: 'flex', flexDirection: 'column', gap: '6px', flex: 1, minWidth: '140px' },
  label: { fontSize: '14px', fontWeight: '600', color: '#333' },
  input: {
    padding: '12px 16px', borderRadius: '8px',
    border: '1px solid #ddd', fontSize: '15px', outline: 'none',
  },
  btn: {
    backgroundColor: '#1a73e8', color: 'white',
    padding: '14px', borderRadius: '8px', border: 'none',
    fontSize: '16px', fontWeight: 'bold', cursor: 'pointer',
  },
  loginText: { textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#666' },
  loginLink: { color: '#1a73e8', fontWeight: '600' },
};

export default Register;