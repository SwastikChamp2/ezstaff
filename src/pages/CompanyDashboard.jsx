import React from 'react';
import '../CSS/main.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

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
    return (
        <>
            <main id="main-wrapper" className="main-wrapper">
                <div className="header">
                    {/* navbar */}
                    <div className="navbar-custom navbar navbar-expand-lg">
                        <div className="container-fluid px-0">
                            <a className="navbar-brand d-block d-md-none" href="#!">
                                <img src={logo2} alt="Image" />
                            </a>
                            <a id="nav-toggle" href="#!" className="ms-auto ms-md-0 me-0 me-lg-3">
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
                            <div className="d-none d-md-none d-lg-block">
                                {/* Form */}
                                <form action="#">
                                    <div className="input-group">
                                        <input
                                            className="form-control rounded-3 bg-transparent ps-9"
                                            type="search"
                                            defaultValue=""
                                            id="searchInput"
                                            placeholder="Search"
                                        />
                                        <span className="">
                                            <button className="btn position-absolute start-0" type="button">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={15}
                                                    height={15}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-search text-dark"
                                                >
                                                    <circle cx={11} cy={11} r={8} />
                                                    <line x1={21} y1={21} x2="16.65" y2="16.65" />
                                                </svg>
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            {/*Navbar nav */}
                            <ul className="navbar-nav navbar-right-wrap ms-lg-auto d-flex nav-top-wrap align-items-center ms-4 ms-lg-0">
                                <li>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-ghost btn-icon rounded-circle"
                                            type="button"
                                            aria-expanded="false"
                                            data-bs-toggle="dropdown"
                                            aria-label="Toggle theme (auto)"
                                        >
                                            <i className="bi theme-icon-active" />
                                            <span className="visually-hidden bs-theme-text">
                                                Toggle theme
                                            </span>
                                        </button>
                                        <ul
                                            className="dropdown-menu dropdown-menu-end shadow"
                                            aria-labelledby="bs-theme-text"
                                        >
                                            <li>
                                                <button
                                                    type="button"
                                                    className="dropdown-item d-flex align-items-center"
                                                    data-bs-theme-value="light"
                                                    aria-pressed="false"
                                                >
                                                    <i className="bi theme-icon bi-sun-fill" />
                                                    <span className="ms-2">Light</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    type="button"
                                                    className="dropdown-item d-flex align-items-center"
                                                    data-bs-theme-value="dark"
                                                    aria-pressed="false"
                                                >
                                                    <i className="bi theme-icon bi-moon-stars-fill" />
                                                    <span className="ms-2">Dark</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    type="button"
                                                    className="dropdown-item d-flex align-items-center active"
                                                    data-bs-theme-value="auto"
                                                    aria-pressed="true"
                                                >
                                                    <i className="bi theme-icon bi-circle-half" />
                                                    <span className="ms-2">Auto</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
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
                                                <ul className="list-group list-group-flush notification-list-scroll">
                                                    {/* List group item */}
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
                                            </div>
                                            <div className="border-top px-3 py-2 text-center">
                                                <a href="#!" className="text-inherit">
                                                    View all Notifications
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* List */}
                                <li className="dropdown ms-2">
                                    <a
                                        className="rounded-circle"
                                        href="#!"
                                        role="button"
                                        id="dropdownUser"
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
                                    <div
                                        className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="dropdownUser"
                                    >
                                        <div className="px-4 pb-0 pt-2">
                                            <div className="lh-1">
                                                <h5 className="mb-1">John E. Grainger</h5>
                                                <a href="#!" className="text-inherit fs-6">
                                                    View my profile
                                                </a>
                                            </div>
                                            <div className="dropdown-divider mt-3 mb-2" />
                                        </div>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a
                                                    className="dropdown-item d-flex align-items-center"
                                                    href="#!"
                                                >
                                                    Edit Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#!">
                                                    Activity Log
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item d-flex align-items-center"
                                                    href="#!"
                                                >
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#!">
                                                    Sign Out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
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
                                <a
                                    className="nav-link has-arrow  collapsed "
                                    href="#!"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navDashboard"
                                    aria-expanded="false"
                                    aria-controls="navDashboard"
                                >
                                    <i data-feather="home" className="nav-icon me-2 icon-xxs" />
                                    Dashboard
                                </a>
                                <div
                                    id="navDashboard"
                                    className="collapse "
                                    data-bs-parent="#sideNavbar"
                                >
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link "
                                                href="#!"
                                            >
                                                Analytics
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Project
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Ecommerce
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                CRM
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Finance
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Blog
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* Nav item */}
                            <li className="nav-item">
                                <div className="navbar-heading">Apps</div>
                            </li>
                            {/* Nav item */}
                            <li className="nav-item">
                                <a className="nav-link has-arrow " href="#!">
                                    Calendar
                                </a>
                            </li>
                            {/* Nav item */}
                            <li className="nav-item">
                                <a className="nav-link has-arrow " href="#!">
                                    <i
                                        data-feather="message-square"
                                        className="nav-icon me-2 icon-xxs"
                                    />
                                    Chat
                                </a>
                            </li>
                            {/* Nav item */}
                            <li className="nav-item">
                                <a
                                    className="nav-link has-arrow  collapsed "
                                    href="#!"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navecommerce"
                                    aria-expanded="false"
                                    aria-controls="navecommerce"
                                >
                                    <i
                                        data-feather="shopping-cart"
                                        className="nav-icon me-2 icon-xxs"
                                    />
                                    Ecommerce
                                </a>
                                <div
                                    id="navecommerce"
                                    className="collapse "
                                    data-bs-parent="#sideNavbar"
                                >
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Products
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Product Detail
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Add Product
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Orders
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Orders Detail
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Shopping cart
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Checkout
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Customer
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Seller
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* Nav item */}
                            <li className="nav-item">
                                <a
                                    className="nav-link has-arrow  collapsed "
                                    href="#!"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navEmail"
                                    aria-expanded="false"
                                    aria-controls="navEmail"
                                >
                                    <i data-feather="mail" className="nav-icon me-2 icon-xxs" />
                                    Email
                                </a>
                                <div id="navEmail" className="collapse " data-bs-parent="#sideNavbar">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link has-arrow " href="#!">
                                                Inbox
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Details
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Draft
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* Nav item */}
                            <li className="nav-item">
                                <a
                                    className="nav-link has-arrow  collapsed "
                                    href="#!"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navKanban"
                                    aria-expanded="false"
                                    aria-controls="navKanban"
                                >
                                    <i data-feather="layout" className="nav-icon me-2 icon-xxs" />
                                    Kanban
                                </a>
                                <div
                                    id="navKanban"
                                    className="collapse "
                                    data-bs-parent="#sideNavbar"
                                >
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Grid
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                List
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* Nav item */}
                            {/* Nav item */}
                            <li className="nav-item">
                                <a
                                    className="nav-link "
                                    href="#!"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navProject"
                                    aria-expanded="false"
                                    aria-controls="navProject"
                                >
                                    <i className="nav-icon me-2 icon-xxs" data-feather="file" />
                                    Project
                                </a>
                                <div
                                    id="navProject"
                                    className="collapse  show "
                                    data-bs-parent="#sideNavbar"
                                >
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Grid
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                List
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link "
                                                href="#!"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#navprojectSingle"
                                                aria-expanded="false"
                                                aria-controls="navprojectSingle"
                                            >
                                                Single
                                            </a>
                                            <div
                                                id="navprojectSingle"
                                                className="collapse  show "
                                                data-bs-parent="#navProject"
                                            >
                                                <ul className="nav flex-column">

                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link  active "
                                                            href="#!"
                                                        >
                                                            Overview
                                                        </a>
                                                    </li>

                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link "
                                                            href="#!"
                                                        >
                                                            Files
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link "
                                                            href="#!"
                                                        >
                                                            Team
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link "
                                                            href="#!"
                                                        >
                                                            Employee
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Create Project
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#!">
                                    File Manager
                                </a>
                            </li>
                            {/* Nav item */}
                            <li className="nav-item">
                                <a
                                    className="nav-link has-arrow  collapsed "
                                    href="#!"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navCRM"
                                    aria-expanded="false"
                                    aria-controls="navCRM"
                                >
                                    <i data-feather="pie-chart" className="nav-icon me-2 icon-xxs" />
                                    CRM
                                </a>
                                <div id="navCRM" className="collapse " data-bs-parent="#sideNavbar">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Contacts
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Company
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link has-arrow " href="#!">
                                                Deals
                                                <span className="badge text-bg-primary ms-2">New</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Deals Single
                                                <span className="badge text-bg-primary ms-2">New</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* Nav item */}
                            <li className="nav-item">
                                <a
                                    className="nav-link has-arrow  collapsed "
                                    href="#!"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navinvoice"
                                    aria-expanded="false"
                                    aria-controls="navinvoice"
                                >
                                    <i data-feather="clipboard" className="nav-icon me-2 icon-xxs" />
                                    Invoice
                                </a>
                                <div
                                    id="navinvoice"
                                    className="collapse "
                                    data-bs-parent="#sideNavbar"
                                >
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                List
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Detail
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Invoice Generator
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link  collapsed "
                                    href="#!"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navprofilePages"
                                    aria-expanded="false"
                                    aria-controls="navprofilePages"
                                >
                                    <i data-feather="user" className="nav-icon me-2 icon-xxs" />
                                    Profile
                                </a>
                                <div
                                    id="navprofilePages"
                                    className="collapse "
                                    data-bs-parent="#sideNavbar"
                                >
                                    <ul className="nav flex-column">

                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Project
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Files
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Team
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Followers
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Activity
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Settings
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* Nav item */}
                            <li className="nav-item">
                                <a
                                    className="nav-link has-arrow  collapsed "
                                    href="#!"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navblog"
                                    aria-expanded="false"
                                    aria-controls="navblog"
                                >
                                    <i data-feather="edit" className="nav-icon me-2 icon-xxs" />
                                    Blog
                                </a>
                                <div id="navblog" className="collapse " data-bs-parent="#sideNavbar">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Author
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Detail
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                            >
                                                Create Post
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* Nav item */}
                            <li className="nav-item">
                                <div className="navbar-heading">Layouts &amp; Pages</div>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link  collapsed "
                                    href="#!"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navlayoutPage"
                                    aria-expanded="false"
                                    aria-controls="navlayoutPage"
                                >
                                    <i className="nav-icon me-2 icon-xxs" data-feather="file" />
                                    Pages
                                </a>
                                <div
                                    id="navlayoutPage"
                                    className="collapse "
                                    data-bs-parent="#sideNavbar"
                                >
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Starter
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Pricing
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Maintenance
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                404 Error
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* Nav item */}
                            <li className="nav-item">
                                <a
                                    className="nav-link has-arrow  collapsed "
                                    href="#!"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navAuthentication"
                                    aria-expanded="false"
                                    aria-controls="navAuthentication"
                                >
                                    <i data-feather="lock" className="nav-icon me-2 icon-xxs" />
                                    Authentication
                                </a>
                                <div
                                    id="navAuthentication"
                                    className="collapse "
                                    data-bs-parent="#sideNavbar"
                                >
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Sign In
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Sign Up
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Forget Password
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link has-arrow  collapsed "
                                    href="#!"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navLayouts"
                                    aria-expanded="false"
                                    aria-controls="navLayouts"
                                >
                                    <i data-feather="sidebar" className="nav-icon me-2 icon-xxs" />
                                    Layouts
                                </a>
                                <div
                                    id="navLayouts"
                                    className="collapse "
                                    data-bs-parent="#sideNavbar"
                                >
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Default
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Horizontal
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* Nav item */}
                            <li className="nav-item">
                                <div className="navbar-heading">UI Components</div>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link has-arrow  collapsed "
                                    href="#!"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navComponents"
                                    aria-expanded="false"
                                    aria-controls="navComponents"
                                >
                                    <i data-feather="package" className="nav-icon me-2 icon-xxs" />
                                    Components
                                </a>
                                <div
                                    id="navComponents"
                                    className="collapse "
                                    data-bs-parent="#sideNavbar"
                                >
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                Accordions
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#!">
                                                Alert
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#!" className="nav-link ">
                                                Badge
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                Breadcrumb
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                Buttons
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                Button group
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#!" className="nav-link ">
                                                Card
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                Carousel
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                Close Button
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                Collapse
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                Dropdowns
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#!" className="nav-link ">
                                                Forms
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                List group
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#!" className="nav-link ">
                                                Modal
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                Navs and tabs
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#!" className="nav-link ">
                                                Navbar
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                Offcanvas
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                Pagination
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                Placeholders
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                Popovers
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                Progress
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                Scrollspy
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                Spinners
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#!" className="nav-link ">
                                                Tables
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#!" className="nav-link ">
                                                Toasts
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#!"
                                                className="nav-link "
                                            >
                                                Tooltips
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link has-arrow  collapsed "
                                    href="#!"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navMenuLevel"
                                    aria-expanded="false"
                                    aria-controls="navMenuLevel"
                                >
                                    <i
                                        data-feather="corner-left-down"
                                        className="nav-icon me-2 icon-xxs"
                                    />
                                    Menu Level
                                </a>
                                <div
                                    id="navMenuLevel"
                                    className="collapse "
                                    data-bs-parent="#sideNavbar"
                                >
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow "
                                                href="#!"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#navMenuLevelSecond"
                                                aria-expanded="false"
                                                aria-controls="navMenuLevelSecond"
                                            >
                                                Two Level
                                            </a>
                                            <div
                                                id="navMenuLevelSecond"
                                                className="collapse"
                                                data-bs-parent="#navMenuLevel"
                                            >
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <a className="nav-link " href="#!">
                                                            NavItem 1
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link " href="#!">
                                                            NavItem 2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link has-arrow  collapsed "
                                                href="#!"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#navMenuLevelThree"
                                                aria-expanded="false"
                                                aria-controls="navMenuLevelThree"
                                            >
                                                Three Level
                                            </a>
                                            <div
                                                id="navMenuLevelThree"
                                                className="collapse "
                                                data-bs-parent="#navMenuLevel"
                                            >
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link  collapsed "
                                                            href="#!"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#navMenuLevelThreeOne"
                                                            aria-expanded="false"
                                                            aria-controls="navMenuLevelThreeOne"
                                                        >
                                                            NavItem 1
                                                        </a>
                                                        <div
                                                            id="navMenuLevelThreeOne"
                                                            className="collapse collapse "
                                                            data-bs-parent="#navMenuLevelThree"
                                                        >
                                                            <ul className="nav flex-column">
                                                                <li className="nav-item">
                                                                    <a className="nav-link " href="#!">
                                                                        NavChild Item 1
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link " href="#!">
                                                            Nav Item 2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* Nav item */}
                            <li className="nav-item">
                                <div className="navbar-heading">Documentation</div>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link has-arrow  collapsed "
                                    href="#!"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navDocs"
                                    aria-expanded="false"
                                    aria-controls="navDocs"
                                >
                                    <i data-feather="package" className="nav-icon me-2 icon-xxs" />
                                    Docs
                                </a>
                                <div id="navDocs" className="collapse " data-bs-parent="#sideNavbar">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a href="#!" className="nav-link ">
                                                Introduction
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#!" className="nav-link ">
                                                Environment setup
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#!" className="nav-link ">
                                                Working with Gulp
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#!" className="nav-link ">
                                                Compiled Files
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#!" className="nav-link ">
                                                File Structure
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#!" className="nav-link ">
                                                Resources &amp; assets
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#!" className="nav-link ">
                                                Changelog
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <div className="card bg-light shadow-none text-center mx-4 my-8">
                            <div className="card-body py-6">
                                <img
                                    src={giftbox}
                                    alt="dash ui - admin dashboard template"
                                />
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
                        </div>
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