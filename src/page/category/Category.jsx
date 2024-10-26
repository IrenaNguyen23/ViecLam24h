import React from 'react'
import Category from '../../components/category/Category'
const PageCategory = () => {
  return (
    <>
    {/* Header End */}
    <div className="container-xxl py-5 bg-dark page-header mb-5">
      <div className="container my-5 pt-5 pb-4">
        <h1 className="display-3 text-white mb-3 animated slideInDown">
          Danh mục
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
              Danh mục
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Header End */}
    <Category/>
  </>
  
  )
}

export default PageCategory
