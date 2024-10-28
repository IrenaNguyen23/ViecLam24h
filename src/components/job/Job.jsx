import React, { useEffect, useState } from 'react'
import { fetchInterviews } from '../../service/APIFunction';
import { useNavigate } from 'react-router-dom';

const Job = () => {
    const [jobs, setJobs] = useState([]);
    const navigation = useNavigate();
    useEffect(() => {
        const getJobs = async () => {
            try {
                const data = await fetchInterviews(); // Gọi hàm fetchInterviews
                setJobs(data.slice(0, 5)); // Giả sử dữ liệu trả về là một mảng
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        getJobs();
    }, []);
    const handleApplyNow = (interviewId) => {
        navigation(`/job-detail/${interviewId}`); // Navigate to the detail page
    };

    return (
        <>
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
                                {jobs.map((jobData) => {
                                    const position = jobData.positions.$values[0]; // Lấy vị trí đầu tiên trong danh sách positions
                                    return (
                                        <div className="job-item p-4 mb-4" key={jobData.id}>
                                            <div className="row g-4">
                                                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                    <img
                                                        className="flex-shrink-0 img-fluid border rounded"
                                                        src={(jobData.imagePath > 0) ? 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png':  jobData.imagePath} // Sử dụng hình ảnh từ jobData hoặc hình ảnh placeholder
                                                        alt={jobData.title}
                                                        style={{ width: 80, height: 80 }}
                                                    />
                                                    <div className="text-start ps-4">
                                                        <h5 className="mb-3">{jobData.title}</h5>
                                                        <span className="text-truncate me-3">
                                                            <i className="fa fa-map-marker-alt text-success me-2" />
                                                            {jobData.companyLocation}
                                                        </span>
                                                        <span className="text-truncate me-3">
                                                            <i className="far fa-clock text-success me-2" />
                                                            {position.workHours}
                                                        </span>
                                                        <span className="text-truncate me-0">
                                                            <i className="far fa-money-bill-alt text-success me-2" />
                                                            ${position.salary} - ${position.salary} {/* Chỉnh sửa theo cách hiển thị lương */}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                    <div className="d-flex mb-3">
                                                        <a className="btn btn-light btn-square me-3" href="">
                                                            <i className="far fa-heart text-success" />
                                                        </a>
                                                        <button className='btn btn-success' onClick={() => handleApplyNow(jobData.id)}>Nộp Đơn Ngay</button>
                                                    </div>
                                                    <small className="text-truncate">
                                                        <i className="far fa-calendar-alt text-success me-2" />
                                                        Hạn Cuối: {new Date(position.endDate).toLocaleDateString('vi-VN')} {/* Định dạng ngày */}
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                                <a className="btn btn-success py-3 px-5" href="">
                                    Xem Thêm Việc Làm
                                </a>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                {jobs.map((jobData) => {
                                    const position = jobData.positions.$values[0]; // Lấy vị trí đầu tiên trong danh sách positions
                                    return (
                                        <div className="job-item p-4 mb-4" key={jobData.id}>
                                            <div className="row g-4">
                                                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                    <img
                                                        className="flex-shrink-0 img-fluid border rounded"
                                                        src={(jobData.imagePath > 0) ? jobData.imagePath : 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png'} // Sử dụng hình ảnh từ jobData hoặc hình ảnh placeholder
                                                        alt={jobData.title}
                                                        style={{ width: 80, height: 80 }}
                                                    />
                                                    <div className="text-start ps-4">
                                                        <h5 className="mb-3">{jobData.title}</h5>
                                                        <span className="text-truncate me-3">
                                                            <i className="fa fa-map-marker-alt text-success me-2" />
                                                            {jobData.companyLocation}
                                                        </span>
                                                        <span className="text-truncate me-3">
                                                            <i className="far fa-clock text-success me-2" />
                                                            {position.workHours}
                                                        </span>
                                                        <span className="text-truncate me-0">
                                                            <i className="far fa-money-bill-alt text-success me-2" />
                                                            ${position.salary} - ${position.salary} {/* Chỉnh sửa theo cách hiển thị lương */}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                    <div className="d-flex mb-3">
                                                        <a className="btn btn-light btn-square me-3" href="">
                                                            <i className="far fa-heart text-success" />
                                                        </a>
                                                        <button className='btn btn-success' onClick={() => handleApplyNow(jobData.id)}>Nộp Đơn Ngay</button>
                                                    </div>
                                                    <small className="text-truncate">
                                                        <i className="far fa-calendar-alt text-success me-2" />
                                                        Hạn Cuối: {new Date(position.endDate).toLocaleDateString('vi-VN')} {/* Định dạng ngày */}
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                                <a className="btn btn-success py-3 px-5" href="">
                                    Xem Thêm Công Việc
                                </a>
                            </div>
                            <div id="tab-3" className="tab-pane fade show p-0">
                                {jobs.map((jobData) => {
                                    const position = jobData.positions.$values[0]; // Lấy vị trí đầu tiên trong danh sách positions
                                    return (
                                        <div className="job-item p-4 mb-4" key={jobData.id}>
                                            <div className="row g-4">
                                                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                    <img
                                                        className="flex-shrink-0 img-fluid border rounded"
                                                        src={(jobData.imagePath > 0) ? jobData.imagePath : 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png'} // Sử dụng hình ảnh từ jobData hoặc hình ảnh placeholder
                                                        alt={jobData.title}
                                                        style={{ width: 80, height: 80 }}
                                                    />
                                                    <div className="text-start ps-4">
                                                        <h5 className="mb-3">{jobData.title}</h5>
                                                        <span className="text-truncate me-3">
                                                            <i className="fa fa-map-marker-alt text-success me-2" />
                                                            {jobData.companyLocation}
                                                        </span>
                                                        <span className="text-truncate me-3">
                                                            <i className="far fa-clock text-success me-2" />
                                                            {position.workHours}
                                                        </span>
                                                        <span className="text-truncate me-0">
                                                            <i className="far fa-money-bill-alt text-success me-2" />
                                                            ${position.salary} - ${position.salary} {/* Chỉnh sửa theo cách hiển thị lương */}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                    <div className="d-flex mb-3">
                                                        <a className="btn btn-light btn-square me-3" href="">
                                                            <i className="far fa-heart text-success" />
                                                        </a>
                                                        <button className='btn btn-success' onClick={() => handleApplyNow(jobData.id)}>Nộp Đơn Ngay</button>
                                                    </div>
                                                    <small className="text-truncate">
                                                        <i className="far fa-calendar-alt text-success me-2" />
                                                        Hạn Cuối: {new Date(position.endDate).toLocaleDateString('vi-VN')} {/* Định dạng ngày */}
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
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

export default Job
