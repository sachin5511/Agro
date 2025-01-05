import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';

const AgroNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleDropdownHover = (open) => {
        setIsDropdownOpen(open);
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <h2>Agro</h2>
            </div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                
                {/* Shop Dropdown */}
                <div 
                    className="nav-dropdown" 
                    onMouseEnter={() => handleDropdownHover(true)} 
                    onMouseLeave={() => handleDropdownHover(false)}
                >
                    <span className="nav-link">Shop</span>
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            
                            <Link to="/shop/fruits">Fruits</Link>
                            <Link to="/shop/vegetables">Vegetables</Link>
                            <Link to="/shop/seeds">Seeds</Link>
                        </div>
                    )}
                </div>
                <div 
                    className="nav-dropdown" 
                    onMouseEnter={() => handleDropdownHover(true)} 
                    onMouseLeave={() => handleDropdownHover(false)}
                >
                    <span className="nav-link">Services</span>
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <Link to="/services/rental">Rental Services</Link>
                            <Link to="/services/specialist">Specialist Services</Link>
                        </div>
                    )}
                </div>
                <div className="icons">
                    <Link to="/login"><FaUser className="icon" /></Link>
                    <FaShoppingBag className="icon" />
                    
                </div>
                <Link to="/signup" className="nav-button">Signup</Link>
            </div>
            <div className="nav-toggle" onClick={toggleMenu}>
                <span className="burger"></span>
                <span className="burger"></span>
                <span className="burger"></span>
            </div>
        </nav>
    );
};

export default AgroNavbar;
