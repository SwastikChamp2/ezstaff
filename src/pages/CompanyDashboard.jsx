import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import { MdHome } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa6";

// Image imports
import logo2 from "../assets/images/brand/logo/logo-2.svg";
import avatar11 from "../assets/images/avatar/avatar-11.jpg";
import avatar2 from "../assets/images/avatar/avatar-2.jpg";
import avatar3 from "../assets/images/avatar/avatar-3.jpg";
import avatar4 from "../assets/images/avatar/avatar-4.jpg";
import avatar5 from "../assets/images/avatar/avatar-5.jpg";
import avatar6 from "../assets/images/avatar/avatar-6.jpg";
import giftbox from "../assets/images/background/giftbox.png";
import brandLogo from "../assets/images/brand/logo/logo-2.svg";
import LineBarChart from '../components/Chart/LineBarChart';
import DonutChart from '../components/Chart/DoghnutChart';
import MultiRingChart from '../components/Chart/MultiRingChart';

const CompanyDashboard = () => {

    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);



    useEffect(() => {
        // Sidebar toggle functionality
        const navToggle = document.getElementById("nav-toggle");
        const mainWrapper = document.getElementById("main-wrapper");

        const handleToggle = (e) => {
            e.preventDefault();
            mainWrapper.classList.toggle("toggled");
        };

        if (navToggle && mainWrapper) {
            navToggle.addEventListener("click", handleToggle);
        }

        // Cleanup event listeners on component unmount
        return () => {
            if (navToggle) {
                navToggle.removeEventListener("click", handleToggle);
            }
        };
    }, []); // Only run once on mount



    return (
        <>
            <main id="main-wrapper" className="main-wrapper">
                <div className="header">
                    {/* navbar */}
                    <div className="navbar-custom navbar navbar-expand-lg">
                        <div className="container-fluid top-navbar px-0">
                            <a className="navbar-brand d-block d-md-none" href="#!" style={{ width: '50%', height: '50%' }}>
                                <img src={logo2} alt="Logo-image" />
                            </a>
                            <a className="nav-link has-arrow d-flex align-items-center d-none d-md-flex" href="#!" style={{ fontSize: "1.2rem" }}>
                                <span>Dashboard</span>
                            </a>
                            <a
                                id="nav-toggle"
                                href="#!"
                                className="ms-auto ms-md-0 me-0 me-lg-3"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={28}
                                    height={28}
                                    fill="currentColor"
                                    className="bi bi-text-indent-left text-muted"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </a>

                            {/*Navbar nav */}
                            <ul className="navbar-nav navbar-right-wrap ms-lg-auto d-flex nav-top-wrap align-items-center ms-4 ms-lg-0">


                                <li className="dropdown ms-2">
                                    <a
                                        className="rounded-circle"
                                        href="#!"
                                        role="button"
                                        id="dropdownUser"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setShowDropdown(!showDropdown);
                                        }}
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <div className="avatar avatar-md avatar-indicators avatar-online">
                                            <img
                                                alt="avatar"
                                                src={avatar11}
                                                className="rounded-circle"
                                            />
                                        </div>
                                    </a>
                                    {showDropdown && (
                                        <div
                                            className="dropdown-menu dropdown-menu-end show"
                                            aria-labelledby="dropdownUser"
                                            style={{
                                                display: 'block',
                                                opacity: '1',
                                                visibility: 'visible',
                                                position: 'absolute',
                                                top: '100%',
                                                right: '0',
                                                left: 'auto',
                                            }}
                                        >
                                            <div className="px-4 pb-0 pt-2">
                                                <div className="lh-1">
                                                    <h5 className="mb-1">Jitu Chauhan</h5>
                                                    {/* <a href="#!" className="text-inherit fs-6">
                                                        View my profile
                                                    </a> */}
                                                </div>
                                                <div className="dropdown-divider mt-3 mb-2" />
                                            </div>
                                            <ul className="list-unstyled">
                                                <li>





                                                    <a className="dropdown-item d-flex align-items-center" onClick={() => navigate('/profile')}>
                                                        <span className='me-2'>
                                                            <FaUser />

                                                        </span>
                                                        View Profile

                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item d-flex align-items-center cursor-pointer" >
                                                        <span className='me-2'>
                                                            <MdModeEdit />

                                                        </span>
                                                        Edit Profile

                                                    </a>
                                                </li>

                                                <li>
                                                    <a className="dropdown-item d-flex align-items-center cursor-pointer" >
                                                        <span className='me-2'>
                                                            <FaPowerOff />

                                                        </span>
                                                        Sign Out

                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>

                                {/* 
                                    <li className="dropdown stopevent ms-2">
                                        <a
                                            className="btn btn-ghost btn-icon rounded-circle"
                                            href="#!"
                                            role="button"
                                            id="dropdownNotification"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="icon-xs" data-feather="bell" />
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-lg dropdown-menu-end"
                                            aria-labelledby="dropdownNotification"
                                        >
                                            <div>
                                                <div className="border-bottom px-3 pt-2 pb-3 d-flex justify-content-between align-items-center">
                                                    <p className="mb-0 text-dark fw-medium fs-4">Notifications</p>
                                                    <a href="#!" className="text-muted">
                                                        <span>
                                                            <i className="me-1 icon-xs" data-feather="settings" />
                                                        </span>
                                                    </a>
                                                </div>
                                                <div data-simplebar="" style={{ height: 250 }}>
                                                    {/* List group */}
                                {/* 
                                                    <ul className="list-group list-group-flush notification-list-scroll">
                                                        {/* List group item */}
                                {/* 
                                                        <li className="list-group-item bg-light">
                                                            <a href="#!" className="text-muted">
                                                                <h5 className="mb-1">Rishi Chopra</h5>
                                                                <p className="mb-0">
                                                                    Mauris blandit erat id nunc blandit, ac eleifend dolor
                                                                    pretium.
                                                                </p>
                                                            </a>
                                                        </li>
                                                        {/* List group item */}
                                {/* 
                                                        <li className="list-group-item">
                                                            <a href="#!" className="text-muted">
                                                                <h5 className="mb-1">Neha Kannned</h5>
                                                                <p className="mb-0">
                                                                    Proin at elit vel est condimentum elementum id in
                                                                    ante. Maecenas et sapien metus.
                                                                </p>
                                                            </a>
                                                        </li>
                                                        {/* List group item */}
                                {/* 
                                                        <li className="list-group-item">
                                                            <a href="#!" className="text-muted">
                                                                <h5 className="mb-1">Nirmala Chauhan</h5>
                                                                <p className="mb-0">
                                                                    Morbi maximus urna lobortis elit sollicitudin
                                                                    sollicitudieget elit vel pretium.
                                                                </p>
                                                            </a>
                                                        </li>
                                                        {/* List group item */}
                                {/* 
                                                        <li className="list-group-item">
                                                            <a href="#!" className="text-muted">
                                                                <h5 className="mb-1">Sina Ray</h5>
                                                                <p className="mb-0">
                                                                    Sed aliquam augue sit amet mauris volutpat hendrerit
                                                                    sed nunc eu diam.
                                                                </p>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    */} {/*
                                                            </div>
                                                            <div className="border-top px-3 py-2 text-center">
                                                                <a href="#!" className="text-inherit">
                                                                    View all Notifications
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                    */}



                                {/* List */}

                            </ul>
                        </div>
                    </div>
                </div>
                {/* navbar vertical */}
                {/* Sidebar */}
                <div className="navbar-vertical navbar nav-dashboard">
                    <div className="h-100" data-simplebar="">
                        {/* Brand logo */}
                        <a className="navbar-brand" href="#!">
                            <img
                                src={logo2}
                                alt="dash ui - bootstrap 5 admin dashboard template"
                            />
                        </a>
                        {/* Navbar nav */}
                        <ul className="navbar-nav flex-column" id="sideNavbar">
                            {/* Nav item */}
                            <li className="nav-item">
                                <a className="nav-link has-arrow d-flex align-items-center" href="#!" style={{ fontSize: "1.2rem" }}>

                                    <span className="nav-icon me-4 icon-xxs mb-3">
                                        <MdHome />
                                    </span>

                                    <span>Dashboard</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link has-arrow d-flex align-items-center" href="#!" style={{ fontSize: "1.2rem" }}>

                                    <span className="nav-icon me-4 icon-xxs mb-3">
                                        <AiOutlineFileText />
                                    </span>

                                    <span>Submissions</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link has-arrow d-flex align-items-center" href="#!" style={{ fontSize: "1.2rem" }}>

                                    <span className="nav-icon me-4 icon-xxs mb-3">
                                        <HiUserGroup />
                                    </span>

                                    <span>Vendors</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link has-arrow d-flex align-items-center" href="#!" style={{ fontSize: "1.2rem" }}>

                                    <span className="nav-icon me-4 icon-xxs mb-3">
                                        <FaUserTie />
                                    </span>

                                    <span>Consultants</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link has-arrow d-flex align-items-center" href="#!" style={{ fontSize: "1.2rem" }}>

                                    <span className="nav-icon me-4 icon-xxs mb-3">
                                        <FaUser />
                                    </span>

                                    <span>Employees</span>
                                </a>
                            </li>





                        </ul>
                        {/* Custom Promo or Upgrade Section */}
                        {/* <div className="card bg-light shadow-none text-center mx-4 my-8">
                            <div className="card-body py-6">
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img
                                        src={giftbox}
                                        alt="dash ui - admin dashboard template"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h5>Unlimited Access</h5>
                                    <p className="fs-6 mb-4">
                                        Upgrade your plan from a Free trial, to select Business Plan.
                                        Start Now
                                    </p>
                                    <a href="#" className="btn btn-secondary btn-sm">
                                        Upgrade Now
                                    </a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* Page Content */}
                <div id="app-content">
                    <div className="app-content-area">
                        <div className="container-fluid">
                            <div className="bg-white mx-n6 mt-n6 pt-6 mb-6">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-12">
                                        {/* Page header */}
                                        <div className="d-lg-flex align-items-center justify-content-between mb-6 px-6">
                                            <div className="mb-6 mb-lg-0">
                                                <div className="d-flex align-items-center">

                                                    <div className="ms-4">
                                                        <h1 className="mb-0 h3 ">
                                                            Allure Design Ltd
                                                        </h1>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-12">
                                            {/* nav  */}
                                            <ul className="nav nav-lb-tab px-6">

                                                <li className="nav-item mx-3">
                                                    <a className="nav-link active" href="#!">
                                                        Overview
                                                    </a>
                                                </li>

                                                <li className="nav-item mx-3">
                                                    <a className="nav-link " href="#!">
                                                        Files
                                                    </a>
                                                </li>
                                                <li className="nav-item mx-3">
                                                    <a className="nav-link " href="#!">
                                                        Team
                                                    </a>
                                                </li>
                                                <li className="nav-item mx-3">
                                                    <a className="nav-link " href="#!">
                                                        Employee
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-xl-3 col-12 mb-5">
                                    {/* card  */}
                                    <div className="card h-100 card-lift">
                                        {/* card body  */}
                                        <div className="card-body">
                                            <div
                                                className="d-flex justify-content-between
              align-items-center"
                                            >
                                                <div>
                                                    <h4 className="mb-0">Task Summary</h4>
                                                </div>
                                                {/* dropdown  */}




                                            </div>


                                            {/* text center  */}
                                            <div className=" mt-4">
                                                <h3
                                                    className="display-4 fw-bold text-primary mb-0
                "
                                                >
                                                    50
                                                </h3>
                                                <p className="mb-0">Total Task Count</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-12 mb-5">
                                    {/* card  */}
                                    <div className="card h-100 card-lift">
                                        {/* card body  */}
                                        <div className="card-body">
                                            <div
                                                className="d-flex justify-content-between
              align-items-center"
                                            >
                                                <div>
                                                    <h4 className="mb-0">In Progress</h4>
                                                </div>
                                                <div>
                                                    {/* dropdown  */}
                                                    <span className="dropdown dropstart">
                                                        <a
                                                            className="btn-icon btn btn-ghost btn-sm rounded-circle"
                                                            href="#!"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            <i data-feather="more-vertical" className="icon-xs" />
                                                        </a>
                                                        <span className="dropdown-menu">
                                                            <a
                                                                className="dropdown-item d-flex align-items-center"
                                                                href="#!"
                                                            >
                                                                Action
                                                            </a>
                                                            <a
                                                                className="dropdown-item d-flex align-items-center"
                                                                href="#!"
                                                            >
                                                                Another action
                                                            </a>
                                                            <a
                                                                className="dropdown-item d-flex align-items-center"
                                                                href="#!"
                                                            >
                                                                Something else here
                                                            </a>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* text center  */}
                                            <div className="mt-4">
                                                <h3
                                                    className="display-4 fw-bold text-info mb-0
                "
                                                >
                                                    12
                                                </h3>
                                                <p className="mb-0 ">
                                                    <span className="text-dark ">6</span> In Progress
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-12 mb-5">
                                    {/* card  */}
                                    <div className="card h-100 card-lift">
                                        {/* card body  */}
                                        <div className="card-body">
                                            <div
                                                className="d-flex justify-content-between
              align-items-center"
                                            >
                                                <div>
                                                    <h4 className="mb-0">Completed</h4>
                                                </div>
                                                {/* dropdown  */}
                                                <div>
                                                    <span className="dropdown dropstart">
                                                        <a
                                                            className="btn-icon btn btn-ghost btn-sm rounded-circle"
                                                            href="#!"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            <i data-feather="more-vertical" className="icon-xs" />
                                                        </a>
                                                        <span className="dropdown-menu">
                                                            <a
                                                                className="dropdown-item d-flex align-items-center"
                                                                href="#!"
                                                            >
                                                                Action
                                                            </a>
                                                            <a
                                                                className="dropdown-item d-flex align-items-center"
                                                                href="#!"
                                                            >
                                                                Another action
                                                            </a>
                                                            <a
                                                                className="dropdown-item d-flex align-items-center"
                                                                href="#!"
                                                            >
                                                                Something else here
                                                            </a>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* text center  */}
                                            <div className="mt-4">
                                                <h3
                                                    className="display-4 fw-bold text-success mb-0
                "
                                                >
                                                    30
                                                </h3>
                                                <p className="mb-0">
                                                    <span className="text-dark ">8</span> Today Completed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-12 mb-5">
                                    {/* card  */}
                                    <div className="card h-100 card-lift">
                                        {/* card body  */}
                                        <div className="card-body">
                                            <div
                                                className="d-flex justify-content-between
              align-items-center"
                                            >
                                                <div>
                                                    <h4 className="mb-0">Overdue </h4>
                                                </div>
                                                {/* dropdown  */}
                                                <div>
                                                    <span className="dropdown dropstart">
                                                        <a
                                                            className="btn-icon btn btn-ghost btn-sm rounded-circle"
                                                            href="#!"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            <i data-feather="more-vertical" className="icon-xs" />
                                                        </a>
                                                        <span className="dropdown-menu">
                                                            <a
                                                                className="dropdown-item d-flex align-items-center"
                                                                href="#!"
                                                            >
                                                                Action
                                                            </a>
                                                            <a
                                                                className="dropdown-item d-flex align-items-center"
                                                                href="#!"
                                                            >
                                                                Another action
                                                            </a>
                                                            <a
                                                                className="dropdown-item d-flex align-items-center"
                                                                href="#!"
                                                            >
                                                                Something else here
                                                            </a>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* text center  */}
                                            <div className="mt-4">
                                                <h3
                                                    className="display-4 fw-bold text-danger mb-0
                "
                                                >
                                                    8
                                                </h3>
                                                <p className="mb-0 ">
                                                    <span className="text-dark ">4</span> Yesterday
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* row  */}
                            <div className="row">
                                <div className="col-xl-8 col-md-12 col-12 mb-5">
                                    {/* card  */}
                                    <div className="card">
                                        {/* card body  */}
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <div>
                                                <h4 className="mb-0">Task Summary</h4>
                                            </div>
                                            {/* dropdown  */}
                                            <div>
                                                <span className="dropdown dropstart">
                                                    <a
                                                        className="btn-icon btn btn-ghost btn-sm rounded-circle"
                                                        href="#!"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i data-feather="more-vertical" className="icon-xs" />
                                                    </a>
                                                    <span className="dropdown-menu">
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Action
                                                        </a>
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Another action
                                                        </a>
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Something else here
                                                        </a>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0">New vs. Closed</p>
                                            {/* chart  */}
                                            <LineBarChart />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-12 col-12 mb-5">
                                    {/* card  */}
                                    <div className="card h-100">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <div>
                                                <h4 className="mb-0 ">Task Completion Status</h4>
                                            </div>
                                            <div>
                                                {/* dropdown  */}
                                                <span className="dropdown dropstart">
                                                    <a
                                                        className="btn-icon btn btn-ghost btn-sm rounded-circle"
                                                        href="#!"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i data-feather="more-vertical" className="icon-xs" />
                                                    </a>
                                                    <span className="dropdown-menu">
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Action
                                                        </a>
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Another action
                                                        </a>
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Something else here
                                                        </a>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        {/* card body  */}
                                        <div className="card-body">
                                            {/* chart  */}
                                            <DonutChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-12 mb-5 mb-xl-0">
                                    {/* card  */}
                                    <div className="card h-100">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <div>
                                                <h4 className="mb-0">Submission Completion</h4>
                                            </div>
                                            <div>
                                                {/* dropdown  */}
                                                <span className="dropdown dropstart">
                                                    <a
                                                        className="btn-icon btn btn-ghost btn-sm rounded-circle"
                                                        href="#!"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i data-feather="more-vertical" className="icon-xs" />
                                                    </a>
                                                    <span className="dropdown-menu">
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Action
                                                        </a>
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Another action
                                                        </a>
                                                        <a
                                                            className="dropdown-item d-flex align-items-center"
                                                            href="#!"
                                                        >
                                                            Something else here
                                                        </a>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        {/* card body  */}
                                        <div className="card-body d-flex justify-content-center">
                                            {/* chart  */}
                                            <MultiRingChart />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-12 mb-5 mb-xl-0">
                                    {/* card  */}
                                    <div className="card h-100">
                                        {/* card header  */}
                                        <div className="card-header">
                                            <h4 className="mb-0">Recent Submissions</h4>
                                        </div>
                                        {/* table  */}
                                        <div className="card-body">
                                            <div className="table-responsive table-card">
                                                <table className="table text-nowrap mb-0 table-centered">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th>Submission</th>
                                                            <th>Submitted on</th>
                                                            <th>Status</th>
                                                            <th>Company</th>
                                                            <th>Employee</th>
                                                            <th />
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Tech Intern List</td>
                                                            <td>Mar, 03 2025</td>
                                                            <td>
                                                                <span
                                                                    className="badge
                badge-primary-soft"
                                                                >
                                                                    In Review
                                                                </span>
                                                            </td>
                                                            <td>Sonico</td>
                                                            <td>Rakesh Singh</td>


                                                        </tr>
                                                        <tr>
                                                            <td>Approved Candidates</td>
                                                            <td>Mar, 03 2024</td>
                                                            <td>
                                                                <span
                                                                    className="badge
                badge-info-soft"
                                                                >
                                                                    In Progress
                                                                </span>
                                                            </td>
                                                            <td>Capexgo</td>
                                                            <td>Mohit Sharma</td>


                                                        </tr>
                                                        <tr>
                                                            <td>HR Interview Notes</td>
                                                            <td>Mar 16, 2025</td>
                                                            <td>
                                                                <span
                                                                    className="badge
                badge-danger-soft "
                                                                >
                                                                    Cancel
                                                                </span>
                                                            </td>
                                                            <td>Vector.io</td>
                                                            <td>Mohini Singh</td>


                                                        </tr>
                                                        <tr>
                                                            <td> Financial Overview  </td>
                                                            <td>Mar 18, 2023</td>
                                                            <td>
                                                                <span
                                                                    className="badge badge-primary-soft
                  "
                                                                >
                                                                    In Review
                                                                </span>
                                                            </td>
                                                            <td> Stema Consultancy  </td>
                                                            <td>Alok Kumar</td>

                                                        </tr>
                                                        <tr>
                                                            <td>Investor Pitch PPT</td>
                                                            <td>Mar 18, 2023</td>
                                                            <td>
                                                                <span
                                                                    className="badge badge-primary-soft
                  text-primary"
                                                                >
                                                                    In Review
                                                                </span>
                                                            </td>

                                                            <td>Capexgo Tech</td>

                                                            <td>
                                                                Naresh Patel
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <td>Meeting Summary</td>
                                                            <td>Mar 20, 2025</td>
                                                            <td>
                                                                <span
                                                                    className="badge badge-primary-soft
                  text-primary"
                                                                >
                                                                    In Review
                                                                </span>
                                                            </td>

                                                            <td>Capexgo Tech</td>

                                                            <td>
                                                                Mohak Patel
                                                            </td>

                                                        </tr>
                                                    </tbody>
                                                </table>
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

export default CompanyDashboard;