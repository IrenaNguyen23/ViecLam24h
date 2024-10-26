import React from 'react'

const Error = () => {
  return (
    <>
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Lỗi 404
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
                Lỗi 404
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-success" />
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Không Tìm Thấy Trang</h1>
              <p className="mb-4">
                Chúng tôi xin lỗi, trang bạn tìm kiếm không tồn tại trên trang web
                của chúng tôi! Có thể quay lại trang chủ hoặc thử sử dụng chức năng
                tìm kiếm?
              </p>
              <a className="btn btn-success py-3 px-5" href="">
                Quay Về Trang Chủ
              </a>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Error
