import React from 'react'

const Footer = () => {
    return (
        <div
            className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
            data-wow-delay="0.1s"
        >
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Công ty</h5>
                        <a className="btn btn-link text-white-50" href="" style={{ textDecoration: 'none' }}>
                            Về chúng tôi
                        </a>
                        <a className="btn btn-link text-white-50" href="" style={{ textDecoration: 'none' }}>
                            Liên hệ
                        </a>
                        <a className="btn btn-link text-white-50" href="" style={{ textDecoration: 'none' }}>
                            Dịch vụ của chúng tôi
                        </a>
                        <a className="btn btn-link text-white-50" href="" style={{ textDecoration: 'none' }}>
                            Chính sách bảo mật
                        </a>
                        <a className="btn btn-link text-white-50" href="" style={{ textDecoration: 'none' }}>
                            Điều khoản &amp; Điều kiện
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Liên kết nhanh</h5>
                        <a className="btn btn-link text-white-50" href="" style={{ textDecoration: 'none' }}>
                            Về chúng tôi
                        </a>
                        <a className="btn btn-link text-white-50" href="" style={{ textDecoration: 'none' }}>
                            Liên hệ
                        </a>
                        <a className="btn btn-link text-white-50" href="" style={{ textDecoration: 'none' }}>
                            Dịch vụ của chúng tôi
                        </a>
                        <a className="btn btn-link text-white-50" href="" style={{ textDecoration: 'none' }}>
                            Chính sách bảo mật
                        </a>
                        <a className="btn btn-link text-white-50" href="" style={{ textDecoration: 'none' }}>
                            Điều khoản &amp; Điều kiện
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Liên hệ</h5>
                        <p className="mb-2">
                            <i className="fa fa-map-marker-alt me-3" />
                            123 Đường, New York, USA
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-phone-alt me-3" />
                            +012 345 67890
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-envelope me-3" />
                            info@example.com
                        </p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href="">
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="btn btn-outline-light btn-social" href="">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="btn btn-outline-light btn-social" href="">
                                <i className="fab fa-youtube" />
                            </a>
                            <a className="btn btn-outline-light btn-social" href="">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Bản tin</h5>
                        <p>Đolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                            <input
                                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                                type="text"
                                placeholder="Email của bạn"
                                style={{
                                    color: 'white',
                                    '::placeholder': { color: 'white' }
                                }}
                            />
                            <button
                                type="button"
                                className="btn btn-success py-2 position-absolute top-0 end-0 mt-2 me-2"
                            >
                                Đăng ký
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            ©{" "}
                            <a className="border-bottom" href="#">
                                Tên trang của bạn
                            </a>
                            , Tất cả quyền được bảo lưu.
                            {/*/*** Mẫu này miễn phí miễn là bạn giữ liên kết/attribution cho tác giả của footer. Nếu bạn muốn sử dụng mẫu này mà không có liên kết/attribution cho tác giả của footer, bạn có thể mua Giấy phép Gỡ bỏ Credit từ "https://htmlcodex.com/credit-removal". Cảm ơn bạn đã ủng hộ. *** /*/}
                            Thiết kế bởi{" "}
                            <a className="border-bottom" href="https://htmlcodex.com">
                                HTML Codex
                            </a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Trang chủ</a>
                                <a href="">Cookies</a>
                                <a href="">Giúp đỡ</a>
                                <a href="">Câu hỏi thường gặp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
