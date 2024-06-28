import React from 'react';
import Navbar from '../components/Navbar';
import ModalSearch from '../components/ModalSearch';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ModalSearch />

      <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Contact</h1>
          <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item active text-white">Contact</li>
          </ol>
      </div>

      <div className="container-fluid contact py-5">
          <div className="container py-5">
              <div className="p-5 bg-light rounded">
                  <div className="row g-4">
                      <div className="col-12">
                          <div className="text-center mx-auto" style={{maxWidth: '700px'}}>
                                <h1 className="text-primary">Hubungi Kami</h1>
                                <p className="mb-4">Selamat datang di halaman Kontak kami. Kami siap membantu Anda! Silakan hubungi kami melalui formulir di bawah ini atau melalui kontak langsung untuk pertanyaan, saran, atau bantuan yang Anda butuhkan. Terima kasih atas kunjungan Anda!
                                </p>
                          </div>
                      </div>

                      <div className="col-lg-7">
                          <form action="" className="">
                              <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Your Name" />
                              <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Email" />
                              <textarea className="w-100 form-control border-0 mb-4" rows="5" cols="10" placeholder="Your Message"></textarea>
                              <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary " type="submit">Submit</button>
                          </form>
                      </div>
                      <div className="col-lg-5">
                          <div className="d-flex p-4 rounded mb-4 bg-white">
                              <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                              <div>
                                  <h4>Address</h4>
                                  <p className="mb-2">Jl. Setu Indah No.116, Tugu, Kec. Cimanggis, Kota Depok.</p>
                              </div>
                          </div>
                          <div className="d-flex p-4 rounded mb-4 bg-white">
                              <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                              <div>
                                  <h4>Mail Us</h4>
                                  <p className="mb-2">powerstore@gmail.com</p>
                              </div>
                          </div>
                          <div className="d-flex p-4 rounded bg-white">
                              <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                              <div>
                                  <h4>Telephone</h4>
                                  <p className="mb-2"> (021) 7863191</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
