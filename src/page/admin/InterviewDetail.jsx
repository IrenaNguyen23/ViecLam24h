import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchInterviewDetails } from '../../service/APIFunction'; // Ensure this is the correct import path
import { Table, Button, Spinner, Alert } from 'react-bootstrap';

const InterviewDetail = () => {
    const { interviewId } = useParams(); // Get ID from URL
    const [interview, setInterview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getInterviewDetail = async () => {
            try {
                const interviewData = await fetchInterviewDetails(interviewId);
                setInterview(interviewData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getInterviewDetail();
    }, [interviewId]);

    if (loading) return <Spinner animation="border" variant="primary" />;
    if (error) return <Alert variant="danger">Error loading interview details: {error.message}</Alert>;

    return (
        <div className="container my-5">
            <h2 className="mb-4">Chi Tiết Phỏng Vấn: {interview.title}</h2>
            <p><strong>Tên Công Ty:</strong> {interview.companyName}</p>
            <p><strong>Địa Chỉ Công Ty:</strong> {interview.companyLocation}</p>
            <p><strong>Email Công Ty:</strong> {interview.companyEmail}</p>
            <p><strong>Số Điện Thoại:</strong> {interview.companyPhone}</p>
            {/* You can add more interview details here as needed */}

            <h3 className="mt-5">Danh Sách Ứng Viên</h3>
            {/* Placeholder for the applicants table */}
            <p>Chưa có dữ liệu ứng viên. Bạn có thể thêm chức năng sau.</p>

            <Link to="/admin-dashboard">
                <Button variant="primary">Trở Về Danh Sách</Button>
            </Link>
        </div>
    );
};

export default InterviewDetail;
