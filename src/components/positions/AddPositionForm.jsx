import React, { useState } from 'react';
import { createPosition } from '../../service/APIFunction';
import { useNavigate, useParams } from 'react-router-dom';

const AddPositionForm = () => {
    const {interviewId} = useParams()
    const navigate = useNavigate()
    const [positionData, setPositionData] = useState({
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
        educationRequirements: [{ information: '' }]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPositionData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRequirementChange = (type, index, value) => {
        const updatedRequirements = [...positionData[type]];
        updatedRequirements[index].information = value;
        setPositionData((prevData) => ({
            ...prevData,
            [type]: updatedRequirements,
        }));
    };

    const handleAddRequirement = (type) => {
        setPositionData((prevData) => ({
            ...prevData,
            [type]: [...prevData[type], { information: '' }],
        }));
    };

    const handleAddPosition = async (e) => {
        e.preventDefault();
        try {
            await createPosition(interviewId, positionData);
            alert("Position added successfully!");
            navigate("/dash-board")
            
        } catch (error) {
            console.error('Error adding position:', error);
        }
    };

    return (
        <div className="container mt-3">
            <h3>Add New Position</h3>
            <form onSubmit={handleAddPosition}>
                {/* Position Name */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Position Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={positionData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Job Description */}
                <div className="mb-3">
                    <label htmlFor="jobDescription" className="form-label">Job Description</label>
                    <textarea
                        className="form-control"
                        id="jobDescription"
                        name="jobDescription"
                        rows="3"
                        value={positionData.jobDescription}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Salary */}
                <div className="mb-3">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input
                        type="number"
                        className="form-control"
                        id="salary"
                        name="salary"
                        value={positionData.salary}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Number of Vacancies */}
                <div className="mb-3">
                    <label htmlFor="numberOfVacancies" className="form-label">Number of Vacancies</label>
                    <input
                        type="number"
                        className="form-control"
                        id="numberOfVacancies"
                        name="numberOfVacancies"
                        value={positionData.numberOfVacancies}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Job Level */}
                <div className="mb-3">
                    <label htmlFor="jobLevel" className="form-label">Job Level</label>
                    <input
                        type="text"
                        className="form-control"
                        id="jobLevel"
                        name="jobLevel"
                        value={positionData.jobLevel}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Gender */}
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <input
                        type="text"
                        className="form-control"
                        id="gender"
                        name="gender"
                        value={positionData.gender}
                        onChange={handleChange}
                    />
                </div>

                {/* Work Hours */}
                <div className="mb-3">
                    <label htmlFor="workHours" className="form-label">Work Hours</label>
                    <input
                        type="text"
                        className="form-control"
                        id="workHours"
                        name="workHours"
                        value={positionData.workHours}
                        onChange={handleChange}
                    />
                </div>

                {/* End Date */}
                <div className="mb-3">
                    <label htmlFor="endDate" className="form-label">End Date</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="endDate"
                        name="endDate"
                        value={positionData.endDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Number of Candidates */}
                <div className="mb-3">
                    <label htmlFor="numberOfCandidates" className="form-label">Number of Candidates</label>
                    <input
                        type="number"
                        className="form-control"
                        id="numberOfCandidates"
                        name="numberOfCandidates"
                        value={positionData.numberOfCandidates}
                        onChange={handleChange}
                    />
                </div>

                {/* Candidate Requirements */}
                <div className="mb-3">
                    <label className="form-label">Candidate Requirements</label>
                    {positionData.candidateRequirements.map((req, index) => (
                        <div className="input-group mb-2" key={index}>
                            <input
                                type="text"
                                className="form-control"
                                value={req.information}
                                onChange={(e) => handleRequirementChange('candidateRequirements', index, e.target.value)}
                                required
                            />
                        </div>
                    ))}
                    <button type="button" className="btn btn-secondary" onClick={() => handleAddRequirement('candidateRequirements')}>
                        Add Candidate Requirement
                    </button>
                </div>

                {/* Education Requirements */}
                <div className="mb-3">
                    <label className="form-label">Education Requirements</label>
                    {positionData.educationRequirements.map((req, index) => (
                        <div className="input-group mb-2" key={index}>
                            <input
                                type="text"
                                className="form-control"
                                value={req.information}
                                onChange={(e) => handleRequirementChange('educationRequirements', index, e.target.value)}
                                required
                            />
                        </div>
                    ))}
                    <button type="button" className="btn btn-secondary" onClick={() => handleAddRequirement('educationRequirements')}>
                        Add Education Requirement
                    </button>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">Add Position</button>
            </form>
        </div>
    );
};


export default AddPositionForm;
