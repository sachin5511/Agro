// ProductCard.js
import React, { useContext, useState } from 'react';
import '../../styles/fruitsRl.css';
import { CartContext } from '../../App';

const ProductCard = ({ product }) => {
  const [showDialog, setShowDialog] = useState(false);
  const cartItemData = useContext(CartContext);

  const addCart = () => {
    const storedProduct = JSON.parse(localStorage.getItem('product')) || [];
    const updatedProduct = [...storedProduct, product];
    localStorage.setItem('product', JSON.stringify(updatedProduct));
    cartItemData();
    setShowDialog(true);

    // Auto-hide the dialog after 2 seconds
    setTimeout(() => {
      setShowDialog(false);
    }, 1000);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">Rs. {product.price}</p>
      <button
        className="border-1 border-gray-700 px-4 py-2 rounded-md transition-transform duration-600 hover:scale-105 hover:text-orange-500"
        onClick={addCart}
      >
        Add to cart
      </button>
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold text-green-600">
              Item added successfully!
            </p>
            <button
              className="mt-3 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
              onClick={() => setShowDialog(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
