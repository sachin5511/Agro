import React from 'react';

const ShopByCategory = ({ image, alt, title, description,link }) => {
  return (
    <>
      <div className="flex flex-col  bg-white shadow-lg rounded-lg overflow-hidden min-w-[300px] max-w-[300px] md:w-1/3 lg:w-1/4 p-3">
        <img
          src={image}
          alt={alt}
          className="w-full h-40 object-cover rounded-md mb-2"
        />
        <div className="flex-grow">
          <h3 className="text-black-900 text-xl text-bold">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
          <button
  className="bg-green-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-green-700"
  onClick={() => {
    window.location.href = `${link}`;  
  }}
>
  Shop Now
</button>
        </div>
      </div>
    </>
  );
};

export default ShopByCategory;
