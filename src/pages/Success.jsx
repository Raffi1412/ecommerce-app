import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ModalSearch from '../components/ModalSearch';

const Success = () => {
  return (
    <div>
      <Navbar />
      <ModalSearch />

      <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Order Success</h1>
          <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item active text-white">404</li>
          </ol>
      </div>
      
      <div className="container text-center py-5">
          <div className="row justify-content-center">
              <div className="col-md-8">
              <div className="alert alert-success" role="alert">
                  <i class="bi bi-bag-check-fill display-1 text-primary"></i>
                  <h2 className="alert-heading display-4">Pemesanan Berhasil!</h2>
                  <p className="mb-0">Terima kasih telah berbelanja di Power Store. Pesanan Anda telah diterima dan sedang diproses.</p>
              </div>
              <a className="btn border-secondary rounded-pill py-3 px-5" href="/">Go Back To Home</a>
              </div>
          </div>
      </div>

      <Footer />
    </div>
  );
}

export default Success;
