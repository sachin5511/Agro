import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';
import { use } from 'react';

const AgroNavbar = ({ cartItem, userProfile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItemval, setCartItemVal] = useState(0);
  const [userProfile1, setUserProfile1] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setCartItemVal(Number(localStorage.getItem('count')) || 0);
    const userProfileData = localStorage.getItem('userProfile');
    if (userProfileData) {
      setUserProfile1(true);
      const user = JSON.parse(userProfileData);
      setUserName(user);
    }
  }, [cartItem,userProfile]);

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
          onclick={() => handleDropdownHover(true)}
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
          {userProfile1 ? (
            <p></p>
          ) : (
            <Link to="/login">
              <FaUser className="icon" />
            </Link>
          )}
        </div>
        <div className="flex items-center justify-center py-1 space-x-2">
          <Link to="/cart" className="flex items-center space-x-1">
            <FaShoppingBag className="icon" />
            <span className="cart-count text-black">{cartItemval}</span>
          </Link>
        </div>
        {userProfile1 ? (
          <div
            className="nav-dropdown hover:bg-gray-200"
            onMouseEnter={() => handleDropdownHover(true)}
            onMouseLeave={() => handleDropdownHover(false)}
          >
            <div className="flex items-center space-x-2">
              <FaUser className="icon" />
              <span className="">{userName}</span>
              <IoMdArrowDropdown />
            </div>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="">Edit Profile</Link>
                <Link to="/about">Order History</Link>
                <button
                  className="text-start pl-4 text-black hover:text-green-500"
                  onClick={() => {
                    setUserProfile1(false);
                    localStorage.removeItem('userProfile');
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/signup" className="nav-button pr-3">
            Signup
          </Link>
        )}
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
