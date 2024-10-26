import React from 'react'
import Img1 from '../../assets/img/about-1.jpg';
import Img2 from '../../assets/img/about-2.jpg';
import Img3 from '../../assets/img/about-1.jpg';
import Img4 from '../../assets/img/about-2.jpg';
const About = () => {
  return (
    <>
      {/* Header End */}
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Giới thiệu về chúng tôi
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item ">
                <a href="#" className='text-success'>Trang chủ</a>
              </li>
              <li className="breadcrumb-item ">
                <a href="#" className='text-success'>Trang</a>
              </li>
              <li className="breadcrumb-item text-white active" aria-current="page">
                Giới thiệu
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Header End */}
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="row g-0 about-bg rounded overflow-hidden">
                <div className="col-6 text-start">
                  <img className="img-fluid w-100" src={Img1} />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid"
                    src={Img2}
                    style={{ width: "85%", marginTop: "15%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid"
                    src={Img3}
                    style={{ width: "85%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid w-100" src={Img4} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">
                Chúng tôi giúp bạn tìm kiếm công việc tốt nhất và tìm kiếm tài năng
              </h1>
              <p className="mb-4">
                Chúng tôi cam kết hỗ trợ bạn trong việc tìm kiếm việc làm phù hợp.
                Với kinh nghiệm dày dạn, chúng tôi sẽ giúp bạn kết nối với những cơ
                hội tốt nhất.
              </p>
              <p>
                <i className="fa fa-check text-success me-3" />
                Chúng tôi cam kết hỗ trợ bạn trong việc tìm kiếm việc làm
              </p>
              <p>
                <i className="fa fa-check text-success me-3" />
                Kết nối bạn với những cơ hội việc làm phù hợp
              </p>
              <p>
                <i className="fa fa-check text-success me-3" />
                Tìm kiếm tài năng phù hợp cho doanh nghiệp
              </p>
              <a className="btn btn-success py-3 px-5 mt-3" href="">
                Tìm hiểu thêm
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>

  )
}

export default About
