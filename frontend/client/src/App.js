import React, { createContext, useEffect, useState } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './App.css'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Dashboard from './components/pages/Dashboard'
import Adminstration from './components/pages/Adminstration'
import PredictDisease from './components/pages/Predict_Desease'
import Home from './components/pages/Home'
import HospitalSearch from './components/pages/HospitalSearch'
import Login from './components/pages/Login'
import Logout from './components/pages/Logout'
import Register from './components/pages/Register'
import Footer from './components/section/Footer'
import Header from './components/section/Header'

const store = createContext();

const App = () => {
  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem('token');
    return storedToken !== null ? storedToken : null;
  });
  const [isloginIn, setLogin] = useState(false);

  useEffect(() => {
    if (!token) {
      <Navigate to='/login' />
    } else {
      localStorage.setItem('token', token);
      setLogin(true);
    }
  }, [token]);

  const handleLogout = () => {
    setToken(null);
    setLogin(false);
    localStorage.removeItem('token');
  };

  return (
    <store.Provider value={{ token, setToken, handleLogout }}>
      <Router>
        <Header token={token} isLoginIn={isloginIn} />
        <Routes>
          <Route path="/" element={<Home isLoginIn={isloginIn} />} />
          {isloginIn && <Route path="/dashboard" element={<Dashboard />} />}
          {isloginIn && <Route path="/adminstration" element={<Adminstration />} />}
          {isloginIn && <Route path="/predictDisease" element={<PredictDisease />} />}
          {isloginIn && <Route path="/hospitals" element={<HospitalSearch />} />}
          <Route path="/about" element={<About />} />
          {!isloginIn && <Route path="/login" element={<Login />} />}
          <Route path="/register" element={<Register />} />
          {isloginIn && <Route path="/logout" element={<Logout handleLogout={handleLogout} />} />}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer isLoginIn={isloginIn} />
      </Router>
    </store.Provider>
  )
}

export { store }

export default App