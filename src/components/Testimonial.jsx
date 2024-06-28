import React, { useEffect } from 'react';

const Testimonial = () => {
  useEffect(() => {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  }, []);

  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div className="testimonial-header text-center">
          <h4 className="text-primary">Our Testimonial</h4>
          <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          <div className="testimonial-item img-border-radius bg-light rounded p-4">
            <div className="position-relative">
              <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: 0 }}></i>
              <div className="mb-4 pb-4 border-bottom border-secondary">
                <p className="mb-0">
                "Saya baru pertama kali berbelanja di Power Store, dan saya terkesan dengan kecepatan respon tim customer service mereka."
                </p>
              </div>
              <div className="d-flex align-items-center flex-nowrap">
                <div className="bg-secondary rounded">
                  <img src={'https://www.lse.ac.uk/united-states/Assets/Images/People-images/Rohan-Mukherjee-200x200.jpg'} className="img-fluid rounded" style={{ width: '100px', height: '100px' }} alt="testimoni1" />
                </div>
                <div className="ms-4 d-block">
                  <h4 className="text-dark">Raffi P.</h4>
                  <p className="m-0 pb-3">Student</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item img-border-radius bg-light rounded p-4">
            <div className="position-relative">
              <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: 0 }}></i>
              <div className="mb-4 pb-4 border-bottom border-secondary">
                <p className="mb-0">
                "Produk yang saya beli dari Power Store benar-benar sesuai dengan deskripsi dan kualitasnya sangat baik. Sangat puas dengan pelayanan mereka!"
                </p>
              </div>
              <div className="d-flex align-items-center flex-nowrap">
                <div className="bg-secondary rounded">
                  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4jqKkFweHg76FDAyz9c2ijaczt3X2N849mFPsUnEArFKS5mROAgPeR-7UjZkxUumA94&usqp=CAU'} className="img-fluid rounded" style={{ width: '100px', height: '100px' }} alt="testimoni1" />
                </div>
                <div className="ms-4 d-block">
                  <h4 className="text-dark">Budi D.</h4>
                  <p className="m-0 pb-3">Treaveler</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item img-border-radius bg-light rounded p-4">
            <div className="position-relative">
              <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: '0' }}></i>
              <div className="mb-4 pb-4 border-bottom border-secondary">
                <p className="mb-0">
                "Pengalaman berbelanja di Power Store sungguh menyenangkan! Saya mendapatkan power bank terbaru dengan harga terjangkau."
                </p>
              </div>
              <div className="d-flex align-items-center flex-nowrap">
                <div className="bg-secondary rounded">
                  <img src={'https://www.cadeogroup.com/wp-content/uploads/2021/05/041-Large-Web-Sarah-G-Cadeo-Group-by-Erica-J-Mitchell-Photographer-001-Edit-768x768.jpg'} className="img-fluid rounded" style={{ width: '100px', height: '100px' }} alt="testimoni1" />
                </div>
                <div className="ms-4 d-block">
                  <h4 className="text-dark">Sarah W.</h4>
                  <p className="m-0 pb-3">Teacher</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
