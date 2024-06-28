import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import ModalSearch from '../components/ModalSearch';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import avatar from '../img/avatar.jpg'

const ShopDetail = () => {

  return (
  
  <div>
    <Navbar />
    <ModalSearch />

    <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Shop Detail</h1>
        <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item active text-white">Shop Detail</li>
        </ol>
    </div>

    <div className="container-fluid py-5 mt-5">
            <div className="container py-5">
                <div className="row g-4 mb-5">
                    <div className="col-lg-8 col-xl-9">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="border rounded">
                                    <a href="#">
                                        <img src={'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1585885066.93154555.png'} className="img-fluid rounded" alt="Image" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h4 className="fw-bold mb-3">Redmi Power Bank</h4>
                                <p className="mb-3">Variant Warna: Hitam</p>
                                <h5 className="fw-bold mb-3">IDR 640.000 </h5>
                                <div className="d-flex mb-4">
                                    <i className="fa fa-star text-secondary"></i>
                                    <i className="fa fa-star text-secondary"></i>
                                    <i className="fa fa-star text-secondary"></i>
                                    <i className="fa fa-star text-secondary"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p className="mb-4">Xiaomi Redmi PowerBank 20000mAh 18W Fast Charge Power Bank Original - Hitam, Garansi Resmi.</p>
                                <div className="input-group quantity mb-5" style={{width: '100px'}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-minus rounded-circle bg-light border" >
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control form-control-sm text-center border-0" value="1" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <a href="/cart" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                            <div className="col-lg-12">
                                <nav>
                                    <div className="nav nav-tabs mb-3">
                                        <button className="nav-link active border-white border-bottom-0" type="button" role="tab"
                                            id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
                                            aria-controls="nav-about" aria-selected="true">Description</button>
                                        <button className="nav-link border-white border-bottom-0" type="button" role="tab"
                                            id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission"
                                            aria-controls="nav-mission" aria-selected="false">Reviews</button>
                                    </div>
                                </nav>
                                <div className="tab-content mb-5">
                                    <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                                        <p>
                                            Redmi Fast Charge Power Bank 20.000mAh :
                                            Port input ganda, Port output ganda, Kapasitas tinggi 74Wh, Pengisian daya cepat 18W dua arah.
                                            Model yang ciamik dan tahan lama (bahan ABS)
                                            Cocok untuk pemakaian di pesawat Pengingkatan Perlindungan dan keamanan.  
                                        </p>
                                        <p>
                                            Isi Dalam Paket :
                                            1x Redmi Powerbank 20000mAh,
                                            1x Kabel Micro USB,
                                            1x Buku Panduan.
                                        </p>
                                        <div className="px-2">
                                            <div className="row g-4">
                                                <div className="col-6">
                                                    <div className="row bg-light align-items-center text-center justify-content-center py-2">
                                                        <div className="col-6">
                                                            <p className="mb-0">Model</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <p className="mb-0">PB200LZM</p>
                                                        </div>
                                                    </div>
                                                    <div className="row text-center align-items-center justify-content-center py-2">
                                                        <div className="col-6">
                                                            <p className="mb-0">Daya baterai</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <p className="mb-0">74Wh 3,7V 20.000mAh</p>
                                                        </div>
                                                    </div>
                                                    <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                                        <div className="col-6">
                                                            <p className="mb-0">Jenis baterai</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <p className="mb-0">Baterai polimer Lithium-ion</p>
                                                        </div>
                                                    </div>
                                                    <div className="row text-center align-items-center justify-content-center py-2">
                                                        <div className="col-6">
                                                            <p className="mb-0">Port input</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <p className="mb-0">Micro-USB / USB-C</p>
                                                        </div>
                                                    </div>
                                                    <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                                        <div className="col-6">
                                                            <p className="mb-0">Port output</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <p className="mb-0">2 x USB-A</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                                        <div className="d-flex">
                                            <img src={avatar} className="img-fluid rounded-circle p-3" style={{width: '100px', height: '100px'}} alt="" />
                                            <div className="">
                                                <p className="mb-2" style={{fontSize: '14px'}}>Desember 25, 2024</p>
                                                <div className="d-flex justify-content-between">
                                                    <h5>Jason Smith</h5>
                                                    <div className="d-flex mb-3">
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <p>
                                                "Saya sangat puas dengan pembelian Xiaomi Redmi PowerBank 20000mAh ini. Kapasitasnya yang besar sangat membantu dalam mengisi daya perangkat saya berkali-kali tanpa perlu khawatir kehabisan baterai. Fitur fast charge 18W sangat memudahkan, terutama saat saya sedang terburu-buru dan membutuhkan pengisian daya yang cepat. Desainnya juga elegan dan mudah dibawa kemana-mana. Benar-benar rekomendasi buat siapa saja yang membutuhkan power bank berkualitas tinggi." 
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <img src={avatar} className="img-fluid rounded-circle p-3" style={{width: '100px', height: '100px'}} alt="" />
                                            <div className="">
                                                <p className="mb-2" style={{fontSize: '14px'}}>April 12, 2024</p>
                                                <div className="d-flex justify-content-between">
                                                    <h5>Sam Peters</h5>
                                                    <div className="d-flex mb-3">
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <p className="text-dark">
                                                "Saya sudah menggunakan Xiaomi Redmi PowerBank 20000mAh ini selama beberapa minggu, dan saya sangat terkesan dengan kinerjanya. Baterai saya selalu penuh sepanjang hari, bahkan saat saya menggunakan beberapa perangkat sekaligus. Fitur fast charge-nya bekerja dengan baik, menghemat waktu pengisian daya. Namun, saya berharap power bank ini sedikit lebih ringan. Selain itu, ini adalah produk yang sangat bagus dengan harga yang terjangkau. Sangat puas dengan pembelian ini!"
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="nav-vision" role="tabpanel">
                                        <p className="text-dark">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                            amet diam et eos labore. 3</p>
                                        <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                                            Clita erat ipsum et lorem et sit</p>
                                    </div>
                                </div>
                            </div>
                            <form action="#">
                                <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="border-bottom rounded">
                                            <input type="text" className="form-control border-0 me-4" placeholder="Yur Name *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="border-bottom rounded">
                                            <input type="email" className="form-control border-0" placeholder="Your Email *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="border-bottom rounded my-4">
                                            <textarea name="" id="" className="form-control border-0" cols="30" rows="8" placeholder="Your Review *" spellcheck="false"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="d-flex justify-content-between py-3 mb-5">
                                            <div className="d-flex align-items-center">
                                                <p className="mb-0 me-3">Please rate:</p>
                                                <div className="d-flex align-items-center" style={{fontSize: '12px'}}>
                                                    <i className="fa fa-star text-muted"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                            </div>
                                            <a href="#" className="btn border border-secondary text-primary rounded-pill px-4 py-3"> Post Comment</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-4 col-xl-3">
                        <div className="row g-4 fruite">
                            <div className="col-lg-12">
                                <div className="input-group w-100 mx-auto d-flex mb-4">
                                    <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                    <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                                </div>
                                <div className="mb-4">

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
                                <div className="position-relative">
                                    <img src={'https://icdn.tradew.com/file/202308/1575939/jpg/8055558.jpg?x-oss-process=image/resize,w_500/quality,Q_90/format,webp'} className="img-fluid w-100 rounded" alt="" />
                                    <div className="position-absolute" style={{top: '45%', right: '10px', transform: 'translateY(-50%)'}}>
                                        <h3 className="text-warning fw-bold">Disc <br /> Up To <br /> 30%</h3>
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
}

export default ShopDetail;
