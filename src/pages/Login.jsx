import React from 'react';
import Navbar from '../components/Navbar';
import ModalSearch from '../components/ModalSearch';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <div>
      <Navbar />
      <ModalSearch />

      <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Login</h1>
          <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item active text-white">Login</li>
          </ol>
      </div>

      <div className="container-fluid contact py-5">
          <div className="container py-5">
              <div className="p-5 bg-light rounded">
                  <div className="row g-4 justify-content-center">

                        <div className="col-12">
                            <div className="text-center mx-auto" style={{maxWidth: '700px'}}>
                                <i class="bi bi-person display-1 text-dark"></i>
                                    <h1 className="text-primary">Login User</h1>
                                    <p className="mb-4">
                                        Please login to your account!
                                    </p>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <form action="" className="">
                                <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Username" />
                                <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Email" />
                                <input for="inputPassword" type="password" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Password" />
                                <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary " type="submit">Submit</button>
                            </form>
                            <br />
                            <a href="#">
                                <p className='mb-4'>Forgot password?</p>
                            </a>
                        </div>
                      
                  </div>
              </div>
          </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
