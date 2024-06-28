import React from "react";
import heroImg1 from "../img/hero-img-1.jpeg";
import heroImg2 from "../img/hero-img-2.jpg";

const Hero = () => {
    return (
        <div className="container-fluid py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-12 col-lg-7">
                        <h4 className="mb-3 text-white">PT Elektronik Maju Jaya</h4>
                        <h1 className="mb-5 display-3 text-white">ALL <br /> THE POWER BANKS <br />YOU NEED</h1>
                        <div className="position-relative mx-auto">
                            <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="text" placeholder="Search" />
                            <button type="submit" className="btn btn-dark border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{top: "0", right: "25%"}}>Submit Now</button>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active rounded">
                                <img src={heroImg1} className="img-fluid w-100 h-100 rounded" alt="First slide" />
                                <a href="#" className="px-4 py-2 text-white rounded btn">Power Bank</a>
                            </div>
                                <div className="carousel-item rounded">
                                    <img src={heroImg2} className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Power Store</a>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev" style={{ backgroundColor: '#000000'}}>
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next" style={{ backgroundColor: '#000000'}}>
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;