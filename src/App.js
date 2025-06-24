import { createContext, useEffect, useState } from 'react';
import './styles/global.css';
import AgroNavbar from './Component/navbar/AgroNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Login from './pages/auth/login/Login';
import SignupForm from './pages/auth/signup/SignupForm';
import Fruits from './pages/shop/fruits/Fruits';
import Vegetable from './pages/shop/vegetable/Vegetable';
import BookingForm from './pages/rental/BookingForm';
import ShoppingCart from './pages/shoppingcart/ShoppingCart';
import Checkout from './pages/checkout/Checkout';
import OrderHistory from './pages/order/OrderHistory';
import OrderDetail from './pages/order/OrderDetail';

const CartContext = createContext();
const UpdateCartContext = createContext();
const UserContext = createContext()

function App() {
  const [cartItem, setCartItem] = useState(0);
  const [userProfile, setUserProfile] = useState(false);
  
  
  const cartItemHandler = () => {
    let x = Number(localStorage.getItem('count')) || 0;
    localStorage.setItem('count', x + 1);
    setCartItem(cartItem + 1);
  };

  const userProfileHandler = (e) => {
    localStorage.setItem('userProfile', JSON.stringify(e.firstName));
    setUserProfile(true);
  }

  const updateCartHandler = () => {
    const productCount = JSON.parse(localStorage.getItem('count')) || [];
    localStorage.setItem('count', JSON.stringify(productCount - 1));
    setCartItem(productCount);
  };

  return (
    <CartContext.Provider value={cartItemHandler}>
      <UpdateCartContext.Provider value={updateCartHandler}>
        <UserContext.Provider value={userProfileHandler}>
        <Router>
          <AgroNavbar cartItem={cartItem} userProfile={userProfile} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<OrderHistory/>} />
            <Route path="/orders/:id" element={<OrderDetail/>} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/shop/fruits" element={<Fruits />} />
            <Route path="/shop/vegetables" element={<Vegetable />} />
            <Route path="/services/rental" element={<BookingForm />} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        </Router>
        </UserContext.Provider>
      </UpdateCartContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
export { CartContext, UpdateCartContext, UserContext };
