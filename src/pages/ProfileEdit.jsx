
import React, { useState, useEffect } from 'react';
import '../CSS/main.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { FaPlus } from "react-icons/fa";


import avatar11 from '../assets/images/avatar/avatar-11.jpg';
import Sidebar from '../components/Sidebar/Sidebar';

const ProfileEdit = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    const [experiences, setExperiences] = useState([
        { designation: '', years: '', type: 'Year' }
    ]);

    const [educations, setEducations] = useState([
        { instituteName: '', educationType: '' }
    ]);

    const addMoreExperience = () => {
        setExperiences([...experiences, { designation: '', years: '', type: 'Year' }]);
    };

    const addMoreEducation = () => {
        setEducations([...educations, { instituteName: '', educationType: '' }]);
    };

    const handleExperienceChange = (index, field, value) => {
        const updatedExperiences = experiences.map((exp, i) => {
            if (i === index) {
                return { ...exp, [field]: value };
            }
            return exp;
        });
        setExperiences(updatedExperiences);
    };

    const handleEducationChange = (index, field, value) => {
        const updatedEducations = educations.map((edu, i) => {
            if (i === index) {
                return { ...edu, [field]: value };
            }
            return edu;
        });
        setEducations(updatedEducations);
    };


    return (
        <>

            <Header title="Profile" showDropdown={showDropdown} setShowDropdown={setShowDropdown} />

            <Sidebar />


            <div id="app-content">
                {/* Container fluid */}
                <div className="app-content-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                {/* Page header */}
                                <div className=" mb-5">
                                    <h3 className="mb-0 fw-bold">Profile Edit</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-8">

                            <div className="col-xl-9 col-lg-8 col-md-12 col-12">
                                {/* card */}
                                <div className="card">
                                    {/* card body */}
                                    <div className="card-body">
                                        <div className=" mb-6">
                                            <h4 className="mb-1">General</h4>
                                        </div>
                                        <div className="row align-items-center mb-8">
                                            <div className="col-md-3 mb-3 mb-md-0">
                                                <h5 className="mb-0">Profile</h5>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="d-flex align-items-center mb-4">
                                                    <div>
                                                        <img className="image  avatar avatar-lg rounded-circle" src={avatar11} alt="Image" />
                                                    </div>
                                                    <div className="file-upload btn btn-outline-white ms-4">
                                                        <input type="file" className="file-input opacity-0" />Upload Photo
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* col */}
                                        <div className="row mb-8">
                                            <div className="col-md-3 mb-3 mb-md-0">
                                                {/* heading */}
                                                <h5 className="mb-0">Brief Bio</h5>
                                            </div>
                                            <div className="col-md-9">
                                                {/* text area */}
                                                <textarea className="form-control mb-3 border-dashed" rows="3" placeholder="Add your brief bio here..."></textarea>
                                                {/* <button type="submit" className="btn btn-outline-white">Save</button> */}
                                            </div>
                                        </div>
                                        {/* col */}
                                        <div className="row mb-8">
                                            <div className="col-md-3 mb-3 mb-md-0">
                                                {/* heading */}
                                                <h5 className="mb-0">Full Bio</h5>
                                            </div>
                                            <div className="col-md-9">
                                                {/* text area */}
                                                <textarea className="form-control mb-3 border-dashed" rows="6" placeholder="Add your full bio here..."></textarea>
                                                {/* <button type="submit" className="btn btn-outline-white">Save</button> */}
                                            </div>
                                        </div>
                                        <div>
                                            {/* border */}
                                            <div className="mb-6">
                                                <h4 className="mb-1">Basic information</h4>
                                            </div>
                                            <form>
                                                {/* row */}
                                                <div className="mb-3 row">
                                                    <label htmlFor="fullName" className="col-sm-4 col-form-label form-label">Full name</label>
                                                    <div className="col-sm-4 mb-3 mb-lg-0">
                                                        <input type="text" className="form-control" placeholder="First name" id="fullName" required />
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <input type="text" className="form-control" placeholder="Last name" id="lastName" required />
                                                    </div>
                                                </div>
                                                {/* row */}
                                                <div className="mb-3 row">
                                                    <label htmlFor="email" className="col-sm-4 col-form-label form-label">UserID</label>
                                                    <div className="col-md-8 col-12">
                                                        <input type="text" className="form-control" placeholder="userID" id="userID" required />
                                                        <p className="small mb-0 mt-3">User ID Can be edited only once </p>
                                                    </div>
                                                </div>
                                                {/* row */}
                                                <div className="mb-3 row">
                                                    <label htmlFor="email" className="col-sm-4 col-form-label form-label">Email</label>
                                                    <div className="col-md-8 col-12">
                                                        <input type="email" className="form-control" placeholder="Email" id="email" required />
                                                    </div>
                                                </div>
                                                {/* row */}
                                                <div className="mb-3 row">
                                                    <label htmlFor="phone" className="col-sm-4 col-form-label form-label">Phone <span className="text-muted">(Optional)</span></label>
                                                    <div className="col-md-8 col-12">
                                                        <input type="text" className="form-control" placeholder="Phone" id="phone" required />
                                                    </div>
                                                </div>
                                                {/* row */}
                                                {/* <div className="mb-3 row">
                                                    <label htmlFor="location" className="col-sm-4 col-form-label form-label">Location</label>
                                                    <div className="col-md-8 col-12">
                                                        <select className="form-select" id="location">
                                                            <option selected>Select Country</option>
                                                            <option value={1}>India</option>
                                                            <option value={2}>UK</option>
                                                            <option value={3}>USA</option>
                                                        </select>
                                                    </div>
                                                </div> */}
                                                {/* row */}
                                                <div className="mb-3 row">
                                                    <label htmlFor="addressLine" className="col-sm-4 col-form-label form-label">Date of birth</label>
                                                    <div className="col-md-2 col-12">
                                                        <input type="date" className="form-control" id="dateOfBirth" required />
                                                    </div>
                                                </div>
                                                {/* row */}
                                                <div className="mb-3 row">
                                                    <label htmlFor="addressLineTwo" className="col-sm-4 col-form-label form-label">Location</label>
                                                    <div className="col-md-8 col-12">
                                                        <input type="text" className="form-control" placeholder="Your Location" id="location" required />
                                                    </div>
                                                </div>
                                                {/* row */}
                                                <div className="row align-items-center">
                                                    <label htmlFor="zipcode" className="col-sm-4 col-form-label form-label">Designation <i data-feather="info" className="me-2 icon-xs" /></label>
                                                    <div className="col-md-8 col-12">
                                                        <input type="text" className="form-control" placeholder="Your current Designation" id="designation" required />
                                                    </div>
                                                    <div className="offset-md-4 col-md-8 mt-4">
                                                        <button type="submit" className="btn btn-primary"> Save
                                                            Changes</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-8">

                            <div className="col-xl-9 col-lg-8 col-md-12 col-12">
                                {/* card */}
                                <div className="card">
                                    {/* card body */}
                                    <div className="card-body">
                                        <div className=" mb-6">
                                            <h4 className="mb-1">Experience</h4>
                                        </div>
                                        <form>
                                            {experiences.map((exp, index) => (
                                                <div key={index} className="mb-4">
                                                    <div className="row mb-3">
                                                        <label className="col-sm-4 col-form-label form-label">Designation</label>
                                                        <div className="col-md-8 col-12">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Enter Designation"
                                                                value={exp.designation}
                                                                onChange={(e) => handleExperienceChange(index, 'designation', e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row align-items-center">
                                                        <label className="col-sm-4 col-form-label form-label">
                                                            Years of Experience <i data-feather="info" className="me-2 icon-xs" />
                                                        </label>
                                                        <div className="col-md-2 col-12">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                placeholder="0"
                                                                value={exp.years}
                                                                onChange={(e) => handleExperienceChange(index, 'years', e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="col-md-2 col-12">
                                                            <select
                                                                className="form-select"
                                                                value={exp.type}
                                                                onChange={(e) => handleExperienceChange(index, 'type', e.target.value)}
                                                            >
                                                                <option value="Year">Year</option>
                                                                <option value="Month">Month</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    {index !== experiences.length - 1 && <hr className="my-4" />}
                                                </div>
                                            ))}

                                            <div className="row">
                                                <div className="col-12">
                                                    <button
                                                        type="button"
                                                        className="btn btn-light d-flex align-items-center gap-2"
                                                        onClick={addMoreExperience}
                                                    >
                                                        <FaPlus size={16} />
                                                        Add More Experience
                                                    </button>
                                                </div>
                                            </div>

                                            <hr style={{ marginTop: '40px', opacity: '0.2' }} />
                                            <div className="offset-md-4 col-md-8 mt-4">
                                                <button type="submit" className="btn btn-primary">
                                                    Save Changes
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="row mb-8">

                            <div className="col-xl-9 col-lg-8 col-md-12 col-12">
                                {/* card */}
                                <div className="card">
                                    {/* card body */}
                                    <div className="card-body">
                                        <div className=" mb-6">
                                            <h4 className="mb-1">Education</h4>
                                        </div>
                                        <form>
                                            {educations.map((edu, index) => (
                                                <div key={index} className="mb-4">
                                                    <div className="row mb-3">
                                                        <label className="col-sm-4 col-form-label form-label">Institute Name</label>
                                                        <div className="col-md-8 col-12">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Enter Institute Name"
                                                                value={edu.instituteName}
                                                                onChange={(e) => handleEducationChange(index, 'instituteName', e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row align-items-center">
                                                        <label className="col-sm-4 col-form-label form-label">Education Type</label>
                                                        <div className="col-md-8 col-12">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Enter Education Type ex. B.Tech, M.Tech, B.A , etc"
                                                                value={edu.educationType}
                                                                onChange={(e) => handleEducationChange(index, 'educationType', e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    {index !== educations.length - 1 && <hr className="my-4" />}
                                                </div>
                                            ))}

                                            <div className="row">
                                                <div className="col-12">
                                                    <button
                                                        type="button"
                                                        className="btn btn-light d-flex align-items-center gap-2"
                                                        onClick={addMoreEducation}
                                                    >
                                                        <FaPlus size={16} />
                                                        Add More Education
                                                    </button>
                                                </div>
                                            </div>

                                            <hr style={{ marginTop: '40px', opacity: '0.2' }} />
                                            <div className="offset-md-4 col-md-8 mt-4">
                                                <button type="submit" className="btn btn-primary">
                                                    Save Changes
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>








                        <div className="row">

                            <div className="col-xl-9 col-lg-8 col-md-12 col-12">
                                {/* card */}
                                <div className="card mb-6">
                                    {/* card body */}
                                    <div className="card-body">
                                        <div className="mb-6">
                                            <h4 className="mb-1">Danger Zone </h4>
                                        </div>
                                        <div>
                                            {/* text */}
                                            <p>All your data, files, and submissions will be deleted and cannot be recovered.</p>
                                            <a href="#" className="btn btn-danger">Delete Account</a>
                                            <p className="small mb-0 mt-3">Feel free to contact with any <a href="#">contact@ezstaff.com</a> questions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProfileEdit;