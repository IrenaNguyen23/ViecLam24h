import React, { useState, useEffect } from 'react';
import { applyPosition, checkApplicationStatus } from '../../service/APIFunction'; // Điều chỉnh import dựa trên cấu trúc dự án của bạn
import { Form, Button } from 'react-bootstrap'; // Nhập Form và Button từ react-bootstrap

const ApplicationForm = ({ positionId }) => {
    const userId = localStorage.getItem("userId");

    // State để quản lý dữ liệu form
    const [address, setAddress] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [cvFile, setCvFile] = useState(null);
    const [hasApplied, setHasApplied] = useState(false); // Trạng thái để kiểm tra xem đã nộp đơn chưa

    // Kiểm tra xem người dùng đã nộp đơn cho vị trí này chưa
    useEffect(() => {
        const checkApplication = async () => {
            try {
                const response = await checkApplicationStatus(positionId, userId);
                // Kiểm tra xem có ứng tuyển nào của người dùng không
                const applications = response.data.$values;
                const applied = applications.some(application => application.userId === parseInt(userId));
                setHasApplied(applied); // Cập nhật trạng thái dựa trên việc đã nộp đơn hay chưa
            } catch (error) {
                console.error("Lỗi khi kiểm tra đơn ứng tuyển:", error);
            }
        };

        if (positionId && userId) {
            checkApplication();
        }
    }, [positionId, userId]);

    // Xử lý việc gửi form
    const handleSubmit = async (event) => {
        event.preventDefault(); // Ngăn chặn tải lại trang

        // Khởi tạo FormData
        const formData = new FormData();
        formData.append('UserId', userId);
        formData.append('Application.Address', address);
        formData.append('Application.CoverLetter', coverLetter);
        if (cvFile) {
            formData.append('ResumeFile', cvFile);
        }

        try {
            // Gửi đơn ứng tuyển
            const response = await applyPosition(positionId, formData);
            console.log("Đơn ứng tuyển thành công:", response);
            alert("Đơn ứng tuyển đã được gửi thành công!");
            resetForm(); // Đặt lại form sau khi gửi
            setHasApplied(true); // Đánh dấu là đã nộp đơn
        } catch (error) {
            console.error("Lỗi khi gửi đơn ứng tuyển:", error);
            alert("Có lỗi xảy ra khi gửi đơn ứng tuyển.");
        }
    };

    // Hàm để đặt lại các trường form
    const resetForm = () => {
        setAddress('');
        setCoverLetter('');
        setCvFile(null);
    };

    return (
        <div>
            {hasApplied ? (
                <div className="alert alert-warning" role="alert">
                    Bạn đã nộp đơn cho vị trí này. Không thể nộp đơn nữa.
                </div>
            ) : (
                <Form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="row g-3">
                        <div className="col-12 col-sm-6">
                            <Form.Group controlId="formAddress">
                                <Form.Control
                                    type="text"
                                    className="form-control"
                                    placeholder="Địa chỉ của bạn"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className="col-12 col-sm-6">
                            <Form.Group controlId="formCvFile">
                                <Form.Control
                                    type="file"
                                    className="form-control bg-white"
                                    onChange={(e) => setCvFile(e.target.files[0])}
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className="col-12">
                            <Form.Group controlId="formCoverLetter">
                                <Form.Control
                                    as="textarea"
                                    className="form-control"
                                    rows={5}
                                    placeholder="Thư xin việc"
                                    value={coverLetter}
                                    onChange={(e) => setCoverLetter(e.target.value)}
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className="col-12">
                            <Button variant="success" type="submit" className="w-100">
                                Nộp Đơn Ngay
                            </Button>
                        </div>
                    </div>
                </Form>
            )}
        </div>
    );
};

export default ApplicationForm;
