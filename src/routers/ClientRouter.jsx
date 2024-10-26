import React, { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Carousel from '../components/carousel/carousel';
import Spinner from '../components/spinner/Spinner';
import Footer from '../components/footer/Footer';
import Home from '../page/home/Home';
import About from '../page/about/About';
import ListJobs from '../page/listJob/ListJobs';
import JobDetail from '../page/jobDetail/JobDetail';
import Category from '../page/category/Category';
import FeedBack from '../page/feedback/FeedBack';
import Error from '../page/404/404';
import Contact from '../page/contact/contact';
import Login from '../page/auth/Login';
import SignUp from '../page/auth/SignUp';
import { AuthProvider } from '../service/AuthContext';


const ClientRouter = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Giả lập thời gian tải (có thể thay bằng logic tải dữ liệu thực tế)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Thời gian chờ là 2 giây

        return () => clearTimeout(timer); // Dọn dẹp bộ đếm thời gian
    }, []);

    return (
        <div className='container-xxl bg-white p-0'>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <AuthProvider>
                        <Header />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/list-job' element={<ListJobs />} />
                            <Route path='/job-detail' element={<JobDetail />} />
                            <Route path='/category' element={<Category />} />
                            <Route path='/testimonial' element={<FeedBack />} />
                            <Route path='/404' element={<Error />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/sign-up' element={<SignUp />} />
                        </Routes>
                        <Footer />
                    </AuthProvider>
                </>
            )}
        </div>
    );
};

export default ClientRouter;