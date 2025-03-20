import React, { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import Loader from '../Loader/Loader';

const CompanyOverview = ({ companyId }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [companyData, setCompanyData] = useState(null);

    useEffect(() => {
        if (!companyId) {
            setError('No company ID provided');
            setLoading(false);
            return;
        }

        // Create real-time listener
        const companyDocRef = doc(db, 'Company', companyId);
        const unsubscribe = onSnapshot(companyDocRef,
            (doc) => {
                if (doc.exists()) {
                    const data = doc.data();
                    setCompanyData({
                        companyDescription: data.companyDescription || '',
                        companyWebsite: data.companyWebsite || '',
                        companyMobile: data.companyMobile || '',
                        dateOfIncorporation: data.dateOfIncorporation || '',
                        companyEmail: data.companyEmail || '',
                        companyHQ: data.companyHQ || ''
                    });
                    setLoading(false);
                } else {
                    setError('Company profile not found');
                    setLoading(false);
                }
            },
            (error) => {
                setError('Error fetching company data: ' + error.message);
                setLoading(false);
            }
        );

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [companyId]);

    if (loading) return <Loader />;
    if (error) return <div>Error: {error}</div>;
    if (!companyData) return <div>No company data found</div>;

    return (
        <div>
            {/* row */}
            <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="mb-0"> Company Details</h4>
                        </div>
                        <div className="card-body">
                            {/* <h5 className="text-uppercase">Description</h5>
                            <p className="mt-2 mb-6">{companyData.companyDescription}</p> */}
                            <div className="row">
                                <div className="col-12 mb-5">
                                    <h5 className="text-uppercase">Website</h5>
                                    <a href={companyData.companyWebsite} target="_blank" rel="noopener noreferrer">
                                        {companyData.companyWebsite}
                                    </a>
                                </div>
                                <div className="col-6 mb-5">
                                    <h5 className="text-uppercase">Mobile</h5>
                                    <p className="mb-0">{companyData.companyMobile}</p>
                                </div>
                                <div className="col-6 mb-5">
                                    <h5 className="text-uppercase">Date of Incorporation</h5>
                                    <p className="mb-0">{new Date(companyData.dateOfIncorporation).toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
                                </div>
                                <div className="col-6">
                                    <h5 className="text-uppercase">Email</h5>
                                    <p className="mb-0">{companyData.companyEmail}</p>
                                </div>
                                <div className="col-6">
                                    <h5 className="text-uppercase">Headquarters</h5>
                                    <p className="mb-0">{companyData.companyHQ}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="mb-0">About Me</h4>
                        </div>
                        <div className="card-body" style={{ minHeight: '396px' }}>
                            <div className="d-md-flex justify-content-between align-items-center mb-4">
                                <p className="mt-2 mb-6">
                                    {companyData.companyDescription.split('\n\n').map((paragraph, index) => (
                                        <React.Fragment key={index}>
                                            {paragraph}
                                            <br /><br />
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyOverview;