import React from 'react'
import Img1 from '../../assets/img/com-logo-1.jpg';
import Img2 from '../../assets/img/com-logo-2.jpg';
import Img3 from '../../assets/img/com-logo-3.jpg';
import Img4 from '../../assets/img/com-logo-4.jpg';
import Img5 from '../../assets/img/com-logo-5.jpg';
const ListJobs = () => {
  return (
    <>
      <>
        {/* Header End */}
        <div className="container-xxl py-5 bg-dark page-header mb-5">
          <div className="container my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Danh Sách Công Việc
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb text-uppercase">
                <li className="breadcrumb-item">
                  <a href="#" className='text-success'>Trang Chủ</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#" className='text-success'>Trang</a>
                </li>
                <li className="breadcrumb-item text-white active" aria-current="page">
                  Danh Sách Công Việc
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Header End */}
      </>

      {/* Jobs Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            Danh Sách Việc Làm
          </h1>
          <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                  style={{ textDecoration: 'none' }}
                >
                  <h6 className="mt-n1 mb-0" style={{ color: "black" }}>Nổi Bật</h6>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-2"
                  style={{ textDecoration: 'none' }}
                >
                  <h6 className="mt-n1 mb-0" style={{ color: "black" }}>Toàn Thời Gian</h6>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-3"
                  style={{ textDecoration: 'none' }}
                >
                  <h6 className="mt-n1 mb-0" style={{ color: "black" }}>Bán Thời Gian</h6>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={Img1}
                        alt=""
                        style={{ width: 80, height: 80 }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">Kỹ Sư Phần Mềm</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-success me-2" />
                          New York, USA
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-success me-2" />
                          Toàn Thời Gian
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-success me-2" />
                          $123 - $456
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <a className="btn btn-light btn-square me-3" href="">
                          <i className="far fa-heart text-success" />
                        </a>
                        <a className="btn btn-success" href="">
                          Nộp Đơn Ngay
                        </a>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-success me-2" />
                        Hạn Cuối: 01 Tháng 01, 2045
                      </small>
                    </div>
                  </div>
                </div>
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={Img2}
                        alt=""
                        style={{ width: 80, height: 80 }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">Quản Lý Marketing</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-success me-2" />
                          New York, USA
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-success me-2" />
                          Toàn Thời Gian
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-success me-2" />
                          $123 - $456
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <a className="btn btn-light btn-square me-3" href="">
                          <i className="far fa-heart text-success" />
                        </a>
                        <a className="btn btn-success" href="">
                          Nộp Đơn Ngay
                        </a>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-success me-2" />
                        Hạn Cuối: 01 Tháng 01, 2045
                      </small>
                    </div>
                  </div>
                </div>
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={Img3}
                        alt=""
                        style={{ width: 80, height: 80 }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">Nhà Thiết Kế Sản Phẩm</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-success me-2" />
                          New York, USA
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-success me-2" />
                          Toàn Thời Gian
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-success me-2" />
                          $123 - $456
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <a className="btn btn-light btn-square me-3" href="">
                          <i className="far fa-heart text-success" />
                        </a>
                        <a className="btn btn-success" href="">
                          Nộp Đơn Ngay
                        </a>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-success me-2" />
                        Hạn Cuối: 01 Tháng 01, 2045
                      </small>
                    </div>
                  </div>
                </div>
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={Img4}
                        alt=""
                        style={{ width: 80, height: 80 }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">Giám Đốc Sáng Tạo</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-success me-2" />
                          New York, USA
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-success me-2" />
                          Toàn Thời Gian
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-success me-2" />
                          $123 - $456
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <a className="btn btn-light btn-square me-3" href="">
                          <i className="far fa-heart text-success" />
                        </a>
                        <a className="btn btn-success" href="">
                          Nộp Đơn Ngay
                        </a>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-success me-2" />
                        Hạn Cuối: 01 Tháng 01, 2045
                      </small>
                    </div>
                  </div>
                </div>
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={Img5}
                        alt=""
                        style={{ width: 80, height: 80 }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">Lập Trình Viên Wordpress</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-success me-2" />
                          New York, USA
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-success me-2" />
                          Toàn Thời Gian
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-success me-2" />
                          $123 - $456
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <a className="btn btn-light btn-square me-3" href="">
                          <i className="far fa-heart text-success" />
                        </a>
                        <a className="btn btn-success" href="">
                          Nộp Đơn Ngay
                        </a>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-success me-2" />
                        Hạn Cuối: 01 Tháng 01, 2045
                      </small>
                    </div>
                  </div>
                </div>
                <a className="btn btn-success py-3 px-5" href="">
                  Xem Thêm Việc Làm
                </a>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={Img1}
                        alt=""
                        style={{ width: 80, height: 80 }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">Kỹ Sư Phần Mềm</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-success me-2" />
                          New York, USA
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-success me-2" />
                          Toàn Thời Gian
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-success me-2" />
                          $123 - $456
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <a className="btn btn-light btn-square me-3" href="">
                          <i className="far fa-heart text-success" />
                        </a>
                        <a className="btn btn-success" href="">
                          Nộp Đơn Ngay
                        </a>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-success me-2" />
                        Hạn Cuối: 01 Tháng 01, 2045
                      </small>
                    </div>
                  </div>
                </div>
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={Img2}
                        alt=""
                        style={{ width: 80, height: 80 }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">Quản Lý Marketing</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-success me-2" />
                          New York, USA
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-success me-2" />
                          Toàn Thời Gian
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-success me-2" />
                          $123 - $456
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <a className="btn btn-light btn-square me-3" href="">
                          <i className="far fa-heart text-success" />
                        </a>
                        <a className="btn btn-success" href="">
                          Nộp Đơn Ngay
                        </a>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-success me-2" />
                        Hạn Cuối: 01 Tháng 01, 2045
                      </small>
                    </div>
                  </div>
                </div>
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={Img3}
                        alt=""
                        style={{ width: 80, height: 80 }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">Nhà Thiết Kế Sản Phẩm</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-success me-2" />
                          New York, USA
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-success me-2" />
                          Toàn Thời Gian
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-success me-2" />
                          $123 - $456
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <a className="btn btn-light btn-square me-3" href="">
                          <i className="far fa-heart text-success" />
                        </a>
                        <a className="btn btn-success" href="">
                          Nộp Đơn Ngay
                        </a>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-success me-2" />
                        Hạn Cuối: 01 Tháng 01, 2045
                      </small>
                    </div>
                  </div>
                </div>
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={Img4}
                        alt=""
                        style={{ width: 80, height: 80 }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">Giám Đốc Sáng Tạo</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-success me-2" />
                          New York, USA
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-success me-2" />
                          Toàn Thời Gian
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-success me-2" />
                          $123 - $456
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <a className="btn btn-light btn-square me-3" href="">
                          <i className="far fa-heart text-success" />
                        </a>
                        <a className="btn btn-success" href="">
                          Nộp Đơn Ngay
                        </a>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-success me-2" />
                        Hạn Cuối: 01 Tháng 01, 2045
                      </small>
                    </div>
                  </div>
                </div>
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={Img5}
                        alt=""
                        style={{ width: 80, height: 80 }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">Lập Trình Viên Wordpress</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-success me-2" />
                          New York, USA
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-success me-2" />
                          Toàn Thời Gian
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-success me-2" />
                          $123 - $456
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <a className="btn btn-light btn-square me-3" href="">
                          <i className="far fa-heart text-success" />
                        </a>
                        <a className="btn btn-success" href="">
                          Nộp Đơn Ngay
                        </a>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-success me-2" />
                        Hạn Cuối: 01 Tháng 01, 2045
                      </small>
                    </div>
                  </div>
                </div>
                <a className="btn btn-success py-3 px-5" href="">
                  Xem Thêm Công Việc
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListJobs