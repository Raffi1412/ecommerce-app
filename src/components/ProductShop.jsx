// src/components/ProductShop.jsx
import React from 'react';
import product1 from "../img/product-1.jpg"
import product2 from "../img/product-2.png"
import product3 from "../img/product-3.jpg"
import product4 from "../img/product-4.jpeg"
import product5 from "../img/product-5.jpg"
import product6 from "../img/product-6.jpg"
import product7 from "../img/product-7.jpg"
import product8 from "../img/product-8.jpg"

const ProductShop = () => {
  return (
    <section className="fruits-shop">
      <div className="container-fluid fruite py-5">
    <div className="container py-5">
        <div className="tab-class text-center">
            <div className="row g-4">
                <div className="col-lg-4 text-start">
                    <h1>Our Power Bank Products</h1> 
                </div>
                <div className="col-lg-8 text-end">
                    <ul className="nav nav-pills d-inline-flex text-center mb-5">
                        <li className="nav-item">
                            <a className="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                <span className="text-dark" style={{width: '130px'}}>All Products</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                <span className="text-dark" style={{width: '130px'}}>Popular</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                <span className="text-dark" style={{width: '130px'}}>Latest</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                <span className="text-dark" style={{width: '130px'}}>Discount</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                                <span className="text-dark" style={{width: '130px'}}>Top Rated</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">

                                <div className="col-md-6 col-lg-4 col-xl-3">
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

                                <div className="col-md-6 col-lg-4 col-xl-3">
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

                                <div className="col-md-6 col-lg-4 col-xl-3">
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

                                <div className="col-md-6 col-lg-4 col-xl-3">
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

                                <div className="col-md-6 col-lg-4 col-xl-3">
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

                                <div className="col-md-6 col-lg-4 col-xl-3">
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
                                
                                <div className="col-md-6 col-lg-4 col-xl-3">
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

                                <div className="col-md-6 col-lg-4 col-xl-3">
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
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">

                                <div className="col-md-6 col-lg-4 col-xl-3">
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

                                <div className="col-md-6 col-lg-4 col-xl-3">
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

                                <div className="col-md-6 col-lg-4 col-xl-3">
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

                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">

                                <div className="col-md-6 col-lg-4 col-xl-3">
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

                                <div className="col-md-6 col-lg-4 col-xl-3">
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

                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-4" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">

                                <div className="col-md-6 col-lg-4 col-xl-3">
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
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

                                <div className="col-md-6 col-lg-4 col-xl-3">
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

                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-5" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">

                                <div className="col-md-6 col-lg-4 col-xl-3">
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

                                <div className="col-md-6 col-lg-4 col-xl-3">
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
</div>
    </section>
  );
};

export default ProductShop;