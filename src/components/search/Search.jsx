import React from 'react';

const Search = () => {
    return (
        <div
            className="container-fluid bg-success mb-5 wow fadeIn"
            data-wow-delay="0.1s"
            style={{ padding: '35px' }}
        >
            <div className="container">
                <div className="row g-2">
                    <div className="col-md-10">
                        <div className="row g-2">
                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control border-0"
                                    placeholder="Từ khóa"
                                />
                            </div>
                            <div className="col-md-4">
                                <select className="form-select border-0">
                                    <option selected>Danh mục</option>
                                    <option value="1">Danh mục 1</option>
                                    <option value="2">Danh mục 2</option>
                                    <option value="3">Danh mục 3</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <select className="form-select border-0">
                                    <option selected>Địa điểm</option>
                                    <option value="1">Địa điểm 1</option>
                                    <option value="2">Địa điểm 2</option>
                                    <option value="3">Địa điểm 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-dark border-0 w-100">Tìm kiếm</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
