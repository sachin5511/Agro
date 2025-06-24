import React, { useState, useEffect, useMemo, useContext } from 'react';
import Address from '../address/Address';
import PaymentOptions from '../payment/PaymentOptions ';
import { useNavigate } from 'react-router-dom';
import { UpdateCartContext } from '../../App';


const Checkout = () => {
  const navigate = useNavigate();
  const cartValue = useContext(UpdateCartContext);
  const [storedProduct, setStoredProduct] = useState([]);
  const [hide, setHide] = useState(true);
  const [total, setTotal] = useState(0);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [coupanShow, setCoupanShow] = useState();
  const [valid, setValid] = useState();
  const [openSection, setOpenSection] = useState(null);
  const [address, setAddress] = useState(null);
  const tax = storedProduct.length > 0 ? 10.0 : 0;
  const shippingCharge = total > 0 && total < 199 ? 40.0 : 0;

  const coupanText = ['newuser', 'welcome', 'flat10'];

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem('product')) || [];
    setStoredProduct(storedProduct);
  }, []);

  const applycouponHandler = () => {
    if (coupanText.includes(coupon.toLowerCase())) {
      setValid(true);
      setCoupanShow(true);
      setDiscount(total * 0.1);
      setCoupon('');
    } else {
      setCoupon('');
      setDiscount(0);
      setCoupanShow(true);
      setValid(false);
    }
  };

  const deliverAddress = (e) => {
    setAddress(e);
    toggleSection('payment');
  };
  useEffect(() => {
    const total = storedProduct.reduce((acc, item) => acc + item.price, 0);
    setTotal(total);
  }, [storedProduct]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const hideHandler = () => {
    hide ? setHide(false) : setHide(true);
  };

  const confirmPaymentHandler = (method) => {
    const existingOrders =
      JSON.parse(localStorage.getItem('orderSummary')) || [];

    let orderIdCounter = Number(localStorage.getItem('orderIdCounter')) || 1;
    const orderSummary = {
      id: orderIdCounter, // Auto-generated unique ID
      paymentMethod: method, // Payment Method
      address: address, // Address Object
      storedProduct: storedProduct, // Array of Objects
      total: total,
      tax: tax,
      discount: discount,
      shippingCharge: shippingCharge,
      finalAmount: (total + tax + shippingCharge - discount).toFixed(2),
    };
    localStorage.setItem('orderIdCounter', orderIdCounter + 1);

    // Add the new order summary to the existing list
    existingOrders.push(orderSummary);

    // Store the updated list in localStorage
    localStorage.setItem('orderSummary', JSON.stringify(existingOrders));

    localStorage.removeItem("product");
    localStorage.setItem('count', 1);
    cartValue()
    navigate('/')
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 flex flex-col items-center">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-6 mt-20">
        {/* Left Section - Payment Methods */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white">
            <button
              className="w-full text-left p-[30px] text-lg font-semibold  border-b focus:outline-none"
              onClick={hideHandler}
            >
              Order Summary
            </button>
            {hide ? (
              <div className="space-y-2 p-6">
                {storedProduct.map((item, index) => (
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
                    </div>
                  </div>
                ))}
                <button
                  className="border-1 border-gray-500 px-5 py-3 rounded-lg transition-transform duration-300 hover:scale-105 "
                  onClick={() => {
                    toggleSection('address');
                    setHide(false);
                  }}
                >
                  Add Address
                </button>
              </div>
            ) : null}
          </div>
          {['address', 'payment'].map((section) => (
            <div key={section} className="bg-white ">
              <button
                className="w-full text-left p-[30px] text-lg font-semibold  border-b focus:outline-none"
                onClick={() => {
                  toggleSection(section);
                  setHide(false);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              {openSection === section && (
                <div className="p-4 space-y-3">
                  {section === 'address' && (
                    <div>
                      <Address deliverAddress={deliverAddress} />
                    </div>
                  )}
                  {section === 'payment' && (
                    <>
                      {address ? (
                        <PaymentOptions
                          confirmPaymentHandler={confirmPaymentHandler}
                        />
                      ) : (
                        <span>Please add address</span>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Section - Order Summary */}
        <div className="w-full lg:w-80 bg-white py-10 px-3 rounded-lg shadow-md lg:fixed lg:top-30 lg:right-0 text-center">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4 flex flex-col items-center">
            <div className="w-full flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold">{total.toFixed(2)}</span>
            </div>
            <div className="w-full flex justify-between">
              <span>Shipping Estimate</span>
              <span className="font-bold">{shippingCharge.toFixed(2)}</span>
            </div>
            <div className="w-full flex justify-between">
              <span>Tax Estimate</span>
              <span className="font-bold">{tax.toFixed(2)}</span>
            </div>
            {coupanShow ? (
              valid ? (
                <div className="w-full">
                  <div className="w-full flex justify-between">
                    <span>Discount 10%</span>
                    <span>-{(total * 0.1).toFixed(2)}</span>
                  </div>
                  <button
                    className="mt-2 border border-gray-500 px-4 py-2"
                    onClick={() => setCoupanShow(false)}
                  >
                    Remove Coupon
                  </button>
                </div>
              ) : (
                <p className="text-red-500">Invalid Coupon</p>
              )
            ) : null}
            <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden w-72">
              <span className="bg-gray-200 px-4 py-2 text-gray-700 font-medium">
                Coupon
              </span>
              <input
                type="text"
                placeholder="Enter code"
                value={coupon}
                className="flex-1 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 "
                onChange={(e) => setCoupon(e.target.value)}
              />
            </div>

            <hr className="my-2 w-full" />
            <div className="w-full flex justify-between text-lg font-semibold">
              <span>Order Total</span>
              <span>
                {(total + tax + shippingCharge - discount).toFixed(2)}
              </span>
            </div>
            {coupon && (
              <button
                className="mt-2 border-1 border-gray-700 px-6 py-2 rounded-lg transition-transform duration-300 hover:scale-105"
                onClick={applycouponHandler}
              >
                Apply Coupon
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
