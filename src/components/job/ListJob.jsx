import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchInterviews } from '../../service/APIFunction';

const InterviewListComponent = () => {
    const [interviews, setInterviews] = useState([]);

    useEffect(() => {
        const getAllInterviews = async () => {
            try {
                const interviewData = await fetchInterviews();
                setInterviews(interviewData);

            } catch (error) {
                console.error('Error fetching interviews:', error);
            }
        };
        getAllInterviews();
    }, []);
    
    return (
        <div className="container">
            <h2>Danh sách Phỏng vấn</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Tiêu đề</th>
                        <th>Tên Công ty</th>
                        <th>Địa điểm</th>
                        <th>Email</th>
                        <th>Điện thoại</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {interviews.map(interview => (
                        <tr key={interview.id}>
                            <td>{interview.title}</td>
                            <td>{interview.companyName}</td>
                            <td>{interview.companyLocation}</td>
                            <td>{interview.companyEmail}</td>
                            <td>{interview.companyPhone}</td>
                            <td>
                                <Link to={`/update-job/${interview.id}`} className="btn btn-primary">
                                    Sửa
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InterviewListComponent;
