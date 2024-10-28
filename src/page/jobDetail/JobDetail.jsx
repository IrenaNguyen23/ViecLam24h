import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { applyPosition, fetchInterviewDetails } from '../../service/APIFunction';
import ApplicationForm from './ApplyJob';

const JobDetail = () => {
  const { interviewId } = useParams(); // Get interview ID from the URL
  const [positions, setPositions] = useState([]); // State to store positions
  const [company, setCompany] = useState({}); // Changed to object
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [selectedPosition, setSelectedPosition] = useState(null); // State to store selected position

  useEffect(() => {
    const getPositions = async (interviewId) => {
      try {
        const fetchedPositions = await fetchInterviewDetails(interviewId);
        setCompany(fetchedPositions);
        setPositions(fetchedPositions.positions.$values); // Set the positions state
      } catch (error) {
        console.error('Error fetching positions:', error);
        setError('Failed to fetch positions'); // Set error message
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    getPositions(interviewId);
  }, [interviewId]);



  if (loading) return <p>Loading...</p>; // Show loading state
  if (error) return <p>{error}</p>; // Show error message

  return (
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

      {/* Job Detail Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row gy-5 gx-4">
            <div className="col-lg-8">
              {/* Interview Details */}
              <div className="d-flex align-items-center mb-5">
                <img
                  className="flex-shrink-0 img-fluid border rounded"
                  src="https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/chi-nhanh-cong-trinh-viettel-phu-yen-tong-cong-ty-co-phan-cong-trinh-viettel-6346dea98ee86.jpg"
                  alt=""
                  style={{ width: 80, height: 80 }}
                />
                <div className="text-start ps-4">
                  <h3 className="mb-3">{company.companyName}</h3>
                  <span className="text-truncate me-3">
                    <i className="fa fa-map-marker-alt text-success me-2" />
                    {company.companyLocation}
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
                <h4 className="mb-3">Vị trí tuyển dụng</h4>
              </div>

              {selectedPosition && (
                <>
                  <div className="mb-5">
                    <h4 className="mb-3">Chi tiết Vị trí: {selectedPosition.name}</h4>
                    <p>{selectedPosition.jobDescription}</p>
                    <p><strong>Lương:</strong> ${selectedPosition.salary}</p>
                    <p><strong>Số lượng:</strong> {selectedPosition.numberOfVacancies}</p>
                    <p><strong>Thời gian làm việc:</strong> {selectedPosition.workHours} tiếng/ngày</p>
                    <div><strong>Yêu cầu:</strong>
                      {selectedPosition.candidateRequirements.$values.map(req => (
                        <p key={req.id}>{req.information}</p>
                      ))}
                    </div>
                  </div>
                  <div className="">
                    <h4 className="mb-4">Nộp Đơn Cho Công Việc</h4>
                    <ApplicationForm positionId={selectedPosition.id}/>
                  </div>
                </>
              )}
            </div>
            <div className="col-lg-4">
              {positions.length > 0 ? (
                positions.map((position) => (
                  <div key={position.id} className="bg-light rounded p-5 mb-4" onClick={() => setSelectedPosition(position)}>
                    <h4 className="mb-4">{position.name}</h4>
                    <p><i className="fa fa-map-marker-alt text-success me-2" />{company.companyLocation}</p>
                    <p><i className="fa fa-clock text-success me-2" />Toàn thời gian</p>
                    <p><i className="far fa-money-bill-alt text-success me-2" />$123 - $456</p>
                  </div>
                ))
              ) : (
                <p>Không có vị trí tuyển dụng nào.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Job Detail End */}
    </>
  );
}

export default JobDetail;
