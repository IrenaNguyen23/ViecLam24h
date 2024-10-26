import React from 'react';
import Img1 from '../../assets/img/testimonial-1.jpg';
import Img2 from '../../assets/img/testimonial-2.jpg';
import Img3 from '../../assets/img/testimonial-3.jpg';
import Img4 from '../../assets/img/testimonial-4.jpg';

const FeedBack = () => {
  return (
    <>
      {/* Header Start */}
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Đánh Giá</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <a href="#" className="text-success">Trang Chủ</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#" className="text-success">Trang</a>
              </li>
              <li className="breadcrumb-item text-white active" aria-current="page">Đánh Giá</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Header End */}

      {/* Testimonial Start */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <h1 className="text-center mb-5">Khách Hàng Nói Gì Về Chúng Tôi!!!</h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-item bg-white rounded p-4">
                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid flex-shrink-0 rounded" src={Img1} alt="Testimonial 1" style={{ width: 50, height: 50 }} />
                  <div className="ps-3">
                    <h5 className="mb-1">Tên Khách Hàng 1</h5>
                    <small>Nghề Nghiệp 1</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-item bg-white rounded p-4">
                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid flex-shrink-0 rounded" src={Img2} alt="Testimonial 2" style={{ width: 50, height: 50 }} />
                  <div className="ps-3">
                    <h5 className="mb-1">Tên Khách Hàng 2</h5>
                    <small>Nghề Nghiệp 2</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-item bg-white rounded p-4">
                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid flex-shrink-0 rounded" src={Img3} alt="Testimonial 3" style={{ width: 50, height: 50 }} />
                  <div className="ps-3">
                    <h5 className="mb-1">Tên Khách Hàng 3</h5>
                    <small>Nghề Nghiệp 3</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
};

export default FeedBack;
