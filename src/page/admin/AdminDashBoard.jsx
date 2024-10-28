import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteInterview, fetchInterviews, uploadImage } from '../../service/APIFunction';
import { Table, Button, Form, Alert, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Đảm bảo rằng Bootstrap CSS đã được nhập

const AdminDashBoard = () => {
    const [interviews, setInterviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentInterviewId, setCurrentInterviewId] = useState(null);

    useEffect(() => {
        const getInterviews = async () => {
            try {
                const data = await fetchInterviews();
                setInterviews(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getInterviews();
    }, []);

    const handleDelete = async (interviewId) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa phỏng vấn này không?")) {
            try {
                await deleteInterview(interviewId);
                setInterviews(prevInterviews => prevInterviews.filter(interview => interview.id !== interviewId));
                alert('Xóa phỏng vấn thành công!');
            } catch (error) {
                console.error('Error deleting interview:', error);
                alert('Có lỗi xảy ra khi xóa phỏng vấn.');
            }
        }
    };

    const handleImageUpload = async () => {
        if (selectedImage && currentInterviewId) {
            try {
                await uploadImage(currentInterviewId, selectedImage);
                alert('Tải lên hình ảnh thành công!');
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } catch (error) {
                console.error('Error uploading image:', error);
                alert('Có lỗi xảy ra khi tải lên hình ảnh.');
            }
        } else {
            alert('Vui lòng chọn hình ảnh trước!');
        }
    };

    const handleImageChange = (event, interviewId) => {
        setSelectedImage(event.target.files[0]);
        setCurrentInterviewId(interviewId);
    };

    if (loading) return <Spinner animation="border" variant="primary" />;
    if (error) return <Alert variant="danger">Error loading interviews: {error.message}</Alert>;

    return (
        <div className="container my-5">
            <h2 className="mb-4">Danh Sách Phỏng Vấn</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Tiêu Đề</th>
                        <th>Tên Công Ty</th>
                        <th>Địa Chỉ Công Ty</th>
                        <th>Email Công Ty</th>
                        <th>Số Điện Thoại</th>
                        <th>Hình Ảnh</th>
                        <th>Vị Trí</th>
                        <th>Hành động</th>
                        <th>Chi tiết</th>
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
                                <img src={interview.imagePath} alt={interview.title} style={{ width: '50px', height: '50px' }} />
                            </td>
                            <td>
                                <ul className="list-unstyled">
                                    {interview.positions.$values.map(position => (
                                        <li key={position.id}>{position.name}</li>
                                    ))}
                                </ul>
                                <Link to={`/add-position/${interview.id}`}>
                                    <Button variant="primary" size="sm">Thêm Vị Trí</Button>
                                </Link>
                            </td>
                            <td>
                                <Form.Group controlId={`formFile${interview.id}`}>
                                    <Form.Label>Chọn hình ảnh</Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={(event) => handleImageChange(event, interview.id)}
                                        className="mb-2"
                                    />
                                </Form.Group>
                                <Button variant="success" size="sm" onClick={handleImageUpload}>Tải lên hình ảnh</Button>
                                <Link to={`/update-job/${interview.id}`}>
                                    <Button variant="warning" size="sm">Sửa</Button>
                                </Link>
                                <Button variant="danger" size="sm" onClick={() => handleDelete(interview.id)}>Xóa</Button>
                            </td>
                            <td>
                                <Link to={`/interview/${interview.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Xem chi tiết
                                </Link>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AdminDashBoard;
