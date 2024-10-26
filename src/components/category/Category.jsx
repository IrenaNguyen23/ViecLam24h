import React from 'react'

const Category = () => {
    return (
        <>
            {/* Category Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        Khám phá theo danh mục
                    </h1>
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item rounded p-4" href="" style={{ textDecoration: 'none' }}>
                                <i className="fa fa-3x fa-mail-bulk text-success mb-4" />
                                <h6 className="mb-3" style={{ color: 'black' }}>Marketing</h6>
                                <p className="mb-0 text-success" >123 vị trí</p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item rounded p-4" href="" style={{ textDecoration: 'none' }}>
                                <i className="fa fa-3x fa-headset text-success mb-4" />
                                <h6 className="mb-3" style={{ color: 'black' }}>Chăm sóc khách hàng</h6>
                                <p className="mb-0 text-success" >123 vị trí</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item rounded p-4" href="" style={{ textDecoration: 'none' }}>
                                <i className="fa fa-3x fa-user-tie text-success mb-4" />
                                <h6 className="mb-3" style={{ color: 'black' }}>Nhân sự</h6>
                                <p className="mb-0 text-success" >123 vị trí</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item rounded p-4" href="" style={{ textDecoration: 'none' }}>
                                <i className="fa fa-3x fa-tasks text-success mb-4" />
                                <h6 className="mb-3" style={{ color: 'black' }}>Quản lý dự án</h6>
                                <p className="mb-0 text-success" >123 vị trí</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item rounded p-4" href="" style={{ textDecoration: 'none' }}>
                                <i className="fa fa-3x fa-chart-line text-success mb-4" />
                                <h6 className="mb-3" style={{ color: 'black' }}>Phát triển kinh doanh</h6>
                                <p className="mb-0 text-success" >123 vị trí</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item rounded p-4" href="" style={{ textDecoration: 'none' }}>
                                <i className="fa fa-3x fa-hands-helping text-success mb-4" />
                                <h6 className="mb-3" style={{ color: 'black' }}>Bán hàng &amp; Giao tiếp</h6>
                                <p className="mb-0 text-success" >123 vị trí</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item rounded p-4" href="" style={{ textDecoration: 'none' }}>
                                <i className="fa fa-3x fa-book-reader text-success mb-4" />
                                <h6 className="mb-3" style={{ color: 'black' }}>Giáo dục &amp; Đào tạo</h6>
                                <p className="mb-0 text-success" >123 vị trí</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item rounded p-4" href="" style={{ textDecoration: 'none' }}>
                                <i className="fa fa-3x fa-drafting-compass text-success mb-4" />
                                <h6 className="mb-3" style={{ color: 'black' }}>Thiết kế &amp; Sáng tạo</h6>
                                <p className="mb-0 text-success" >123 vị trí</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Category End */}
        </>
    )
}

export default Category
