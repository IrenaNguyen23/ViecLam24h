import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import carouselImg1 from '../../assets/img/carousel-1.jpg';
import carouselImg2 from '../../assets/img/carousel-2.jpg';

const Carousel = () => {
    return (
        <>
            {/* Carousel Start */}
            <div className="container-fluid p-0">
                <OwlCarousel
                    className="header-carousel position-relative"
                    items={1}
                    loop
                    autoplay
                    nav
                    navText={[
                        '<div class="owl-prev"><i class="bi bi-chevron-left"></i></div>',
                        '<div class="owl-next"><i class="bi bi-chevron-right"></i></div>'
                    ]}
                >
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src={carouselImg1} alt="" />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                            style={{ background: "rgba(43, 57, 64, .5)" }}
                        >
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-3 text-white animated slideInDown mb-4">
                                            Tìm công việc hoàn hảo cho bạn
                                        </h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2">
                                            Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                                            no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                                            elitr.
                                        </p>
                                        <a
                                            href=""
                                            className="btn btn-success py-md-3 px-md-5 me-3 animated slideInLeft"
                                        >
                                            Tìm việc làm
                                        </a>
                                        <a
                                            href=""
                                            className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                                        >
                                            Tìm nhân tài
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src={carouselImg2} alt="" />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                            style={{ background: "rgba(43, 57, 64, .5)" }}
                        >
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-3 text-white animated slideInDown mb-4">
                                            Tìm việc làm startup phù hợp
                                        </h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2">
                                            Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                                            no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                                            elitr.
                                        </p>
                                        <a
                                            href=""
                                            className="btn btn-success py-md-3 px-md-5 me-3 animated slideInLeft"
                                        >
                                            Tìm việc làm
                                        </a>
                                        <a
                                            href=""
                                            className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                                        >
                                            Tìm nhân tài
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
            {/* Carousel End */}
        </>
    );
};

export default Carousel;
