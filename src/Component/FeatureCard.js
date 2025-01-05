import React from 'react';
import '../styles/FeatureCard.css'; // Add your CSS file for styling

const FeatureCard = ({ imgSrc, title, description }) => {
  return (
    <div className="feature-card">
      <img src={imgSrc} alt={title} className="feature-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
