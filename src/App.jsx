import React, { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import ShopDetail from './pages/ShopDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import Success from './pages/Success';
import Contact from './pages/Contact';
import { SpinnerProvider, useSpinner } from './context/SpinnerContext'; // Pastikan untuk menggunakan ekstensi .jsx
import Spinner from './components/Spinner';

import './css/bootstrap.min.css';
import './css/style.css';
import './lib/lightbox/css/lightbox.min.css';
import './lib/owlcarousel/assets/owl.carousel.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import './lib/owlcarousel/assets/owl.theme.default.css';
import './lib/owlcarousel/assets/owl.theme.default.min.css';
import './lib/owlcarousel/assets/owl.theme.green.css';
import './lib/owlcarousel/assets/owl.theme.green.min.css';
import BackToTop from './components/BackToTop';
import VesitableShop from './components/VesitableShop';
import Login from './pages/Login';

const AppContent = () => {
  const location = useLocation();
  const { setLoading } = useSpinner();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart(); // Trigger spinner on route change start

    // Simulate loading effect for demo purpose
    setTimeout(() => {
      handleComplete(); // Hide spinner after a delay (simulating data loading)
    }, 1000); // Adjust delay time as needed

    return () => {
      handleComplete(); // Ensure spinner is hidden on component unmount
    };
  }, [location, setLoading]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop-detail" element={<ShopDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/success" element={<Success />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vesitable-shop" element={<VesitableShop />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <SpinnerProvider>
      <Router>
        <Spinner />
        <AppContent />
        <BackToTop />
      </Router>
    </SpinnerProvider>
  );
};

export default App;
