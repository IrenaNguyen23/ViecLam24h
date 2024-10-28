import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../service/APIFunction';
import { useAuth } from '../../service/AuthContext';
import ForgotPasswordModal from '../../components/forgot/ForgotPasswordModal';
import { Alert } from 'react-bootstrap';

const Login = () => {
    const { setUser } = useAuth(); // Get the setUser function
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [alertVariant, setAlertVariant] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
    
        const result = await login(formData);
        
        if (result.success) {
            setUser(result.data); // Set user data in context
            setAlertVariant('success');
            // Navigate to the home page or perform other actions
            navigate('/');
        } else {
            setMessage(result.message); // Show the error message
            setAlertVariant('danger');
        }
    };
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-success text-white" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">
                                    <form onSubmit={handleLogin}>
                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control form-control-lg"
                                                onChange={handleChange}
                                                value={formData.email}
                                                required
                                            />
                                            <label className="form-label">Email</label>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control form-control-lg"
                                                onChange={handleChange}
                                                value={formData.password}
                                                required
                                            />
                                            <label className="form-label">Password</label>
                                        </div>
                                        <p className="small mb-5 pb-lg-2">
                                            <a className="text-white-50" href="#!" onClick={toggleModal}>Forgot password?</a>
                                        </p>
                                        <button className="btn btn-lg px-5 bg-primary-subtle" type="submit">Login</button>
                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg" /></a>
                                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2" /></a>
                                            <a href="#!" className="text-white"><i className="fab fa-google fa-lg" /></a>
                                        </div>
                                    </form>
                                    {message && <Alert variant={alertVariant}>{message}</Alert>}
                                    <div>
                                        <p className="mb-0">
                                            Don't have an account?{" "}
                                            <a href="/sign-up" className="text-white-50 fw-bold">Sign Up</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ForgotPasswordModal isOpen={modalOpen} toggle={toggleModal} />
        </>
    );
};

export default Login;
