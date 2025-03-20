import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../CSS/main.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import useSidebarToggle from '../hooks/SidebarToggle';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { HiOfficeBuilding } from "react-icons/hi";
import CustomModal from '../components/General/CustomModal';

const EditCompany = () => {
    const navigate = useNavigate();
    const { companyId } = useParams();
    const [showDropdown, setShowDropdown] = useState(false);
    const [formData, setFormData] = useState({
        companyName: '',
        companyLogo: 'https://d2jhcfgvzjqsa8.cloudfront.net/storage/2022/04/download.png',
        companyWebsite: '',
        companyDescription: '',
        dateOfIncorporation: '',
        companyEmail: '',
        companyMobile: '',
        companyHQ: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useSidebarToggle();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/signin');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    useEffect(() => {
        const fetchCompanyData = async () => {
            const companyRef = doc(db, 'Company', companyId);
            const companySnap = await getDoc(companyRef);

            if (companySnap.exists()) {
                setFormData(companySnap.data());
            } else {
                console.log('No such document!');
            }
        };

        fetchCompanyData();
    }, [companyId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            setErrorMessage('');

            const companyRef = doc(db, 'Company', companyId);
            await updateDoc(companyRef, formData);

            alert('Company updated successfully!');
            navigate(`/company/${companyId}`);
        } catch (error) {
            console.error('Error updating company:', error);
            setErrorMessage('Error updating company: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async () => {
        try {
            const companyRef = doc(db, 'Company', companyId);
            await deleteDoc(companyRef);
            alert('Company deleted successfully!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error deleting company:', error);
            setErrorMessage('Error deleting company: ' + error.message);
        }
    };

    return (
        <>
            <main id="main-wrapper" className="main-wrapper">
                <Header title="Edit Company" showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
                <Sidebar />
                <div id="app-content">
                    <div className="app-content-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div className="mb-5">
                                        <h3 className="mb-0">Edit Company</h3>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-xl-9 col-md-12 col-12">
                                        {errorMessage && (
                                            <div className="alert alert-danger" role="alert">
                                                {errorMessage}
                                            </div>
                                        )}
                                        <div className="card mb-5">
                                            <div className="card-body">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row">
                                                        <div className="mb-4 col-12">
                                                            <label className="form-label">Company Name <span className="text-danger">*</span></label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="companyName"
                                                                value={formData.companyName}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-md-3 col-12 mb-4">
                                                            <h5 className="mb-2">Company Logo </h5>
                                                            <div className="icon-shape icon-xxl border rounded position-relative">
                                                                <span className="position-absolute"> <HiOfficeBuilding size={30} /></span>
                                                                <input className="form-control border-0 opacity-0" type="file" />
                                                            </div>
                                                        </div>
                                                        <div className="mb-4 col-12">
                                                            <label className="form-label">Company Website <span className="text-danger">*</span></label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
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
                                                                name="companyHQ"
                                                                value={formData.companyHQ}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="mb-4 col-12">
                                                            <label className="form-label">Company Description</label>
                                                            <textarea
                                                                className="form-control mb-3 border-dashed"
                                                                rows="6"
                                                                name="companyDescription"
                                                                value={formData.companyDescription}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
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
                                                        <div className="mb-4 col-md-6 col-12">
                                                            <label className="form-label">Company Email</label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                name="companyEmail"
                                                                value={formData.companyEmail}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="mb-4 col-md-6 col-12">
                                                            <label className="form-label">Company Mobile</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="companyMobile"
                                                                value={formData.companyMobile}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 d-flex justify-content-end">

                                                        <button
                                                            type="button"
                                                            className="btn btn-danger me-2 "
                                                            onClick={() => setShowModal(true)}
                                                        >
                                                            Delete
                                                        </button>


                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary"
                                                            disabled={isLoading}
                                                        >
                                                            {isLoading ? 'Updating...' : 'Update'}
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

                {/* 
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm Deletion</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete this company? This action cannot be undone.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={() => { handleDelete(); setShowModal(false); }}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal> */}

                <CustomModal show={showModal} title="Delete this company ?" message=" Are you sure you want to delete this company? This action cannot be undone." onClose={() => setShowModal(false)} onDelete={() => { handleDelete(); setShowModal(false) }} />


            </main>


        </>
    );
}

export default EditCompany;