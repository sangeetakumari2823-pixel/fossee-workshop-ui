import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import WorkshopList from './pages/WorkshopList';
import WorkshopDetails from './pages/WorkshopDetails';
import ProposeWorkshop from './pages/ProposeWorkshop';
import ViewProfile from './pages/ViewProfile';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/types" element={<WorkshopList />} />
          <Route path="/details/:id" element={<WorkshopDetails />} />
          <Route path="/propose" element={<ProposeWorkshop />} />
          <Route path="/profile" element={<ViewProfile />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;