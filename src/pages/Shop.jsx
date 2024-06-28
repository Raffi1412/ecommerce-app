import React from 'react';
import { Link } from 'react-router-dom';

import featur1 from "../img/featur-1.jpg" 
import featur2 from "../img/featur-2.jpg" 
import featur3 from "../img/featur-3.jpg" 

import product1 from "../img/product-1.jpg"
import product2 from "../img/product-2.png"
import product3 from "../img/product-3.jpg"
import product4 from "../img/product-4.jpeg"
import product5 from "../img/product-5.jpg"
import product6 from "../img/product-6.jpg"
import product7 from "../img/product-7.jpg"
import product8 from "../img/product-8.jpg"

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ModalSearch from '../components/ModalSearch';

const Shop = () => {
  return (
    <div>
      <Navbar />
      <ModalSearch />

      <div className="container-fluid page-header py-5">
            <h1 className="text-center text-white display-6">Shop</h1>
            <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item active text-white">Shop</li>
            </ol>
        </div>

        <div className="container-fluid fruite py-5">
            <div className="container py-5">
                <h1 className="mb-4">Power Bank Shop</h1>
                <div className="row g-4">
                    <div className="col-lg-12">
                        <div className="row g-4">
                            <div className="col-xl-3">
                                <div className="input-group w-100 mx-auto d-flex">
                                    <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                    <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                                </div>
                            </div>
                            <div className="col-6"></div>
                            <div className="col-xl-3">
                                <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                    <label htmlFor="fruits">Default Sorting:</label>
                                    <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
                                        <option value="1">Popular</option>
                                        <option value="2">Cheapest</option>
                                        <option value="3">Top Rated</option>
                                        <option value="4">Discount</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row g-4">
                            <div className="col-lg-3">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="mb-3">

                                            <h4>Categories</h4>
                                            <ul className="list-unstyled fruite-categorie">
                                                <li>
                                                    <div className="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i className="fas fa-bolt me-2"></i>Xiaomi</a>
                                                        <span>(3)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i className="fas fa-bolt me-2"></i>Robot</a>
                                                        <span>(5)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i className="fas fa-bolt me-2"></i>Hippo</a>
                                                        <span>(2)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i className="fas fa-bolt me-2"></i>Aukey</a>
                                                        <span>(8)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i className="fas fa-bolt me-2"></i>Anker</a>
                                                        <span>(5)</span>
                                                    </div>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <h4>Pengiriman</h4>
                                            <div className="mb-2">
                                                <input type="radio" className="me-2" id="Categories-1" name="Categories-1" value="Beverages" />
                                                <label htmlFor="Categories-1"> Jakarta</label>
                                            </div>
                                            <div className="mb-2">
                                                <input type="radio" className="me-2" id="Categories-2" name="Categories-1" value="Beverages" />
                                                <label htmlFor="Categories-2"> Bandung</label>
                                            </div>
                                            <div className="mb-2">
                                                <input type="radio" className="me-2" id="Categories-3" name="Categories-1" value="Beverages" />
                                                <label htmlFor="Categories-3"> Depok</label>
                                            </div>
                                            <div className="mb-2">
                                                <input type="radio" className="me-2" id="Categories-4" name="Categories-1" value="Beverages" />
                                                <label htmlFor="Categories-4"> Bogor</label>
                                            </div>
                                            <div className="mb-2">
                                                <input type="radio" className="me-2" id="Categories-5" name="Categories-1" value="Beverages" />
                                                <label htmlFor="Categories-5"> Tanggerang</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <h4 className="mb-3">Featured products</h4>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <div className="rounded me-4" style={{width: '100px', height: '100px'}}>
                                                <img src={featur1} className="img-fluid rounded" alt="" />
                                            </div>
                                            <div>
                                                <h6 className="mb-2">ANKER Power Bank</h6>
                                                <div className="d-flex mb-2">
                                                    <i className="fa fa-star text-secondary"></i>
                                                    <i className="fa fa-star text-secondary"></i>
                                                    <i className="fa fa-star text-secondary"></i>
                                                    <i className="fa fa-star text-secondary"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="d-flex mb-2">
                                                    <h5 className="fw-bold me-2">999K</h5>
                                                    <h5 className="text-danger text-decoration-line-through">1.550K</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <div className="rounded me-4" style={{width: '100px', height: '100px'}}>
                                                <img src={featur2} className="img-fluid rounded" alt="" />
                                            </div>
                                            <div>
                                                <h6 className="mb-2">Redmi Power Bank</h6>
                                                <div className="d-flex mb-2">
                                                    <i className="fa fa-star text-secondary"></i>
                                                    <i className="fa fa-star text-secondary"></i>
                                                    <i className="fa fa-star text-secondary"></i>
                                                    <i className="fa fa-star text-secondary"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="d-flex mb-2">
                                                    <h5 className="fw-bold me-2">640K</h5>
                                                    <h5 className="text-danger text-decoration-line-through">999K</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <div className="rounded me-4" style={{width: '100px', height: '100px'}}>
                                                <img src={featur3} className="img-fluid rounded" alt="" />
                                            </div>
                                            <div>
                                                <h6 className="mb-2">ACMIC Power Bank</h6>
                                                <div className="d-flex mb-2">
                                                    <i className="fa fa-star text-secondary"></i>
                                                    <i className="fa fa-star text-secondary"></i>
                                                    <i className="fa fa-star text-secondary"></i>
                                                    <i className="fa fa-star text-secondary"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="d-flex mb-2">
                                                    <h5 className="fw-bold me-2">449K</h5>
                                                    <h5 className="text-danger text-decoration-line-through">992K</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center my-4">
                                            <Link to="/"  className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">Vew More</Link>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="position-relative">
                                            <img src={'https://icdn.tradew.com/file/202308/1575939/jpg/8055558.jpg?x-oss-process=image/resize,w_500/quality,Q_90/format,webp'} className="img-fluid w-100 rounded" alt="" />
                                            <div className="position-absolute" style={{top: '45%', right: '10px', transform: 'translateY(-50%)'}}>
                                                <h3 className="text-warning fw-bold">Disc <br /> Up To <br /> 30%</h3>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="col-lg-9">
                                <div className="row g-4 justify-content-center">

                                    <div className="col-md-6 col-lg-4 col-xl-4">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img border border-dark">
                                                <img src={product1} className="img-fluid w-100 rounded-top border border-dark "alt="" />
                                            </div>
                                            <div className="p-4 border border-dark border-top-0 rounded-bottom">
                                                <h4>Baseus Power Bank</h4>
                                                <p>Baseus Power Bank 20W Display Fast Charging Built in Cable Iphone</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">IDR 339.000</p>
                                                    <a href="/cart" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4 col-xl-4">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img border border-dark border border-dark ">
                                                <img src={product2} className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="p-4 border border-dark border-top-0 rounded-bottom">
                                                <h4>RAVPower PowerBank</h4>
                                                <p>The 20,100mAh Turbo Portable Battery Pack features three USB ports </p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">IDR 600.000</p>
                                                    <a href="/cart" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4 col-xl-4">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img border border-dark">
                                                <img src={product3} className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="p-4 border border-dark border-top-0 rounded-bottom">
                                                <h4>HIPPO PowerBank Fast Charging</h4>
                                                <p>HIPPO PowerBank QC 3.0 + PD 20W Out Lander 3 PD 3.7V/ 10000mAh/ 37Wh</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">IDR 209.000</p>
                                                    <a href="/cart" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4 col-xl-4">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img border border-dark">
                                                <img src={product4} className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="p-4 border border-dark border-top-0 rounded-bottom">
                                                <h4>AUKEY Powerbank</h4>
                                                <p>AUKEY Powerbank 20000mah PB-Y43-GY USB C 65W PD 3.0  18W Slim</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">IDR 945.000</p>
                                                    <a href="/cart" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4 col-xl-4">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img border border-dark">
                                                <img src={product5} className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="p-4 border border-dark border-top-0 rounded-bottom">
                                                <h4>Robot Powerbank</h4>
                                                <p>Powerbank Robot RT180 10000mAh Dual Input Type-C + Micro USB – Whit/Purple/Black</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">IDR 135.000</p>
                                                    <a href="/cart" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4 col-xl-4">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img border border-dark">
                                                <img src={product6} className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="p-4 border border-dark border-top-0 rounded-bottom">
                                                <h4>ACMIC Powerbank</h4>
                                                <p>ACMIC F20PRO 20000mAh Intelligent Charging System Digital Power Bank (QC4 + PD + VOOC)</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">IDR 449.000</p>
                                                    <a href="/cart" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4 col-xl-4">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img border border-dark">
                                                <img src={product7} className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="p-4 border border-dark border-top-0 rounded-bottom">
                                                <h4>Redmi Power Bank</h4>
                                                <p>Xiaomi Redmi Power Bank 18W Fast Charge – 20000mAh No. PB200LZM </p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">IDR 640.000</p>
                                                    <a href="/cart" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4 col-xl-4">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img border border-dark">
                                                <img src={product8} className="img-fluid w-100 rounded-top" alt="" />
                                            </div>
                                            <div className="p-4 border border-dark border-top-0 rounded-bottom">
                                                <h4>ANKER PowerBank</h4>
                                                <p>PowerCore Slim 10000 PD 18W 10.000mAh Model No.A1245</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">IDR 999.000</p>
                                                    <a href="/cart" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4 col-xl-4">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img border border-dark">
                                                <img src={product5} className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="p-4 border border-dark border-top-0 rounded-bottom">
                                                <h4>Robot Powerbank</h4>
                                                <p>Powerbank Robot RT180 10000mAh Dual Input Type-C + Micro USB – Whit/Purple/Black</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">IDR 135.000</p>
                                                    <a href="/cart" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="pagination d-flex justify-content-center mt-5">
                                            <a href="#" className="rounded">&laquo;</a>
                                            <a href="#" className="active rounded">1</a>
                                            <a href="#" className="rounded">2</a>
                                            <a href="#" className="rounded">3</a>
                                            <a href="#" className="rounded">&raquo;</a>
                                        </div>
                                    </div>
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
};

export default Shop;