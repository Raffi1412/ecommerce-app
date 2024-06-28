import React from 'react';
import Navbar from '../components/Navbar';
import ModalSearch from '../components/ModalSearch';
import Footer from '../components/Footer';
import CheckoutPage from '../components/CheckoutPage';

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <ModalSearch />

      <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Checkout</h1>
          <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item active text-white">Checkout</li>
          </ol>
      </div>

      <CheckoutPage />
      <Footer />
    </div>
  );
}

export default Checkout;
