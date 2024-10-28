import React, { useState } from 'react'
import { useAuth } from '../../service/AuthContext';
import { Dropdown } from 'react-bootstrap';

const Header = () => {
    const { logout } = useAuth(); // Access the user and logout function

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a
                    href="/"
                    className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
                >
                    <h1 className="m-0 text-success">ViecLam24H</h1>
                </a>
                <button
                    type="button"
                    className="navbar-toggler me-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="/" className="nav-item nav-link active">
                            Trang chủ
                        </a>
                        <a href="/about" className="nav-item nav-link">
                            Giới thiệu
                        </a>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                Việc làm
                            </a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="/list-job" className="dropdown-item">
                                    Danh sách việc làm
                                </a>
                                <a href="/job-detail" className="dropdown-item">
                                    Chi tiết việc làm
                                </a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                Trang
                            </a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="/category" className="dropdown-item">
                                    Danh mục việc làm
                                </a>
                                <a href="/testimonial" className="dropdown-item">
                                    Đánh giá
                                </a>
                                <a href="/404" className="dropdown-item">
                                    404
                                </a>
                            </div>
                        </div>
                        <a href="/contact" className="nav-item nav-link">
                            Liên hệ
                        </a>

                    </div>
                    {token ? (
                        <>
                            <a href='/post-job'
                            className="nav-item nav-link p-4 p-lg-0"
                            >
                                Đăng tin
                                <i className="fa fa-plus ms-3" />
                            </a>
                            <Dropdown>
                                <Dropdown.Toggle variant='success' id="dropdown-basic" className="rounded-0 py-4">
                                    My Profile
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/dash-board">Quản lý</Dropdown.Item>
                                    <Dropdown.Item href="/change-password">Thay đổi mật khẩu</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3" onClick={logout}>Đăng xuất</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </>

                    ) : (
                        <a
                            href="/login"
                            className="btn btn-success rounded-0 py-4 px-lg-5 d-none d-lg-block"
                        >
                            Đăng nhập
                            <i className="fa fa-arrow-right ms-3" />
                        </a>
                    )}
                </div>
            </nav>
        </>
    );
};


export default Header
