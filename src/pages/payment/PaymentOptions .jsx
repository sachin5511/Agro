import React from "react";
import { useState } from "react";
import {
  FaCreditCard,
  FaWallet,
  FaUniversity,
  FaMoneyBillWave,
  FaQrcode,
} from "react-icons/fa";
import { SiGooglepay, SiPhonepe } from "react-icons/si";

const paymentMethods = [
  {
    name: "UPI",
    icon: <FaQrcode />,
    subOptions: [
      { name: "Google Pay", icon: <SiGooglepay /> },
      { name: "PhonePe", icon: <SiPhonepe /> },
    ],
  },
  {
    name: "Card",
    icon: <FaCreditCard />,
    subOptions: [
      { name: "Visa", icon: <FaCreditCard /> },
      { name: "MasterCard", icon: <FaCreditCard /> },
    ],
  },
  { name: "Wallet", icon: <FaWallet /> },
  { name: "NetBanking", icon: <FaUniversity /> },
  { name: "COD", icon: <FaMoneyBillWave /> },
];

const PaymentOptions = ({ confirmPaymentHandler,}) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const confirmOrderhandler = () => {
    setShowDialog(true);
    setTimeout(() => {
      confirmPaymentHandler(selectedMethod);
    }, 5000); // 5000ms = 5 seconds
    
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-4">
        {paymentMethods.map((method, index) => (
          <div
            key={index}
            onClick={() => setSelectedMethod(method.name)}
            className={`flex items-center gap-4 p-3 border border-gray-500 rounded-lg cursor-pointer transition-all duration-300 ${
              selectedMethod === method.name ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              checked={selectedMethod === method.name}
              onChange={() => setSelectedMethod(method.name)}
              className="hidden peer"
            />
            <div className="w-5 h-5 border-2 border-gray-500 rounded-full flex items-center justify-center peer-checked:bg-blue-500 transition-all">
              <div className="w-2.5 h-2.5 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
            </div>
            <div className="flex items-center gap-2">
              {method.icon}
              <span className="font-medium">{method.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Confirm Button - Appears only when a method is selected */}
      {selectedMethod && (
        <div className="flex justify-center">
           <button
          className=" w-50 mt-4 border-1 border-gray-700 text-black px-3 py-3 rounded-lg transition-transform duration-300 hover:scale-105"  
          onClick={confirmOrderhandler}
        >
          Confirm order
        </button>
        </div>
      )}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold text-green-600">
              Thank You For Order
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

export default PaymentOptions;
