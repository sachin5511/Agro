// CategoryCard.js
import React from 'react';

const CategoryCard = ({ image, alt, title, description }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg w-200 md:w-200 flex flex-col">
      <img
        src={image}
        alt={alt}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h3 className="text-lg font-bold truncate ">{title}</h3>
      <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
    </div>
  );
};

export default CategoryCard;
