import React from 'react';
import '../CSS/main.css';

//Icons Import
import { BsSuitcaseLg } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsBullseye } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

// Image Imports

import logo2 from '../assets/images/brand/logo/logo-2.svg';
import avatar11 from '../assets/images/avatar/avatar-11.jpg';
import giftboxBackground from '../assets/images/background/giftbox.png';
import brandLogo1 from '../assets/images/svg/brand-logo-1.svg';
import avatar2 from '../assets/images/avatar/avatar-2.jpg';
import avatar3 from '../assets/images/avatar/avatar-3.jpg';
import brandLogo2 from '../assets/images/svg/brand-logo-2.svg';
import avatar4 from '../assets/images/avatar/avatar-4.jpg';
import avatar5 from '../assets/images/avatar/avatar-5.jpg';
import avatar6 from '../assets/images/avatar/avatar-6.jpg';
import brandLogo3 from '../assets/images/svg/brand-logo-3.svg';
import avatar7 from '../assets/images/avatar/avatar-7.jpg';
import avatar8 from '../assets/images/avatar/avatar-8.jpg';
import avatar9 from '../assets/images/avatar/avatar-9.jpg';
import brandLogo6 from '../assets/images/svg/brand-logo-6.svg';
import avatar10 from '../assets/images/avatar/avatar-10.jpg';
import brandLogo4 from '../assets/images/svg/brand-logo-4.svg';
import avatar12 from '../assets/images/avatar/avatar-12.jpg';
import brandLogo5 from '../assets/images/svg/brand-logo-5.svg';
import avatar13 from '../assets/images/avatar/avatar-13.jpg';
import avatar14 from '../assets/images/avatar/avatar-14.jpg';
import avatar15 from '../assets/images/avatar/avatar-15.jpg';
import SunburstChart from '../components/Chart/SunburstChart';



const HomeDashboard = () => {


    return (
        <>
            <main id="main-wrapper" className="main-wrapper">
                <div className="header">
                    {/* navbar */}
                    <div className="navbar-custom navbar navbar-expand-lg">
                        <div className="container-fluid px-0">
                            <a className="navbar-brand d-block d-md-none" href="./index.html">
                                <img src={logo2} alt="Image" />
                            </a>
                            <a id="nav-toggle" href="#!" className="ms-auto ms-md-0 me-0 me-lg-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" className="bi bi-text-indent-left text-muted" viewBox="0 0 16 16">
                                    <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </a>
                            <div className="d-none d-md-none d-lg-block">
                                {/* Form */}
                                <form action="#">
                                    <div className="input-group">
                                        <input className="form-control rounded-3 bg-transparent ps-9" type="search" defaultValue id="searchInput" placeholder="Search" />
                                        <span className>
                                            <button className="btn position-absolute start-0" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search text-dark">
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
                                        <button className="btn btn-ghost btn-icon rounded-circle" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
                                            <i className="bi theme-icon-active" />
                                            <span className="visually-hidden bs-theme-text">Toggle theme</span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bs-theme-text">
                                            <li>
                                                <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                                                    <i className="bi theme-icon bi-sun-fill" />
                                                    <span className="ms-2">Light</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                                                    <i className="bi theme-icon bi-moon-stars-fill" />
                                                    <span className="ms-2">Dark</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
                                                    <i className="bi theme-icon bi-circle-half" />
                                                    <span className="ms-2">Auto</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="dropdown stopevent ms-2">
                                    <a className="btn btn-ghost btn-icon rounded-circle" href="#!" role="button" id="dropdownNotification" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="icon-xs" data-feather="bell" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end" aria-labelledby="dropdownNotification">
                                        <div>
                                            <div className="border-bottom px-3 pt-2 pb-3 d-flex justify-content-between align-items-center">
                                                <p className="mb-0 text-dark fw-medium fs-4">Notifications</p>
                                                <a href="#!" className="text-muted">
                                                    <span>
                                                        <i className="me-1 icon-xs" data-feather="settings" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div data-simplebar style={{ "height": "250px" }}>
                                                {/* List group */}
                                                <ul className="list-group list-group-flush notification-list-scroll">
                                                    {/* List group item */}
                                                    <li className="list-group-item bg-light">
                                                        <a href="#!" className="text-muted">
                                                            <h5 className="mb-1">Rishi Chopra</h5>
                                                            <p className="mb-0">Mauris blandit erat id nunc blandit, ac eleifend dolor pretium.</p>
                                                        </a>
                                                    </li>
                                                    {/* List group item */}
                                                    <li className="list-group-item">
                                                        <a href="#!" className="text-muted">
                                                            <h5 className="mb-1">Neha Kannned</h5>
                                                            <p className="mb-0">Proin at elit vel est condimentum elementum id in ante. Maecenas et sapien metus.</p>
                                                        </a>
                                                    </li>
                                                    {/* List group item */}
                                                    <li className="list-group-item">
                                                        <a href="#!" className="text-muted">
                                                            <h5 className="mb-1">Nirmala Chauhan</h5>
                                                            <p className="mb-0">Morbi maximus urna lobortis elit sollicitudin sollicitudieget elit vel pretium.</p>
                                                        </a>
                                                    </li>
                                                    {/* List group item */}
                                                    <li className="list-group-item">
                                                        <a href="#!" className="text-muted">
                                                            <h5 className="mb-1">Sina Ray</h5>
                                                            <p className="mb-0">Sed aliquam augue sit amet mauris volutpat hendrerit sed nunc eu diam.</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="border-top px-3 py-2 text-center">
                                                <a href="#!" className="text-inherit">View all Notifications</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* List */}
                                {/* <li className="dropdown ms-2">
                                    <a className="rounded-circle" href="#!" role="button" id="dropdownUser" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="avatar avatar-md avatar-indicators avatar-online">
                                            <img alt="avatar" src={avatar11} className="rounded-circle" />
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser">
                                        <div className="px-4 pb-0 pt-2">
                                            <div className="lh-1">
                                                <h5 className="mb-1">John E. Grainger</h5>
                                                <a href="#!" className="text-inherit fs-6">View my profile</a>
                                            </div>
                                            <div className="dropdown-divider mt-3 mb-2" />
                                        </div>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a className="dropdown-item d-flex align-items-center" href="#!">
                                                    <i className="me-2 icon-xxs dropdown-item-icon" data-feather="user" />
                                                    Edit Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#!">
                                                    <i className="me-2 icon-xxs dropdown-item-icon" data-feather="activity" />
                                                    Activity Log
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-flex align-items-center" href="#!">
                                                    <i className="me-2 icon-xxs dropdown-item-icon" data-feather="settings" />
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./index.html">
                                                    <i className="me-2 icon-xxs dropdown-item-icon" data-feather="power" />
                                                    Sign Out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* navbar vertical */}
                <div className="app-menu">
                    {/* Sidebar */}
                    <div className="navbar-vertical navbar nav-dashboard">
                        <div className="h-100" data-simplebar>
                            {/* Brand logo */}
                            <a className="navbar-brand" href="./index.html">
                                <img src={logo2} alt="dash ui - bootstrap 5 admin dashboard template" />
                            </a>
                            {/* Navbar nav */}
                            <ul className="navbar-nav flex-column" id="sideNavbar">
                                {/* Nav item */}
                                <li className="nav-item">
                                    <a className="nav-link has-arrow " href="#!" data-bs-toggle="collapse" data-bs-target="#navDashboard" aria-expanded="false" aria-controls="navDashboard">
                                        <i data-feather="home" className="nav-icon me-2 icon-xxs" />
                                        Dashboard
                                    </a>
                                    <div id="navDashboard" className="collapse  show " data-bs-parent="#sideNavbar">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/dashboard-analytics.html">Analytics</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link  active " href="./index.html">Project</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/dashboard-ecommerce.html">Ecommerce</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/dashboard-crm.html">CRM</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/dashboard-finance.html">Finance</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/dashboard-blog.html">Blog</a>
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
                                    <a className="nav-link has-arrow " href="./pages/calendar.html">Calendar</a>
                                </li>
                                {/* Nav item */}
                                <li className="nav-item">
                                    <a className="nav-link has-arrow " href="./pages/chat-app.html">
                                        <i data-feather="message-square" className="nav-icon me-2 icon-xxs" />
                                        Chat
                                    </a>
                                </li>
                                {/* Nav item */}
                                <li className="nav-item">
                                    <a className="nav-link has-arrow  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navecommerce" aria-expanded="false" aria-controls="navecommerce">
                                        <i data-feather="shopping-cart" className="nav-icon me-2 icon-xxs" />
                                        Ecommerce
                                    </a>
                                    <div id="navecommerce" className="collapse " data-bs-parent="#sideNavbar">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/ecommerce-products.html">Products</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/ecommerce-products-details.html">Product Detail</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/ecommerce-product-edit.html">Add Product</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/ecommerce-order-list.html">Orders</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/ecommerce-order-detail.html">Orders Detail</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/ecommerce-cart.html">Shopping cart</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/ecommerce-checkout.html">Checkout</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/ecommerce-customer.html">Customer</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/ecommerce-seller.html">Seller</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* Nav item */}
                                <li className="nav-item">
                                    <a className="nav-link has-arrow  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navEmail" aria-expanded="false" aria-controls="navEmail">
                                        <i data-feather="mail" className="nav-icon me-2 icon-xxs" />
                                        Email
                                    </a>
                                    <div id="navEmail" className="collapse " data-bs-parent="#sideNavbar">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/mail.html">Inbox</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/mail-details.html">Details</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/mail-draft.html">Draft</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* Nav item */}
                                <li className="nav-item">
                                    <a className="nav-link has-arrow  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navKanban" aria-expanded="false" aria-controls="navKanban">
                                        <i data-feather="layout" className="nav-icon me-2 icon-xxs" />
                                        Kanban
                                    </a>
                                    <div id="navKanban" className="collapse " data-bs-parent="#sideNavbar">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/task-kanban-grid.html">Grid</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/task-kanban-list.html">List</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* Nav item */}
                                {/* Nav item */}
                                <li className="nav-item">
                                    <a className="nav-link  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navProject" aria-expanded="false" aria-controls="navProject">
                                        <i className="nav-icon me-2 icon-xxs" data-feather="file" />
                                        Project
                                    </a>
                                    <div id="navProject" className="collapse " data-bs-parent="#sideNavbar">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/project-grid.html">Grid</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/project-list.html">List</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navprojectSingle" aria-expanded="false" aria-controls="navprojectSingle">
                                                    Single
                                                </a>
                                                <div id="navprojectSingle" className="collapse " data-bs-parent="#navProject">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a className="nav-link " href="./pages/project-overview.html">Overview</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link " href="./pages/project-task.html">Task</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link " href="./pages/project-budget.html">Budget</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link " href="./pages/project-files.html">Files</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link " href="./pages/project-team.html">Team</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/add-project.html">Create Project</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="./pages/apps-file-manager.html">
                                        <i data-feather="folder-plus" className="nav-icon me-2 icon-xxs" />
                                        File Manager
                                    </a>
                                </li>
                                {/* Nav item */}
                                <li className="nav-item">
                                    <a className="nav-link has-arrow  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navCRM" aria-expanded="false" aria-controls="navCRM">
                                        <i data-feather="pie-chart" className="nav-icon me-2 icon-xxs" />
                                        CRM
                                    </a>
                                    <div id="navCRM" className="collapse " data-bs-parent="#sideNavbar">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/crm-contacts.html">Contacts</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/crm-company.html">Company</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/deals.html">
                                                    Deals
                                                    <span className="badge text-bg-primary ms-2">New</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/deals-single.html">
                                                    Deals Single
                                                    <span className="badge text-bg-primary ms-2">New</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* Nav item */}
                                <li className="nav-item">
                                    <a className="nav-link has-arrow  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navinvoice" aria-expanded="false" aria-controls="navinvoice">
                                        <i data-feather="clipboard" className="nav-icon me-2 icon-xxs" />
                                        Invoice
                                    </a>
                                    <div id="navinvoice" className="collapse " data-bs-parent="#sideNavbar">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/invoice-list.html">List</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/invoice-detail.html">Detail</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/invoice-generator.html">Invoice Generator</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navprofilePages" aria-expanded="false" aria-controls="navprofilePages">
                                        <i data-feather="user" className="nav-icon me-2 icon-xxs" />
                                        Profile
                                    </a>
                                    <div id="navprofilePages" className="collapse " data-bs-parent="#sideNavbar">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/profile-overview.html">Overview</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/profile-project.html">Project</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/profile-files.html">Files</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/profile-team.html">Team</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/profile-followers.html">Followers</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/profile-activity.html">Activity</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/profile-settings.html">Settings</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* Nav item */}
                                <li className="nav-item">
                                    <a className="nav-link has-arrow  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navblog" aria-expanded="false" aria-controls="navblog">
                                        <i data-feather="edit" className="nav-icon me-2 icon-xxs" />
                                        Blog
                                    </a>
                                    <div id="navblog" className="collapse " data-bs-parent="#sideNavbar">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/blog-author.html">Author</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/blog-author-detail.html">Detail</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="./pages/create-blog-post.html">Create Post</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* Nav item */}
                                <li className="nav-item">
                                    <div className="navbar-heading">Layouts &amp; Pages</div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navlayoutPage" aria-expanded="false" aria-controls="navlayoutPage">
                                        <i className="nav-icon me-2 icon-xxs" data-feather="file" />
                                        Pages
                                    </a>
                                    <div id="navlayoutPage" className="collapse " data-bs-parent="#sideNavbar">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/starter.html">Starter</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/pricing.html">Pricing</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/maintenance.html">Maintenance</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/404-error.html">404 Error</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* Nav item */}
                                <li className="nav-item">
                                    <a className="nav-link has-arrow  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navAuthentication" aria-expanded="false" aria-controls="navAuthentication">
                                        <i data-feather="lock" className="nav-icon me-2 icon-xxs" />
                                        Authentication
                                    </a>
                                    <div id="navAuthentication" className="collapse " data-bs-parent="#sideNavbar">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/sign-in.html">Sign In</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/sign-up.html">Sign Up</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/forget-password.html">Forget Password</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link has-arrow  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navLayouts" aria-expanded="false" aria-controls="navLayouts">
                                        <i data-feather="sidebar" className="nav-icon me-2 icon-xxs" />
                                        Layouts
                                    </a>
                                    <div id="navLayouts" className="collapse " data-bs-parent="#sideNavbar">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link " href="./index.html">Default</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./horizontal/index.html">Horizontal</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* Nav item */}
                                <li className="nav-item">
                                    <div className="navbar-heading">UI Components</div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link has-arrow  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navComponents" aria-expanded="false" aria-controls="navComponents">
                                        <i data-feather="package" className="nav-icon me-2 icon-xxs" />
                                        Components
                                    </a>
                                    <div id="navComponents" className="collapse " data-bs-parent="#sideNavbar">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a href="./pages/components/accordions.html" className="nav-link ">Accordions</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="./pages/components/alerts.html">Alert</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/badge.html" className="nav-link ">Badge</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/breadcrumb.html" className="nav-link ">Breadcrumb</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/buttons.html" className="nav-link ">Buttons</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/button-group.html" className="nav-link ">Button group</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/card.html" className="nav-link ">Card</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/carousel.html" className="nav-link ">Carousel</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/close-button.html" className="nav-link ">Close Button</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/collapse.html" className="nav-link ">Collapse</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/dropdowns.html" className="nav-link ">Dropdowns</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/forms.html" className="nav-link ">Forms</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/list-group.html" className="nav-link ">List group</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/modal.html" className="nav-link ">Modal</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/navs-tabs.html" className="nav-link ">Navs and tabs</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/navbar.html" className="nav-link ">Navbar</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/offcanvas.html" className="nav-link ">Offcanvas</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/pagination.html" className="nav-link ">Pagination</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/placeholders.html" className="nav-link ">Placeholders</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/popovers.html" className="nav-link ">Popovers</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/progress.html" className="nav-link ">Progress</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/scrollspy.html" className="nav-link ">Scrollspy</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/spinners.html" className="nav-link ">Spinners</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/tables.html" className="nav-link ">Tables</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/toasts.html" className="nav-link ">Toasts</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="./pages/components/tooltips.html" className="nav-link ">Tooltips</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link has-arrow  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navMenuLevel" aria-expanded="false" aria-controls="navMenuLevel">
                                        <i data-feather="corner-left-down" className="nav-icon me-2 icon-xxs" />
                                        Menu Level
                                    </a>
                                    <div id="navMenuLevel" className="collapse " data-bs-parent="#sideNavbar">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow " href="#!" data-bs-toggle="collapse" data-bs-target="#navMenuLevelSecond" aria-expanded="false" aria-controls="navMenuLevelSecond">
                                                    Two Level
                                                </a>
                                                <div id="navMenuLevelSecond" className="collapse" data-bs-parent="#navMenuLevel">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a className="nav-link " href="#!">NavItem 1</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link " href="#!">NavItem 2</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link has-arrow  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navMenuLevelThree" aria-expanded="false" aria-controls="navMenuLevelThree">
                                                    Three Level
                                                </a>
                                                <div id="navMenuLevelThree" className="collapse " data-bs-parent="#navMenuLevel">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a className="nav-link  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navMenuLevelThreeOne" aria-expanded="false" aria-controls="navMenuLevelThreeOne">
                                                                NavItem 1
                                                            </a>
                                                            <div id="navMenuLevelThreeOne" className="collapse collapse " data-bs-parent="#navMenuLevelThree">
                                                                <ul className="nav flex-column">
                                                                    <li className="nav-item">
                                                                        <a className="nav-link " href="#!">NavChild Item 1</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link " href="#!">Nav Item 2</a>
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
                                    <a className="nav-link has-arrow  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navDocs" aria-expanded="false" aria-controls="navDocs">
                                        <i data-feather="package" className="nav-icon me-2 icon-xxs" />
                                        Docs
                                    </a>
                                    <div id="navDocs" className="collapse " data-bs-parent="#sideNavbar">
                                        <ul className="nav flex-column">
                                            <li className="nav-item"><a href="./docs/index.html" className="nav-link ">Introduction</a></li>
                                            <li className="nav-item"><a href="./docs/environment-setup.html" className="nav-link ">Environment setup</a></li>
                                            <li className="nav-item"><a href="./docs/working-with-gulp.html" className="nav-link ">Working with Gulp</a></li>
                                            <li className="nav-item"><a href="./docs/compiled-files.html" className="nav-link ">Compiled Files</a></li>
                                            <li className="nav-item"><a href="./docs/file-structure.html" className="nav-link ">File Structure</a></li>
                                            <li className="nav-item"><a href="./docs/resources-assets.html" className="nav-link ">Resources &amp; assets</a></li>
                                            <li className="nav-item"><a href="./docs/changelog.html" className="nav-link ">Changelog</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <div className="card bg-light shadow-none text-center mx-4 my-8">
                                <div className="card-body py-6">
                                    <img src={avatar11} alt="dash ui - admin dashboard template" />
                                    <div className="mt-4">
                                        <h5>Unlimited Access</h5>
                                        <p className="fs-6 mb-4">Upgrade your plan from a Free trial, to select Business Plan. Start Now</p>
                                        <a href="#" className="btn btn-secondary btn-sm">Upgrade Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page content */}
                <div id="app-content">
                    {/* Container fluid */}
                    <div className="app-content-area">
                        <div className="bg-primary pt-10 pb-21 mt-n6 mx-n4" />
                        <div className="container-fluid mt-n22">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    {/* Page header */}
                                    <div className="d-flex justify-content-between align-items-center mb-5">
                                        <div className="mb-2 mb-lg-0">
                                            <h3 className="mb-0 text-white">Projects</h3>
                                        </div>
                                        <div>

                                            <a href="#!" className="btn btn-white d-flex align-items-center">

                                                Create New
                                                <BsChevronDown className="ms-2" />
                                            </a>




                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-md-12 col-12 mb-5">
                                    {/* card */}
                                    <div className="card h-100 card-lift">
                                        {/* card body */}
                                        <div className="card-body">
                                            {/* heading */}
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <div>
                                                    <h4 className="mb-0">Projects</h4>
                                                </div>
                                                <div className="icon-shape icon-lg bg-primary-soft text-primary rounded-2">
                                                    <BsSuitcaseLg size={'20px'} />
                                                </div>
                                            </div>
                                            {/* project number */}
                                            <div className="lh-1">
                                                <h1 className="mb-1 fw-bold">18</h1>
                                                <p className="mb-0">
                                                    <span className="text-dark me-2">2</span> Completed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-12 col-12 mb-5">
                                    {/* card */}
                                    <div className="card h-100 card-lift">
                                        {/* card body */}
                                        <div className="card-body">
                                            {/* heading */}
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <div>
                                                    <h4 className="mb-0">Active Task</h4>
                                                </div>
                                                <div className="icon-shape icon-md bg-primary-soft text-primary rounded-2">
                                                    <BsListUl size={'20px'} />
                                                </div>
                                            </div>
                                            {/* project number */}
                                            <div className="lh-1">
                                                <h1 className="mb-1 fw-bold">132</h1>
                                                <p className="mb-0">
                                                    <span className="text-dark me-2">28</span> Completed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-12 col-12 mb-5">
                                    {/* card */}
                                    <div className="card h-100 card-lift">
                                        {/* card body */}
                                        <div className="card-body">
                                            {/* heading */}
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <div>
                                                    <h4 className="mb-0">Employee</h4>
                                                </div>
                                                <div className="icon-shape icon-md bg-primary-soft text-primary rounded-2">
                                                    <BsPeople size={'20px'} />
                                                </div>
                                            </div>
                                            {/* project number */}
                                            <div className="lh-1">
                                                <h1 className="mb-1 fw-bold">120</h1>
                                                {/* <p className="mb-0">
                                                    <span className="text-dark me-2">1</span> Completed
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-12 col-12 mb-5">
                                    {/* card */}
                                    <div className="card h-100 card-lift">
                                        {/* card body */}
                                        <div className="card-body">
                                            {/* heading */}
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <div>
                                                    <h4 className="mb-0">Consultant</h4>
                                                </div>
                                                <div className="icon-shape icon-md bg-primary-soft text-primary rounded-2">
                                                    <BsBullseye size={'20px'} />
                                                </div>
                                            </div>
                                            {/* project number */}
                                            <div className="lh-1">
                                                <h1 className="mb-1 fw-bold">76</h1>
                                                {/* <p className="mb-0">
                                                    <span className="text-success me-2">5%</span> Completed
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* row  */}
                            <div className="row">
                                <div className="col-xl-8 col-12 mb-5">
                                    {/* card  */}
                                    <div className="card">
                                        {/* card header  */}
                                        <div className="card-header">
                                            <h4 className="mb-0">My Companies</h4>
                                        </div>
                                        {/* table  */}
                                        <div className="card-body">
                                            <div className="table-responsive table-card">
                                                <table className="table text-nowrap mb-0 table-centered table-hover">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th>Company Name</th>
                                                            <th>Submissions</th>
                                                            <th>Type</th>
                                                            <th>Employees</th>
                                                            <th>Progress</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <div>
                                                                            <img src={brandLogo1} alt="dash ui - bootstrap 5 admin dashboard template" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Allure Design Limited</a></h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>34</td>
                                                            <td><span className="badge badge-normal-soft">Design</span></td>
                                                            <td>
                                                                <div className="avatar-group">
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar bootstrap 5" src={avatar12} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="bootstrap 5 avatar" src={avatar10} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="bootstrap 5 avatar in circle" src={avatar11} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-primary">
                                                                        <span className="avatar-initials rounded-circle fs-6">+5</span>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="text-dark">
                                                                <div className="float-start me-3">15%</div>
                                                                <div className="mt-2">
                                                                    <div className="progress" style={{ "height": "5px" }}>
                                                                        <div className="progress-bar" role="progressbar" style={{ "width": "15%" }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <div>
                                                                            <img src={brandLogo2} alt="Image" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Semno Technologies</a></h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>47</td>
                                                            <td><span className="badge badge-normal-soft">Tech</span></td>
                                                            <td>
                                                                <div className="avatar-group">
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar10} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar11} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar12} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-primary">
                                                                        <span className="avatar-initials rounded-circle fs-6">+5</span>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="text-dark">
                                                                <div className="float-start me-3">35%</div>
                                                                <div className="mt-2">
                                                                    <div className="progress" style={{ "height": "5px" }}>
                                                                        <div className="progress-bar" role="progressbar" style={{ "width": "35%" }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <div>
                                                                            <img src={brandLogo4} alt="Image" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Capexo Tech Private Ltd</a></h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>120</td>
                                                            <td><span className="badge badge-normal-soft">Tech</span></td>
                                                            <td>
                                                                <div className="avatar-group">
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar4} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar11} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar9} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-primary">
                                                                        <span className="avatar-initials rounded-circle fs-6">+1</span>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="text-dark">
                                                                <div className="float-start me-3">75%</div>
                                                                <div className="mt-2">
                                                                    <div className="progress" style={{ "height": "5px" }}>
                                                                        <div className="progress-bar" role="progressbar" style={{ "width": "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <div>
                                                                            <img src={brandLogo6} alt="Image" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Vector.io</a></h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>89</td>
                                                            <td><span className="badge badge-normal-soft">Tech</span></td>
                                                            <td>
                                                                <div className="avatar-group">
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar10} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar11} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar12} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-primary">
                                                                        <span className="avatar-initials rounded-circle fs-6">+5</span>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="text-dark">
                                                                <div className="float-start me-3">63%</div>
                                                                <div className="mt-2">
                                                                    <div className="progress" style={{ "height": "5px" }}>
                                                                        <div className="progress-bar" role="progressbar" style={{ "width": "63%" }} aria-valuenow={63} aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <div>
                                                                            <img src={brandLogo4} alt="Image" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Collabin Consultancy</a></h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>108</td>
                                                            <td><span className="badge badge-normal-soft">Consultancy</span></td>
                                                            <td>
                                                                <div className="avatar-group">
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar13} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar14} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar15} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-primary">
                                                                        <span className="avatar-initials rounded-circle fs-6">+5</span>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="text-dark">
                                                                <div className="float-start me-3">100%</div>
                                                                <div className="mt-2">
                                                                    <div className="progress" style={{ "height": "5px" }}>
                                                                        <div className="progress-bar bg-success" role="progressbar" style={{ "width": "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <div>
                                                                            <img src={brandLogo5} alt="Image" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Remini Consultants</a></h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>120</td>
                                                            <td><span className="badge badge-normal-soft">Consultancy</span></td>
                                                            <td>
                                                                <div className="avatar-group">
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar13} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar14} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm">
                                                                        <img alt="avatar" src={avatar15} className="rounded-circle" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-primary">
                                                                        <span className="avatar-initials rounded-circle fs-6">+1</span>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="text-dark">
                                                                <div className="float-start me-3">75%</div>
                                                                <div className="mt-2">
                                                                    <div className="progress" style={{ "height": "5px" }}>
                                                                        <div className="progress-bar" role="progressbar" style={{ "width": "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* card footer  */}
                                        <div className="card-footer text-center">
                                            <a href="#!" className="btn btn-primary">View All Projects</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12 col-md-12 col-12 mb-5">
                                    {/* card  */}
                                    <div className="card h-100">
                                        {/* card body  */}
                                        <div className="card-header d-flex align-items-center justify-content-between">
                                            <div>
                                                <h4 className="mb-0">Organization Structure</h4>
                                            </div>

                                        </div>
                                        <div className="card-body">
                                            {/* chart  */}
                                            <div className="mb-6 d-flex justify-content-center">
                                                <SunburstChart />
                                            </div>
                                            {/* icon with content  */}
                                            <div className="d-flex align-items-center justify-content-around">
                                                <div className="text-center">
                                                    <i className="icon-sm text-success" data-feather="check-circle" />
                                                    <h1 className="fs-2 mb-0">100</h1>
                                                    <p>Total</p>
                                                </div>
                                                <div className="text-center">
                                                    <i className="icon-sm text-warning" data-feather="trending-up" />
                                                    <h1 className="fs-2 mb-0">60</h1>
                                                    <p>Pending</p>
                                                </div>
                                                <div className="text-center">
                                                    <i className="icon-sm text-danger" data-feather="trending-down" />
                                                    <h1 className="fs-2 mb-0">40</h1>
                                                    <p>Delayed</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* row  */}
                            <div className="row">
                                {/* card  */}
                                <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5 mb-xl-0">
                                    <div className="card h-100">
                                        {/* card header  */}
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h4 className="mb-0">My Submission</h4>
                                            <div className="dropdown">
                                                <a className="btn btn-outline-white btn-sm dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sort</a>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* table  */}
                                        <div className="card-body">
                                            <div className="table-responsive table-card">
                                                <table className="table text-nowrap mb-0 table-centered table-hover">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Deadline</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckOne" />
                                                                    <label className="form-check-label" htmlFor="flexCheckOne">Capexgo Staffing Requirement</label>
                                                                </div>
                                                            </td>
                                                            <td>Today</td>
                                                            <td>
                                                                <span className="badge badge-success-soft">Approved</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckTwo" />
                                                                    <label className="form-check-label" htmlFor="flexCheckTwo">Hiring Tech Team for GCP</label>
                                                                </div>
                                                            </td>
                                                            <td>Yesterday</td>
                                                            <td>
                                                                <span className="badge badge-danger-soft">Pending</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckThree" />
                                                                    <label className="form-check-label" htmlFor="flexCheckThree">UI/UX Interns Sub Contractor Swiggy</label>
                                                                </div>
                                                            </td>
                                                            <td>16 Sept, 2023</td>
                                                            <td>
                                                                <span className="badge badge-warning-soft">In Progress</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckFour" />
                                                                    <label className="form-check-label" htmlFor="flexCheckFour">Interns for Kalari Capital</label>
                                                                </div>
                                                            </td>
                                                            <td>23 Sept, 2023</td>
                                                            <td>
                                                                <span className="badge badge-success-soft">Approved</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckFive" />
                                                                    <label className="form-check-label" htmlFor="flexCheckFive">Management Team for Valuation</label>
                                                                </div>
                                                            </td>
                                                            <td>20 Sept, 2023</td>
                                                            <td>
                                                                <span className="badge badge-danger-soft">Pending</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckSix" />
                                                                    <label className="form-check-label" htmlFor="flexCheckSix">Inhouse Social Media Intern for Zepto</label>
                                                                </div>
                                                            </td>
                                                            <td>12 Sept, 2023</td>
                                                            <td>
                                                                <span className="badge badge-success-soft">Approved</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckSeven" />
                                                                    <label className="form-check-label" htmlFor="flexCheckSeven">Market Research for Ionic Developers</label>
                                                                </div>
                                                            </td>
                                                            <td>11 Sept, 2023</td>
                                                            <td>
                                                                <span className="badge badge-danger-soft">Pending</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card  */}
                                <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5 mb-xl-0">
                                    <div className="card h-100">
                                        {/* card header  */}
                                        <div className="card-header">
                                            <h4 className="mb-0">Bulletin</h4>
                                        </div>
                                        {/* table  */}
                                        <div className="card-body">
                                            <div className="table-responsive table-card" data-simplebar style={{ "max-height": "380px" }}>
                                                <table className="table text-nowrap mb-0 table-centered table-hover">

                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                                                                        <a href="#!"><img src={avatar2} alt="Image" className="avatar-md avatar rounded-circle" /></a>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Anita Parmar</a></h5>
                                                                        <p className="mb-0">Subhash was submitted for Infotech through Viraj Ghosh</p>
                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                                                                        <a href="#!"><img src={avatar11} alt="Image" className="avatar-md avatar rounded-circle" style={{ width: '100%', height: 'auto' }} /></a>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Jitu Chauhan</a></h5>
                                                                        <p className="mb-0">Jitu was added to team Research at Vector.io</p>
                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                                                                        <a href="#!"><img src={avatar3} alt="Image" className="avatar-md avatar rounded-circle" /></a>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Surabhi Chauhan</a></h5>
                                                                        <p className="mb-0">Surabhi was added as the team lead for Team Development</p>
                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                                                                        <a href="#!"><img src={avatar4} alt="Image" className="avatar-md avatar rounded-circle" /></a>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Mohit Kumar</a></h5>
                                                                        <p className="mb-0">Mohit Kumar was removed from Team Consultancy</p>
                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                                                                        <a href="#!"><img src={avatar5} alt="Image" className="avatar-md avatar rounded-circle" /></a>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Subhash Naik</a></h5>
                                                                        <p className="mb-0">Subhash Added a Submission</p>
                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                                                                        <a href="#!"><img src={avatar6} alt="Image" className="avatar-md avatar rounded-circle" /></a>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Darshini Nair</a></h5>
                                                                        <p className="mb-0">Darshini was added to Team Marketing in Capexgo </p>
                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                                                                        <a href="#!"><img src={avatar5} alt="Image" className="avatar-md avatar rounded-circle" /></a>
                                                                    </div>
                                                                    <div className="ms-3 lh-1">
                                                                        <h5 className="mb-1"><a href="#!" className="text-inherit">Subhash Naik</a></h5>
                                                                        <p className="mb-0">Subhash was submitted for Infotech</p>
                                                                    </div>
                                                                </div>
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

export default HomeDashboard;