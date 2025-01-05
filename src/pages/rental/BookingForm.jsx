import React from 'react';
import '../../styles/bookingForm.css'; // Import the CSS file for styling

const BookingForm = () => {
    return (
        <div className="booking-container">
            <div className="booking-form">
                <h2>Book Your Equipment</h2>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter your name" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" />

                    <label htmlFor="contact">Contact:</label>
                    <input type="tel" id="contact" placeholder="Enter your contact number" />

                    <label htmlFor="address">Address:</label>
                    <textarea id="address" placeholder="Enter your address"></textarea>

                    <label htmlFor="equipment">Equipment Type:</label>
                    <select id="equipment">
                        <option value="tractor">Tractor</option>
                        <option value="harvester">Harvester</option>
                        <option value="plow">Plow</option>
                        <option value="seeder">Seeder</option>
                    </select>

                    <label htmlFor="date">Booking Date:</label>
                    <input type="date" id="date" />

                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="booking-image">
                <img src="https://via.placeholder.com/400" alt="Equipment" />
            </div>
        </div>
    );
};

export default BookingForm;
