import React from 'react';
import Navbar from '../components/Navbar';
import ModalSearch from '../components/ModalSearch';
import Footer from '../components/Footer';
import CartPage from '../components/CartPage';

const Cart = () => {
  return (
    <div>
      <Navbar />
      <ModalSearch />

      {/* <!-- Single Page Header start --> */}
        <div className="container-fluid page-header py-5">
            <h1 className="text-center text-white display-6">Cart</h1>
            <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item active text-white">Cart</li>
            </ol>
        </div>
      {/* <!-- Single Page Header End --> */}

      <CartPage />
      <Footer />
    </div>
  );
}

export default Cart;
