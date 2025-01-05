import './styles/global.css'
import AgroNavbar from "./Component/navbar/AgroNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from './pages/auth/login/Login';
import SignupForm from './pages/auth/signup/SignupForm';
import Fruits from './pages/shop/fruits/Fruits';
import Vegetable from './pages/shop/vegetable/Vegetable';
import BookingForm from './pages/rental/BookingForm';



function App() {
  return (
    <Router>
    <AgroNavbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignupForm/>} />
      <Route path="/shop/fruits" element={<Fruits/>} />
      <Route path="/shop/vegetables" element={<Vegetable/>} />
      <Route path="/services/rental" element={<BookingForm/>} />
    </Routes>
  </Router>
  );
}

export default App;
