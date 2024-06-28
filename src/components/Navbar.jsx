import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        // Navbar start
        <div className="container-fluid fixed-top">
            <div className="container topbar bg-dark d-none d-lg-block">
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">
                        <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <a className="text-white">Jl. Setu Indah No.116, Tugu, Kec. Cimanggis, Kota Depok</a></small>
                        <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><a className="text-white">powerstore@gmail.com</a></small>
                    </div>
                    <div className="top-link pe-2">
                        <a className="text-white"><span className="text-white mx-2">2024</span>@</a>
                        <a className="text-white"><span className="text-white mx-2">Copyright</span>.</a>
                        <a className="text-white"><span className="text-white ms-2">By PT.Elektronik Maju Jaya</span></a>
                    </div>
                </div>
            </div>
            <div className="container px-0">
                <nav className="navbar navbar-light bg-white navbar-expand-xl">
                    <Link to="/" className="navbar-brand"><h1 className="text-dark display-6">Power Store</h1></Link>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <Link to="/" className={`nav-item nav-link ${currentPath === '/' ? 'text-warning' : 'text-dark'}`}>Home</Link>
                            <Link to="/shop" className={`nav-item nav-link ${currentPath === '/shop' ? 'text-warning' : 'text-dark'}`}>Shop</Link>
                            <Link to="/about" className={`nav-item nav-link ${currentPath === '/about' ? 'text-warning' : 'text-dark'}`}>About Us</Link>
                            <div className="nav-item dropdown">
                            <a href="#" className={`nav-link dropdown-toggle ${currentPath === '/cart' || currentPath === '/checkout' || currentPath === '/testimonial' || currentPath === '/notfound' ? 'text-warning' : 'text-dark'}`} data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                    <Link to="/shop-detail" className={`dropdown-item ${currentPath === '/shop-detail' ? 'text-warning' : 'text-dark'}`}>Shop Detail</Link>
                                    <Link to="/checkout" className={`dropdown-item ${currentPath === '/checkout' ? 'text-warning' : 'text-dark'}`}>Checkout</Link>
                                </div>
                            </div>
                            <Link to="/contact" className={`nav-item nav-link ${currentPath === '/contact' ? 'text-warning' : 'text-dark'}`}>Contact</Link>
                        </div>
                        <div className="d-flex m-3 me-0">
                            <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-dark"></i></button>
                            <Link to="/cart" className="position-relative me-4 my-auto">
                                <i className="fa fa-shopping-bag fa-2x" style={{color: '#45595b'}}></i>
                                <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{ top: '-5px', left: '15px', height: '20px', minWidth: '20px' }}>3</span>
                            </Link>
                            <a href="/login" className="my-auto" style={{color: '#45595b'}}>
                                <i className="fas fa-user fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        // Navbar End
    );
}

export default Navbar;
