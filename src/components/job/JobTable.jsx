import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { createInterview } from '../../service/APIFunction';
import { useNavigate } from 'react-router-dom';

const JobPostPage = () => {
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        companyName: '',
        companyLocation: '',
        companyEmail: '',
        companyPhone: '',
        userId: userId, // Nên gán giá trị từ localStorage nếu cần
        positions: [
            {
                name: '',
                jobDescription: '',
                salary: 0,
                numberOfVacancies: 0,
                jobLevel: '',
                gender: '',
                workHours: '',
                endDate: '',
                numberOfCandidates: 0,
                candidateRequirements: [{ information: '' }],
                educationRequirements: [{ information: '' }],
            },
        ],
    });
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePositionChange = (index, field, value) => {
        const updatedPositions = [...formData.positions];
        updatedPositions[index][field] = value;
        setFormData({ ...formData, positions: updatedPositions });
    };

    const handleRequirementChange = (index, type, reqIndex, value) => {
        const updatedPositions = [...formData.positions];
        updatedPositions[index][type][reqIndex].information = value;
        setFormData({ ...formData, positions: updatedPositions });
    };

    const addPosition = () => {
        setFormData({
            ...formData,
            positions: [
                ...formData.positions,
                {
                    name: '',
                    jobDescription: '',
                    salary: 0,
                    numberOfVacancies: 0,
                    jobLevel: '',
                    gender: '',
                    workHours: '',
                    endDate: '',
                    numberOfCandidates: 0,
                    candidateRequirements: [{ information: '' }],
                    educationRequirements: [{ information: '' }],
                },
            ],
        });
    };
    const handleDeletePosition = (index) => {
        const newPositions = [...formData.positions];
        newPositions.splice(index, 1); // Xóa vị trí tại chỉ số `index`
        setFormData((prevData) => ({
            ...prevData,
            positions: newPositions,
        }));
    };


    const addRequirement = (index, type) => {
        const updatedPositions = [...formData.positions];
        updatedPositions[index][type].push({ information: '' });
        setFormData({ ...formData, positions: updatedPositions });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createInterview(formData);
            setMessage("Job post created successfully! Redirecting to home page in 3 seconds...");

            // Set a timer to navigate to the home page after 3 seconds
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error) {
            setMessage("Failed to create job post. Please check your input and try again.");
            console.error("Error:", error);
        }
    };

    return (
        <Container>
            <h2 className="my-4">Job Posting Form</h2>
            <Form onSubmit={handleSubmit}>
                {/* Company Information */}
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="companyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="companyLocation">
                    <Form.Label>Company Location</Form.Label>
                    <Form.Control
                        type="text"
                        name="companyLocation"
                        value={formData.companyLocation}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="companyEmail">
                    <Form.Label>Company Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="companyEmail"
                        value={formData.companyEmail}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="companyPhone">
                    <Form.Label>Company Phone</Form.Label>
                    <Form.Control
                        type="text"
                        name="companyPhone"
                        value={formData.companyPhone}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                {formData.positions.map((position, index) => (
                    <div key={index} className="border p-3 mb-3">
                        <h5>Position {index + 1}</h5>

                        {/* Các trường nhập liệu */}
                        <Form.Group controlId={`positionName${index}`}>
                            <Form.Label>Position Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={position.name}
                                onChange={(e) => handlePositionChange(index, 'name', e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId={`jobDescription${index}`}>
                            <Form.Label>Job Description</Form.Label>
                            <Form.Control
                                type="text"
                                value={position.jobDescription}
                                onChange={(e) => handlePositionChange(index, 'jobDescription', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId={`salary${index}`}>
                            <Form.Label>Salary</Form.Label>
                            <Form.Control
                                type="number"
                                value={position.salary}
                                onChange={(e) => handlePositionChange(index, 'salary', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId={`numberOfVacancies${index}`}>
                            <Form.Label>Number of Vacancies</Form.Label>
                            <Form.Control
                                type="number"
                                value={position.numberOfVacancies}
                                onChange={(e) => handlePositionChange(index, 'numberOfVacancies', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId={`jobLevel${index}`}>
                            <Form.Label>Job Level</Form.Label>
                            <Form.Control
                                type="text"
                                value={position.jobLevel}
                                onChange={(e) => handlePositionChange(index, 'jobLevel', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId={`gender${index}`}>
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                type="text"
                                value={position.gender}
                                onChange={(e) => handlePositionChange(index, 'gender', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId={`workHours${index}`}>
                            <Form.Label>Work Hours</Form.Label>
                            <Form.Control
                                type="text"
                                value={position.workHours}
                                onChange={(e) => handlePositionChange(index, 'workHours', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId={`endDate${index}`}>
                            <Form.Label>End Date</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                value={position.endDate}
                                onChange={(e) => handlePositionChange(index, 'endDate', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId={`numberOfCandidates${index}`}>
                            <Form.Label>Number of Candidates</Form.Label>
                            <Form.Control
                                type="number"
                                value={position.numberOfCandidates}
                                onChange={(e) => handlePositionChange(index, 'numberOfCandidates', e.target.value)}
                            />
                        </Form.Group>

                        <h6>Candidate Requirements</h6>
                        {position.candidateRequirements.map((req, reqIndex) => (
                            <Form.Group key={reqIndex} controlId={`candidateRequirement${index}${reqIndex}`}>
                                <Form.Label>Requirement {reqIndex + 1}</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={req.information}
                                    onChange={(e) =>
                                        handleRequirementChange(index, 'candidateRequirements', reqIndex, e.target.value)
                                    }
                                />
                            </Form.Group>
                        ))}
                        <Button variant="secondary" onClick={() => addRequirement(index, 'candidateRequirements')}>
                            Add Candidate Requirement
                        </Button>

                        <h6>Education Requirements</h6>
                        {position.educationRequirements.map((req, reqIndex) => (
                            <Form.Group key={reqIndex} controlId={`educationRequirement${index}${reqIndex}`}>
                                <Form.Label>Requirement {reqIndex + 1}</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={req.information}
                                    onChange={(e) =>
                                        handleRequirementChange(index, 'educationRequirements', reqIndex, e.target.value)
                                    }
                                />
                            </Form.Group>
                        ))}
                        <Button variant="secondary" onClick={() => addRequirement(index, 'educationRequirements')}>
                            Add Education Requirement
                        </Button>

                        {/* Nút xóa cho vị trí */}
                        <Button variant="danger" onClick={() => handleDeletePosition(index)}>
                            Delete Position
                        </Button>
                    </div>
                ))}

                <Button variant="secondary" onClick={addPosition}>Add Position</Button>

                <Button variant="success" type="submit" className="my-5 position-absolute start-50 translate-middle">Submit</Button>
            </Form>
            {message && <div className="alert alert-info">{message}</div>}
        </Container>
    );
};

export default JobPostPage;
