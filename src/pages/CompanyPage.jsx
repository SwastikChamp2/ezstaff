import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import '../CSS/main.css';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import useSidebarToggle from '../hooks/SidebarToggle';
import ProfileOverview from '../components/Profile/ProfileOverview';
import ProfileFiles from '../components/Profile/ProfileFiles';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import CompanyOverview from '../components/Company/CompanyOverview';





const CompanyPage = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const [companyName, setCompanyName] = useState('');
    const [companyID, setCompanyID] = useState('');
    const { companyId } = useParams();
    const navigate = useNavigate();



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
            const db = getFirestore();
            const companyRef = doc(db, 'Company', companyId);
            const companySnap = await getDoc(companyRef);

            if (companySnap.exists()) {
                const companyData = companySnap.data();
                setCompanyName(companyData.companyName);
                setCompanyID(companySnap.id);
            } else {
                console.log('No such document!');
            }
        };

        fetchCompanyData();
    }, [companyId]);



    return (
        <>

            <main id="main-wrapper" className="main-wrapper">
                <Header title="Profile" showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
                {/* navbar vertical */}
                {/* Sidebar */}
                <Sidebar />

                <div id="app-content">
                    {/* Container fluid */}
                    <div className="app-content-area">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                    {/* Bg */}
                                    <div className="pt-20 rounded-top cover-banner-profile" />
                                    <div className="card rounded-bottom rounded-0 smooth-shadow-sm mb-5">
                                        <div className="d-flex align-items-center justify-content-between pt-4 pb-6 px-4">
                                            <div className="d-flex align-items-center">
                                                {/* avatar */}
                                                <div className="avatar-xxl avatar-indicators avatar-online me-2 position-relative d-flex justify-content-end align-items-end mt-n10">
                                                    <img src={"https://d2jhcfgvzjqsa8.cloudfront.net/storage/2022/04/download.png"} className="avatar-xxl
                rounded-circle border border-2 " alt="Image" />
                                                    {/* <a href="#!" className="position-absolute top-0 right-0 me-2">
                            <img src={checkedmark} alt="Image" className="icon-sm" />
                          </a> */}
                                                </div>
                                                {/* text */}
                                                <div className="lh-1">
                                                    <h2 className="mb-0">
                                                        {companyName}
                                                        <a href="#!" className="text-decoration-none">
                                                        </a>
                                                    </h2>
                                                    <p className="mb-0 d-block">@{companyID}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <a href="/company-edit" className="btn btn-outline-primary d-none d-md-block cursor-pointer">Edit Company</a>
                                            </div>
                                        </div>
                                        {/* nav */}
                                        <ul className="nav nav-lt-tab px-4" id="pills-tab" role="tablist">
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                                                    onClick={() => setActiveTab('overview')}
                                                    href="#"
                                                >
                                                    Overview
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link ${activeTab === 'files' ? 'active' : ''}`}
                                                    onClick={() => setActiveTab('files')}
                                                    href="#"
                                                >
                                                    Files
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* tab content */}
                            {activeTab === 'overview' ? <CompanyOverview companyId={companyId} /> : <ProfileFiles />}
                        </div>
                    </div>
                </div>


            </main>
        </>

    )
}

export default CompanyPage;