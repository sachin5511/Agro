import React, { useState, useEffect, useContext } from 'react';
import { UpdateCartContext } from '../../App';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const [storedProduct, setStoredProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const cartValue = useContext(UpdateCartContext);
  const tax = storedProduct.length > 0 ? +10.0 : 0;
  const shippingCharge = total > 0 && total < 199 ? 40.0 : 0;

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem('product')) || [];
    setStoredProduct(storedProduct);
  }, []);

  useEffect(() => {
    const total = storedProduct.reduce((acc, item) => acc + item.price, 0);
    setTotal(total);
  }, [storedProduct]);

  const deleteProduct = (index) => {
    const storedProduct = JSON.parse(localStorage.getItem('product')) || [];
    const updatedProducts = storedProduct.filter((_, i) => i !== index);
    setStoredProduct(updatedProducts);
    localStorage.setItem('product', JSON.stringify(updatedProducts));

    cartValue();
  };

  return (
    <div className=" p-2  border border-gray-300 rounded-md">
      <h1 className=" m-20 text-3xl text-center font-bold mb-6">
        Shopping Cart
      </h1>
      <div className="grid md:grid-cols-3 gap-10 p-2">
        <div className="md:col-span-2 space-y-4 h-80 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
          {storedProduct.length > 0 ? (
            storedProduct.map((item, index) => (
              <div
                key={index}
                className="flex items-center border p-2 rounded-lg bg-white"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="ml-10 flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-900 font-bold">
                    {item.price.toFixed(2)}
                  </p>
                  <p className="text-green-500 text-sm mt-2">✔ In stock</p>
                </div>
                <button
                  className="ml-4 text-gray-500 hover:text-red-500"
                  onClick={() => deleteProduct(index)}
                >
                  ✖
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-4">No data available</p>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold">{total}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping estimate</span>
              <span className="font-bold">{shippingCharge}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax estimate</span>
              <span className="font-bold">{tax}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-lg font-semibold">
              <span>Order total</span>
              <span>{total + tax + shippingCharge}</span>
            </div>
          </div>
          <div className='flex items-center justify-center'>
           <Link to='/checkout' className='w-full'>
           <button
              className="w-full text-black py-3 mt-4 text rounded-lg border-1 border-gray-500 px-5 py-2 rounded-lg transition-transform duration-300 hover:scale-105 "
            >
              Checkout
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
