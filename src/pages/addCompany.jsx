import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import useSidebarToggle from '../hooks/SidebarToggle';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Image Imports

import profilebg from '../assets/images/avatar/avatar-11.jpg';
import avatar11 from '../assets/images/avatar/avatar-11.jpg';
import avatar2 from '../assets/images/avatar/avatar-2.jpg';
import avatar3 from '../assets/images/avatar/avatar-3.jpg';
import avatar4 from '../assets/images/avatar/avatar-4.jpg';
import { HiOfficeBuilding } from "react-icons/hi";





const AddCompany = () => {

    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    useSidebarToggle();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/signin');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    // Add form state
    const [formData, setFormData] = useState({
        companyName: '',
        companyLogo: 'https://d2jhcfgvzjqsa8.cloudfront.net/storage/2022/04/download.png',
        companyWebsite: '',
        companyDescription: '',
        dateOfIncorporation: '',
        companyId: '',
        companyEmail: '',
        companyMobile: '',
        companyHQ: '' // Added companyHQ field
    });

    // Add validation states
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [idError, setIdError] = useState('');


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/signin');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Validate company ID on change
        if (name === 'companyId') {
            validateCompanyId(value);
        }
    };

    // Validate company ID format
    const validateCompanyId = (id) => {
        if (id.length > 30) {
            setIdError('Company ID must be 30 characters or less');
            return false;
        }

        const regex = /^[a-zA-Z0-9_-]+$/;
        if (!regex.test(id) && id.length > 0) {
            setIdError('Company ID can only contain letters, numbers, hyphens (-) and underscores (_)');
            return false;
        }

        setIdError('');
        return true;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.companyName || !formData.companyWebsite || !formData.dateOfIncorporation || !formData.companyId || !formData.companyHQ) { // Added companyHQ to required fields
            setErrorMessage('Please fill in all required fields');
            return;
        }

        // Final validation for company ID
        if (!validateCompanyId(formData.companyId)) {
            return;
        }

        try {
            setIsLoading(true);
            setErrorMessage('');

            // Check if company ID already exists
            const companyRef = doc(db, 'Company', formData.companyId);
            const companyDoc = await getDoc(companyRef);

            if (companyDoc.exists()) {
                setErrorMessage('A company with this ID already exists. Please use a different ID.');
                setIsLoading(false);
                return;
            }

            // Save to Firestore
            await setDoc(companyRef, {
                companyName: formData.companyName,
                companyLogo: 'https://d2jhcfgvzjqsa8.cloudfront.net/storage/2022/04/download.png',
                companyWebsite: formData.companyWebsite,
                companyDescription: formData.companyDescription,
                dateOfIncorporation: formData.dateOfIncorporation,
                companyEmail: formData.companyEmail,
                companyMobile: formData.companyMobile,
                companyHQ: formData.companyHQ, // Added companyHQ to Firestore
                createdAt: new Date()
            });

            // Success - redirect or show message
            alert('Company added successfully!');
            navigate(`/company/${formData.companyId}`);
        } catch (error) {
            console.error('Error adding company:', error);
            setErrorMessage('Error adding company: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <>
            <main id="main-wrapper" className="main-wrapper">
                <Header title="Add Company" showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
                {/* navbar vertical */}
                <Sidebar />
                {/* Page content */}

                <div id="app-content">
                    {/* Container fluid */}
                    <div className="app-content-area">
                        <div className="container-fluid ">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    {/* Page header */}
                                    <div className="mb-5">
                                        <h3 className="mb-0 ">Add new Company</h3>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {/* row */}
                                <div className="row">
                                    <div className="col-xl-9 col-md-12 col-12">
                                        {errorMessage && (
                                            <div className="alert alert-danger" role="alert">
                                                {errorMessage}
                                            </div>
                                        )}
                                        {/* card */}
                                        <div className="card mb-5">
                                            {/* card body */}
                                            <div className="card-body">
                                                {/* form */}
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row">
                                                        {/* form group */}
                                                        <div className="mb-4 col-12">
                                                            <label className="form-label">Company Name <span className="text-danger">*</span></label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Enter company name"
                                                                name="companyName"
                                                                value={formData.companyName}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>

                                                        <div className="col-md-3 col-12 mb-4">
                                                            <div>
                                                                {/* logo */}
                                                                <h5 className="mb-2">Company Logo </h5>
                                                                <div className="icon-shape icon-xxl border rounded position-relative">
                                                                    <span className="position-absolute"> <HiOfficeBuilding size={30} /></span>
                                                                    <input className="form-control border-0 opacity-0" type="file" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mb-4 col-12">
                                                            <label className="form-label">Company Website <span className="text-danger">*</span></label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Enter company website"
                                                                name="companyWebsite"
                                                                value={formData.companyWebsite}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>

                                                        <div className="mb-4 col-12">
                                                            <label className="form-label">Company Headquarters <span className="text-danger">*</span></label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Enter company headquarters"
                                                                name="companyHQ"
                                                                value={formData.companyHQ}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>

                                                        {/* form group */}
                                                        <div className="mb-4 col-12">
                                                            <label className="form-label">Company Description</label>
                                                            <div className="col-md-12">
                                                                {/* text area */}
                                                                <textarea
                                                                    className="form-control mb-3 border-dashed"
                                                                    rows="6"
                                                                    placeholder="Tell something about the company..."
                                                                    id="briefBio"
                                                                    name="companyDescription"
                                                                    value={formData.companyDescription}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* form group */}
                                                        <div className="mb-4 col-md-6 col-12">
                                                            <label className="form-label">Date of Incorporation <span className="text-danger">*</span></label>
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                name="dateOfIncorporation"
                                                                value={formData.dateOfIncorporation}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                        {/* form group */}

                                                        {/* form group */}
                                                        {/* form group */}
                                                        <div className="mb-4 col-md-6 col-12">
                                                            <label className="form-label">Company ID <span className="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className={`form-control ${idError ? 'is-invalid' : ''}`}
                                                                placeholder="Enter unique company ID"
                                                                name="companyId"
                                                                value={formData.companyId}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                            {idError && (
                                                                <div className="invalid-feedback">
                                                                    {idError}
                                                                </div>
                                                            )}
                                                            <small className="form-text text-muted">
                                                                ID must be unique, maximum 30 characters, and can only contain letters, numbers, hyphens (-) and underscores (_)
                                                            </small>
                                                        </div>


                                                        <div className="mb-4 col-md-6 col-12">
                                                            <label className="form-label">Company Email
                                                            </label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                placeholder="Enter Company Email"
                                                                name="companyEmail"
                                                                value={formData.companyEmail}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        {/* form group */}

                                                        {/* form group */}
                                                        {/* form group */}
                                                        <div className="mb-4 col-md-6 col-12">
                                                            <label className="form-label">Company Mobile
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Enter Company Mobile"
                                                                name="companyMobile"
                                                                value={formData.companyMobile}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 d-flex justify-content-end">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary me-2"
                                                            disabled={isLoading}
                                                        >
                                                            {isLoading ? 'Creating...' : 'Create'}
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>



                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

        </>

    )
}

export default AddCompany;