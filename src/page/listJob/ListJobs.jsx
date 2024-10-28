import React from 'react'
import Job from '../../components/job/Job';
const ListJobs = () => {
  return (
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
      <Job/>
    </>
  )
}

export default ListJobs