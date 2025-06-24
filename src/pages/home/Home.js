import React from 'react';
import products from '../../Fruitsproduct';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

import CategoryCard from '../../Component/card/CategoryCard';
import ShopByCategory from '../../Component/card/ShopByCategory';
import ProductCard from '../../Component/card/ProductCard';
const categories = [
  {
    image:
      'https://img.freepik.com/premium-photo/group-fresh-vegetables-herbs-isolated-white-background-raw-food-tomato-paprika-artichoke-mushrooms-cucumber-green-salad-basil_154730-1233.jpg?ga=GA1.1.1278163907.1738316817&semt=ais_hybrid',
    alt: 'Organic Produce',
    title: 'Organic & Fresh Produce',
    link: '/shop/organic-produce',
  },
  {
    image:
      'https://img.freepik.com/premium-photo/assortment-exotic-fruits-isolated-white_461160-2124.jpg?ga=GA1.1.1278163907.1738316817&semt=ais_hybrid',
    alt: 'fruits',
    title: 'Fruits',
    link: '/shop/fruits',
  },
  {
    image:
      'https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?ga=GA1.1.1278163907.1738316817&semt=ais_hybrid',
    alt: 'Farming Equipment',
    title: 'Vegetable',
    link: '/shop/vegetables',
  },
  {
    image:
      'https://img.freepik.com/free-vector/grass-fertilizer-abstract-concept-vector-illustration-gardening-services-rapid-growth-green-color-lawn-maintenance-supplement-soil-nutrients-granule-spreader-abstract-metaphor_335657-4104.jpg?ga=GA1.1.1278163907.1738316817&semt=ais_hybrid',
    alt: 'Pesticides & Crop Care',
    title: 'Pesticides & Crop Care',
    link: '/shop/pesticides-crop-care',
  },
  {
    image:
      'https://img.freepik.com/premium-photo/dairy-products-wooden-board-table-white-background_943860-5263.jpg?ga=GA1.1.1278163907.1738316817&semt=ais_hybrid',
    alt: 'Livestock & Dairy',
    title: 'Livestock & Dairy Supplies',
    link: '/shop/livestock-dairy-supplies',
  },
];

const agricultureFeatures = [
  {
    image:
      'https://img.freepik.com/free-vector/font-design-word-organic-with-many-vegetables-basket_1308-42285.jpg?ga=GA1.1.1278163907.1738316817&semt=ais_hybrid',
    alt: 'Farm Fresh & Organic',
    title: '🌱 Farm-Fresh & Organic',
    description: 'Sourced directly from trusted farms.',
  },
  {
    image:
      'https://img.freepik.com/free-photo/peas-beans-coming-out-buckets_176474-1618.jpg?ga=GA1.1.1278163907.1738316817&semt=ais_hybrid',
    alt: 'High-Quality Seeds & Fertilizers',
    title: '🌾 High-Quality Seeds & Fertilizers',
    description: 'Boost your yield with the best agricultural inputs.',
  },
  {
    image:
      'https://img.freepik.com/premium-photo/farm-combine-harvester-3d-rendering-white-background_1113051-75.jpg?ga=GA1.1.1278163907.1738316817&semt=ais_hybrid',
    alt: 'Modern Farming Equipment',
    title: '🚜 Modern Farming Equipment',
    description: 'Upgrade to efficient and reliable tools.',
  },
  {
    image:
      'https://img.freepik.com/premium-vector/delivery-services-commerce-packages-flying-parachutes-elements-isolated-sky-background_257312-148.jpg?ga=GA1.1.1278163907.1738316817&semt=ais_hybrid',
    alt: 'Fast & Secure Delivery',
    title: '📦 Fast & Secure Delivery',
    description: 'Get your supplies delivered to your doorstep.',
  },
  {
    image:
      'https://img.freepik.com/premium-vector/modern-farmers-use-technology-agriculture_420778-81.jpg?ga=GA1.1.1278163907.1738316817&semt=ais_hybrid',
    alt: 'Farmer-Friendly Pricing',
    title: '🤝 Farmer-Friendly Pricing',
    description: 'Affordable rates to support sustainable farming.',
  },
  {
    image:
      'https://img.freepik.com/free-photo/dairy-products_114579-8756.jpg?ga=GA1.1.1278163907.1738316817&semt=ais_hybrid',
    alt: 'Livestock & Dairy',
    title: '🐄 Livestock & Dairy Supplies',
    description: 'Nutrition and care for farm animals.',
  },
];

const Home = () => {
  return (
    <>
      <section className="py-10">
        <div className="min-h-[80vh] bg-gradient-to-b from-green-100 to-white flex flex-col items-center">
          <div className="max-w-6xl flex flex-col md:flex-row items-center text-center md:text-left mt-10 md:mt-20">
            <div className="md:w-1/2 space-y-8">
              <h1 className="md:text-3xl font-bold text-green-600">
                Fresh, Organic & Delivered to Your Doorstep! 🍏🥦
              </h1>
              <p className="text-gray-600 text-s md:text-s">
                Enjoy farm-fresh fruits and vegetables delivered straight to
                your doorstep. We promise the freshest produce, sourced directly
                from trusted farms, ensuring natural taste, rich nutrition, and
                unmatched quality. Experience the goodness of organic,
                handpicked fruits and veggies—because your health deserves the
                best.
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
                Shop Now
              </button>
            </div>
            <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center">
              <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full bg-white shadow-xl flex items-center justify-center ">
                <img
                  src="/path-to-main-food-image.png"
                  alt="Main Food"
                  className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover"
                />
              </div>
              <div className="absolute w-full h-full flex justify-center items-center">
                {[
                  'https://www.liveorganic.co.in/cdn/shop/files/apples_a12f9930-4700-479c-8edd-d5f8a3f8290a_220x@2x.jpg?v=1697945159',
                  'https://www.liveorganic.co.in/cdn/shop/files/mixfruits_220x@2x.jpg?v=1691546984',
                  'https://www.liveorganic.co.in/cdn/shop/products/2_Banana_Waynard_300g_220x@2x.png?v=1659420662',
                  'https://www.liveorganic.co.in/cdn/shop/products/33_Potato_-_Bulk_Pack-5_Kg_220x@2x.jpg?v=1659420716',
                  'https://www.liveorganic.co.in/cdn/shop/products/41_Yellow_Capsicum_Per_Piece_220x@2x.jpg?v=1659420731',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="absolute w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-md flex items-center justify-center"
                    style={{
                      transform: `rotate(${
                        index * 72
                      }deg) translate(120px) rotate(-${index * 72}deg)`,
                    }}
                  >
                    <img
                      src={item}
                      alt="Food Item"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-gray-100">
        <div className="">
          <h3 className="text-2xl md:text-3xl text-center mb-6">
            Shop by <span className="text-green-700">category</span>
          </h3>
          <div className="overflow-x-auto scrollbar-hide p-6">
            <div className="flex gap-6 py-2">
              {categories.map((category, index) => (
                <ShopByCategory key={index} {...category} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Featured <span className="text-green-700">Product</span>
        </h3>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-gray-300 ">
          <div className="flex gap-2">
            {products.map((item) => (
              <div
                key={item.id}
                className="min-w-[250px] max-w-[250px] p-4"
              >
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 px-5 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-center font-bold mb-6 text-green-700">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-2">
            {agricultureFeatures.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-cyan-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-white">E-Shop</h2>
              <p className="mt-3 text-sm opacity-90">
                Discover the best deals on premium products. Your one-stop shop
                for quality and affordability.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Customer Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/faq"
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/returns"
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping"
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Newsletter
              </h3>
              <p className="text-sm opacity-90">
                Subscribe for exclusive deals and latest product updates.
              </p>
              <div className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-l-lg bg-white text-gray-800 border-none outline-none"
                />
                <button className="bg-yellow-400 px-4 py-2 rounded-r-lg text-gray-900 font-semibold hover:bg-yellow-500 transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-500 pt-5 flex flex-col sm:flex-row justify-between items-center text-sm opacity-90">
            <p>
              &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link
                to="#"
                className="text-white hover:text-yellow-400 transition duration-300 text-lg"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="#"
                className="text-white hover:text-yellow-400 transition duration-300 text-lg"
              >
                <FaTwitter />
              </Link>
              <Link
                to="#"
                className="text-white hover:text-yellow-400 transition duration-300 text-lg"
              >
                <FaInstagram />
              </Link>
              <Link
                to="#"
                className="text-white hover:text-yellow-400 transition duration-300 text-lg"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
