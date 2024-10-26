import React from 'react'

const JobDetail = () => {
  return (
    <>
      <>
        {/* Header End */}
        <div className="container-xxl py-5 bg-dark page-header mb-5">
          <div className="container my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Chi tiết Công việc
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
                  Chi tiết Công việc
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Header End */}
      </>

      {/* Job Detail Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row gy-5 gx-4">
            <div className="col-lg-8">
              <div className="d-flex align-items-center mb-5">
                <img
                  className="flex-shrink-0 img-fluid border rounded"
                  src="https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/chi-nhanh-cong-trinh-viettel-phu-yen-tong-cong-ty-co-phan-cong-trinh-viettel-6346dea98ee86.jpg"
                  alt=""
                  style={{ width: 80, height: 80 }}
                />
                <div className="text-start ps-4">
                  <h3 className="mb-3">Quản lý Marketing</h3>
                  <span className="text-truncate me-3">
                    <i className="fa fa-map-marker-alt text-success me-2" />
                    Đà Nẵng, Việt Nam
                  </span>
                  <span className="text-truncate me-3">
                    <i className="far fa-clock text-success me-2" />
                    Toàn thời gian
                  </span>
                  <span className="text-truncate me-0">
                    <i className="far fa-money-bill-alt text-success me-2" />
                    $123 - $456
                  </span>
                </div>
              </div>
              <div className="mb-5">
                <h4 className="mb-3">Mô tả công việc</h4>
                <p>
                  Dolor justo tempor duo ipsum accusam rebum gubergren erat. Elitr
                  stet dolor vero clita labore gubergren. Kasd sed ipsum elitr clita
                  rebum ut sea diam tempor. Sadipscing nonumy vero labore invidunt
                  dolor sed, eirmod dolore amet aliquyam consetetur lorem, amet
                  elitr clita et sed consetetur dolore accusam. Vero kasd nonumy
                  justo rebum stet. Ipsum amet sed lorem sea magna. Rebum vero
                  dolores dolores elitr vero dolores magna, stet sea sadipscing stet
                  et. Est voluptua et sanctus at sanctus erat vero sed sed, amet duo
                  no diam clita rebum duo, accusam tempor takimata clita stet nonumy
                  rebum est invidunt stet, dolor.
                </p>
                <h4 className="mb-3">Trách nhiệm</h4>
                <p>
                  Magna et elitr diam sed lorem. Diam diam stet erat no est est.
                  Accusam sed lorem stet voluptua sit sit at stet consetetur,
                  takimata at diam kasd gubergren elitr dolor
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-angle-right text-success me-2" />
                    Dolor justo tempor duo ipsum accusam
                  </li>
                  <li>
                    <i className="fa fa-angle-right text-success me-2" />
                    Elitr stet dolor vero clita labore gubergren
                  </li>
                  <li>
                    <i className="fa fa-angle-right text-success me-2" />
                    Rebum vero dolores dolores elitr
                  </li>
                  <li>
                    <i className="fa fa-angle-right text-success me-2" />
                    Est voluptua et sanctus at sanctus erat
                  </li>
                  <li>
                    <i className="fa fa-angle-right text-success me-2" />
                    Diam diam stet erat no est est
                  </li>
                </ul>
                <h4 className="mb-3">Trình độ</h4>
                <p>
                  Magna et elitr diam sed lorem. Diam diam stet erat no est est.
                  Accusam sed lorem stet voluptua sit sit at stet consetetur,
                  takimata at diam kasd gubergren elitr dolor
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-angle-right text-success me-2" />
                    Dolor justo tempor duo ipsum accusam
                  </li>
                  <li>
                    <i className="fa fa-angle-right text-success me-2" />
                    Elitr stet dolor vero clita labore gubergren
                  </li>
                  <li>
                    <i className="fa fa-angle-right text-success me-2" />
                    Rebum vero dolores dolores elitr
                  </li>
                  <li>
                    <i className="fa fa-angle-right text-success me-2" />
                    Est voluptua et sanctus at sanctus erat
                  </li>
                  <li>
                    <i className="fa fa-angle-right text-success me-2" />
                    Diam diam stet erat no est est
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="mb-4">Nộp Đơn Cho Công Việc</h4>
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tên của bạn"
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email của bạn"
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Website Hồ Sơ"
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="file" className="form-control bg-white" />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows={5}
                        placeholder="Thư xin việc"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-12">
                      <button className="btn btn-success w-100" type="submit">
                        Nộp Đơn Ngay
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-light rounded p-5 mb-4 wow slideInUp"
                data-wow-delay="0.1s"
              >
                <h4 className="mb-4">Tóm tắt Công việc</h4>
                <p>
                  <i className="fa fa-map-marker-alt text-success me-2" />
                  New York, Hoa Kỳ
                </p>
                <p>
                  <i className="fa fa-clock text-success me-2" />
                  Toàn thời gian
                </p>
                <p>
                  <i className="far fa-money-bill-alt text-success me-2" />
                  $123 - $456
                </p>
                <div className="d-flex justify-content-between mt-4">
                  <a className="btn btn-success" href="">
                    Ứng tuyển
                  </a>
                  <a className="btn btn-outline-success" href="">
                    Lưu Công việc
                  </a>
                </div>
              </div>
              <div
                className="bg-light rounded p-5 wow slideInUp"
                data-wow-delay="0.1s"
              >
                <h4 className="mb-4">Thông tin công ty</h4>
                <p className="mb-2">
                  <i className="fa fa-user-tie text-success me-2" />
                  Công ty ABC
                </p>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt text-success me-2" />
                  New York, Hoa Kỳ
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope text-success me-2" />
                  contact@abc.com
                </p>
                <p>
                  <i className="fa fa-phone-alt text-success me-2" />
                  (+123) 456-7890
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Job Detail End */}
    </>
  )
}

export default JobDetail
