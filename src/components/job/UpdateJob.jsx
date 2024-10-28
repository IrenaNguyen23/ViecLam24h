import React, { useEffect, useState } from 'react';
import { createPosition, fetchInterviewDetails, updateInterview } from '../../service/APIFunction';
import { useNavigate, useParams } from 'react-router-dom';
import AddPositionForm from '../positions/AddPositionForm';

const InterviewUpdateComponent = () => {
    const { interviewId } = useParams();
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);
    const [showPositionForm, setShowPositionForm] = useState(false);

    const [interviewData, setInterviewData] = useState({
        title: '',
        companyName: '',
        companyLocation: '',
        companyEmail: '',
        companyPhone: '',
        endDate: '',
    });

    useEffect(() => {
        const fetchInterviewDetailsAsync = async () => {
            try {
                const data = await fetchInterviewDetails(interviewId);
                setInterviewData({
                    title: data.title,
                    companyName: data.companyName,
                    companyLocation: data.companyLocation,
                    companyEmail: data.companyEmail,
                    companyPhone: data.companyPhone,
                    endDate: data.endDate,
                });
            } catch (error) {
                console.error(error);
            }
        };
        fetchInterviewDetailsAsync();
    }, [interviewId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInterviewData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const updatedInterview = await updateInterview(interviewId, interviewData);
            console.log('Interview updated successfully:', updatedInterview);
            setMessage("Job post updated successfully! Redirecting to home page in 3 seconds...");

            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error) {
            console.error('Error updating interview:', error);
        }
    };

    return (
        <div className="container">
            <h2>Update Interview Information</h2>
            {message && <div className="alert alert-info">{message}</div>}
            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Tiêu đề</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={interviewData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="companyName" className="form-label">Tên Công ty</label>
                    <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        name="companyName"
                        value={interviewData.companyName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="companyLocation" className="form-label">Địa điểm Công ty</label>
                    <input
                        type="text"
                        className="form-control"
                        id="companyLocation"
                        name="companyLocation"
                        value={interviewData.companyLocation}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="companyEmail" className="form-label">Email Công ty</label>
                    <input
                        type="email"
                        className="form-control"
                        id="companyEmail"
                        name="companyEmail"
                        value={interviewData.companyEmail}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="companyPhone" className="form-label">Điện thoại Công ty</label>
                    <input
                        type="text"
                        className="form-control"
                        id="companyPhone"
                        name="companyPhone"
                        value={interviewData.companyPhone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="endDate" className="form-label">Ngày kết thúc</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="endDate"
                        name="endDate"
                        value={interviewData.endDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button className="btn btn-success" type="submit">
                    Update Interview
                </button>
                
            </form>
        </div>
    );
};

export default InterviewUpdateComponent;
