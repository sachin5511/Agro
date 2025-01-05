import React from 'react';
import FeatureCard from '../../Component/FeatureCard';
import '../../styles/features.css'; // Add your CSS file for styling

const OurFeatures = () => {
  return (
    <div className="features-container">
      <h2>Our <span className="highlight">features</span></h2>
      <div className="features-grid">
        <FeatureCard 
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLghd4zDSn81ZHUT4dJ_NZtYCdBlnyc58gQ&s" 
          title="Rental Service" 
          description="Here, we provide equipments" 
        />
        <FeatureCard 
          imgSrc="https://images.unsplash.com/photo-1595246140625-573b715d11dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
          title="Fast Delivery" 
          description="All the organic products to your doorstep" 
        />
        <FeatureCard 
          imgSrc="https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
          title="Easy Payments" 
          description="Here, at farmBuddy payments made easy" 
        />
      </div>
    </div>
  );
};

export default OurFeatures;
