import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../scripts/Navbar.css';

const Navbar = ({ isLoginIn }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav>
            <NavLink to={'/'}>
                <div className="navbar-heading">
                    <h1>Symptom Checker AI</h1>
                </div>
            </NavLink>
            <div className="container">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="menuIcon"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={`bi bi-list ${menuOpen ? 'hidden' : ''}`}
                    viewBox="0 0 16 16"
                    onClick={toggleMenu}
                >
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="menucross"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={`bi bi-x-lg ${menuOpen ? '' : 'hidden'}`}
                    viewBox="0 0 16 16"
                    onClick={toggleMenu}
                >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>

                <ul id="navbar" className={menuOpen ? 'open' : ''}>
                    <li>   <NavLink to={'/'} onClick={closeMenu}>Home</NavLink>  </li>
                    {isLoginIn && (<li><NavLink to={'/adminstration'} onClick={closeMenu}>Prediction</NavLink></li>)}
                    {isLoginIn && (<li><NavLink to="/hospitals" onClick={closeMenu}>Hospitals</NavLink></li>)}
                    <li><NavLink to={'/about'} onClick={closeMenu}>About</NavLink></li>
                    {!isLoginIn && (<li><NavLink to="/register" onClick={closeMenu}>Register</NavLink></li>)}
                    {!isLoginIn && (<li><NavLink to="/login" onClick={closeMenu}>Login</NavLink></li>)}
                    {isLoginIn && (<li><NavLink to="/logout" onClick={closeMenu}>Logout</NavLink></li>)}
                    <li><NavLink to={'/contact'} onClick={closeMenu}>Contact Us</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
