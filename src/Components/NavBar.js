import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import { useSelector } from 'react-redux';
import { FaUtensils, FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
    const { favourites } = useSelector((state) => state.recipe);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <FaUtensils style={{ marginRight: '8px', color: '#fff' }} />
                Recipe Finder
            </div>
            <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/favourite" onClick={() => setMenuOpen(false)}>
                    Favourites <span className="fav-count">({favourites.length})</span>
                </Link>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    );
}

export default NavBar;
