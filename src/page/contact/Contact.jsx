import React from 'react'

const Contact = () => {
  return (
    <>
      {/* Header End */}
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Liên hệ
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <a href="#" className='text-success'>Trang chủ</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#" className='text-success'>Trang</a>
              </li>
              <li className="breadcrumb-item text-white active" aria-current="page">
                Liên hệ
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Header End */}
      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            Liên hệ với bất kỳ câu hỏi nào
          </h1>
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex align-items-center bg-light rounded p-4">
                    <div
                      className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                      style={{ width: 45, height: 45 }}
                    >
                      <i className="fa fa-map-marker-alt text-success" />
                    </div>
                    <span>Đà Nẵng, Việt Nam</span>
                  </div>
                </div>
                <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex align-items-center bg-light rounded p-4">
                    <div
                      className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                      style={{ width: 45, height: 45 }}
                    >
                      <i className="fa fa-envelope-open text-success" />
                    </div>
                    <span>khainlv@gmail.com</span>
                  </div>
                </div>
                <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex align-items-center bg-light rounded p-4">
                    <div
                      className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                      style={{ width: 45, height: 45 }}
                    >
                      <i className="fa fa-phone-alt text-success" />
                    </div>
                    <span>0702750320</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.999437737831!2d108.2175021150695!3d16.047080988253562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219eeaa9ee01f%3A0xb95b7d233ac4053e!2sDa%20Nang%2C%20Vietnam!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder={0}
                style={{ minHeight: 400, border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.5s">
                <p className="mb-4">
                  Biểu mẫu liên hệ hiện tại không hoạt động. Hãy có một biểu mẫu
                  liên hệ chức năng và hoạt động với Ajax &amp; PHP chỉ trong vài
                  phút. Chỉ cần sao chép và dán các tệp, thêm một chút mã và bạn đã
                  hoàn tất.{" "}
                  <a href="https://htmlcodex.com/contact-form">Tải xuống ngay</a>.
                </p>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Tên của bạn"
                        />
                        <label htmlFor="name">Tên của bạn</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email của bạn"
                        />
                        <label htmlFor="email">Email của bạn</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Chủ đề"
                        />
                        <label htmlFor="subject">Chủ đề</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Để lại tin nhắn ở đây"
                          id="message"
                          style={{ height: 150 }}
                          defaultValue={""}
                        />
                        <label htmlFor="message">Tin nhắn</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-success w-100 py-3" type="submit">
                        Gửi tin nhắn
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>

  )
}

export default Contact
