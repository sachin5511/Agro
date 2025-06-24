import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ShippingForm = ({deliverAddress}) => {
  const [hide, setHide] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    houseflatNo: "",
    pincode: "",
    address: "",
    landmark: "",
    phoneNumber: "",
    city: "",
  });
  const [savedAddresses, setSavedAddresses] = useState([]);

  // Load saved addresses from localStorage when component mounts
  useEffect(() => {
    const storedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    setSavedAddresses(storedAddresses);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    const updatedAddresses = [...savedAddresses, formData];

    // Save to localStorage
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));

    // Update state
    setSavedAddresses(updatedAddresses);

    // Reset form fields
    setFormData({
      firstName: "",
      lastName: "",
      houseflatNo: "",
      pincode: "",
      address: "",
      landmark: "",
      phoneNumber: "",
      city: "",
    });
    setHide(false);
  };

  const hideHandler = () => {
    setHide(!hide);
  };

  return (
    <div className="max-w-4xl p-6 border border-gray-500">
      <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>

      {/* Display Saved Addresses */}
      <h3 className="text-lg font-semibold">Saved Addresses</h3>
      {savedAddresses.length > 0 && (
        <div className="flex-1 space-y-2">
          {savedAddresses.map((address, index) => (
            <div
              key={index}
              className="p-3 border-b md:border-none flex flex-wrap items-center justify-between mb-4 p-4 bg-white border rounded-md shadow-md md:flex-nowrap"
            >
              <input
                type="radio"
                name="selectedAddress"
                required
                className="mr-3"
                checked={selectedAddress === index}
                onChange={() => setSelectedAddress(index)}
              />
              <div className="pl-6 flex-1">
                <p className="font-semibold">
                  {address.houseflatNo}, {address.firstName} {address.lastName},{" "}
                  {address.city}
                </p>
                <p className="text-gray-600">
                  {address.address}, {address.landmark}, {address.city}
                </p>
                <p className="text-gray-700 font-medium">
                  📞 {address.phoneNumber}
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-2">
                <button
                  className="border-1 border-gray-500 px-7 py-2 rounded-lg transition-transform duration-300 hover:scale-105"
                  onClick={() =>{ 
                    setSelectedAddress(index)
                    deliverAddress(address)
                  }}
                >
                  Deliver Here
                </button>
                <button className="border-1 border-gray-500 px-7 py-2 rounded-lg transition-transform duration-300 hover:scale-105">
                  <FaEdit className="w-4 h-4 mr-1" />
                </button>
                <button className="border-1 border-gray-500 px-7 py-2 rounded-lg transition-transform duration-300 hover:scale-105">
                  <FaTrash className="w-4 h-4 mr-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <button
        className="border-1 border-gray-500 px-7 py-2 rounded-lg transition-transform duration-300 hover:scale-105"
        onClick={hideHandler}
      >
        Add New Address
      </button>
      {hide && (
        <form
          className="border border-gray-500 p-4 space-y-4 mt-3"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["firstName", "lastName"].map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700">
                  {field === "firstName" ? "First Name" : "Last Name"}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["houseflatNo", "pincode"].map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700">
                  {field === "houseflatNo" ? "House/Flat No" : "Pincode"}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            ))}
          </div>

          {["address", "landmark"].map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["phoneNumber", "city"].map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700">
                  {field === "phoneNumber" ? "Phone Number" : "City"}
                </label>
                <input
                  type={field === "phoneNumber" ? "tel" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="border border-gray-500 px-7 py-2 rounded-lg"
          >
            Add Address
          </button>
        </form>
      )}
    </div>
  );
};

export default ShippingForm;
