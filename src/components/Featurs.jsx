import React from 'react';
import featurImg1 from "../img/featur-1.jpg";
import featurImg2 from "../img/featur-2.jpg";
import featurImg3 from "../img/featur-3.jpg";

const Featurs = () => {
  return (
    
<div className="container-fluid service py-5">
            <div className="container py-5">
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <a>
                            <div className="service-item bg-secondary rounded border border-dark">
                                <img src={featurImg1} className="img-fluid rounded-top w-100" alt="" />
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-dark text-center p-4 rounded">
                                        <h5 className="text-white">Affordable Prices</h5>
                                        <h3 className="mb-0 text-warning">Discount 55%</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <a>
                            <div className="service-item bg-dark rounded border border-dark">
                                <img src={featurImg2} className="img-fluid rounded-top w-100" alt="" />
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-light text-center p-4 rounded">
                                        <h5 className="text-primary">Fast Service</h5>
                                        <h3 className="mb-0">1 Day Service</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <a>
                            <div className="service-item bg-white rounded border border-dark">
                                <img src={featurImg3} className="img-fluid rounded-top w-100" alt="" />
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-warning text-center p-4 rounded">
                                        <h5 className="text-white">Quality Products</h5>
                                        <h3 className="mb-0">Original 100%</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Featurs;