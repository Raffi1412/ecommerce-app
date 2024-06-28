import React from 'react';

const VesitableShop = () => {
  return (
    <div id="vesitable" className="container-fluid vesitable py-5">
        <div className="container py-5">

            <h1 className="mb-0">Our Discount Products</h1>
            <div className="owl-carousel vegetable-carousel justify-content-center">
                
                <div className="border border-dark rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                        <img src={'https://acmic.id/cdn/shop/products/F20Pro3_1000x.jpg?v=1667186440'} className="img-fluid w-100 rounded-top" alt="" />
                    </div>
                    <div className="text-white bg-dark px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Disc 55%</div>
                    <div className="p-4 rounded-bottom">
                        <h4>ACMIC Power Bank</h4>
                        <p>ACMIC F20PRO 20000mAh Intelligent Charging System Digital Power Bank</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">IDR 449.000 <s style={{color: 'red'}}>IDR 992.000 </s></p>
                            <a href="/cart" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                        </div>
                    </div>
                </div>

                <div className="border border-dark rounded position-relative vesitable-item">
                    <div className="vesitable-img ">
                        <img src={'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1585885066.93154555.png'} className="img-fluid w-100 rounded-top" alt="" />
                    </div>
                    <div className="text-white bg-dark px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Disc 55%</div>
                    <div className="p-4 rounded-bottom">
                        <h4>Redmi Power Bank</h4>
                        <p>Xiaomi Redmi Power Bank 18W Fast Charge – 20000mAh No. PB200LZM </p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">IDR 640.000 <s style={{color: 'red'}}>IDR 999.000 </s></p>
                            <a href="/cart" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                        </div>
                    </div>
                </div>
                <div className="border border-dark rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                        <img src={'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmLfJTKmmYWzjmuIdP192b4Zfztx7XwESnGLJvedWQuLsZ6SUa_PrhduHchOOoNaz70XSw5otb3ryYcjvwj0alTtBqZK2lSvGxBOlzHs_9up7YkffDuv1zgw&usqp=CAE'} className="img-fluid w-100 rounded-top bg-light" alt="" />
                    </div>
                    <div className="text-white bg-dark px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Disc 55%</div>
                    <div className="p-4 rounded-bottom">
                        <h4>ANKER Power Bank</h4>
                        <p>PowerCore Slim 10000 PD 18W 10.000mAh Model No.A1245</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">IDR 999.000 <s style={{color: 'red'}}>IDR 1.550K </s></p>
                            <a href="/cart" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default VesitableShop;