import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../../styles/leftlayout.css';

const Leftlayout = () => {
  const [hide, setHide] = useState(true);
  const [availabilityHide, setAvailabilityHide] = useState(true);
  const [priceHide, setPriceHide] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleHide = (setter) => setter((prev) => !prev);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;

    setSelectedFilters((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  const handleSubmit = () => {
    console.log('Selected Filters:', selectedFilters);
  };

  return (
    <div className="filter-container">
      <div className="filter-section">
        <div className="filter-option_hide">
          <span className="filter-title">Quantity</span>
          {hide ? (
            <FaMinus onClick={() => toggleHide(setHide)} />
          ) : (
            <FaPlus onClick={() => toggleHide(setHide)} />
          )}
        </div>
        {hide && (
          <div>
            <div className="filter-option">
              <input type="checkbox" id="fruits" />
              <label htmlFor="fruits">250gm</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="seeds" />
              <label htmlFor="seeds">500gm</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="vegetables" />
              <label htmlFor="vegetables">1kg</label>
            </div>
          </div>
        )}
      </div>

      <div className="filter-section">
        <div className="filter-option_hide">
          <span className="filter-title">Availability</span>
          {availabilityHide ? (
            <FaMinus onClick={() => toggleHide(setAvailabilityHide)} />
          ) : (
            <FaPlus onClick={() => toggleHide(setAvailabilityHide)} />
          )}
        </div>
        {availabilityHide && (
          <div>
            <div className="filter-option">
              <input
                type="checkbox"
                id="in-stock"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="in-stock">In Stock</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                id="out-of-stock"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="out-of-stock">Out of Stock</label>
            </div>
          </div>
        )}
      </div>

      <div className="filter-section">
        <div className="filter-option_hide">
          <span className="filter-title">Price</span>
          {priceHide ? (
            <FaMinus onClick={() => toggleHide(setPriceHide)} />
          ) : (
            <FaPlus onClick={() => toggleHide(setPriceHide)} />
          )}
        </div>
        {priceHide && (
          <div>
            <div className="filter-option">
              <input
                type="checkbox"
                id="100-200"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="100-200">100-200</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                id="200-300"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="200-300">200-300</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                id="200-300"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="200-300">200-300</label>
            </div>
          </div>
        )}
      </div>

      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Leftlayout;
