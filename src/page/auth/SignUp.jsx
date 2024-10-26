import React, { useState } from 'react';
import { register } from '../../service/APIFunction';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        try {
            const result = await register(formData);
            setMessage("Registration successful!");
        } catch (error) {
            setMessage(error.message || "Registration failed");
        }
    };

    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-success text-white" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-md-5 mt-md-4 pb-5">
                                            <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                                            <p className="text-white-50 mb-5">
                                                Please enter your login and password!
                                            </p>

                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    value={formData.username}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg"
                                                    placeholder="Username"
                                                />
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg"
                                                    placeholder="Email"
                                                />
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg"
                                                    placeholder="Password"
                                                />
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="password"
                                                    name="confirmPassword"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg"
                                                    placeholder="Confirm Password"
                                                />
                                            </div>

                                            <button
                                                className="btn btn-lg px-5 bg-primary-subtle"
                                                type="submit"
                                            >
                                                Sign Up
                                            </button>

                                            {message && <p className="mt-3 text-warning">{message}</p>}

                                            <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                                <a href="#!" className="text-white">
                                                    <i className="fab fa-facebook-f fa-lg" />
                                                </a>
                                                <a href="#!" className="text-white">
                                                    <i className="fab fa-twitter fa-lg mx-4 px-2" />
                                                </a>
                                                <a href="#!" className="text-white">
                                                    <i className="fab fa-google fa-lg" />
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                    <div>
                                        <p className="mb-0">
                                            Have an account?{" "}
                                            <a href="/login" className="text-white-50 fw-bold">
                                                Sign In
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;
