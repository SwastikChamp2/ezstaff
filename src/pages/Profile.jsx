import React, { useEffect, useState } from 'react';
import '../CSS/main.css';


// Image Imports
import logo2 from '../assets/images/brand/logo/logo-2.svg';
import avatar11 from '../assets/images/avatar/avatar-11.jpg';
import giftbox from '../assets/images/background/giftbox.png';
import checkedmark from '../assets/images/svg/checked-mark.svg';
import brandlogo1 from '../assets/images/svg/brand-logo-1.svg';
import avatar2 from '../assets/images/avatar/avatar-2.jpg';
import avatar3 from '../assets/images/avatar/avatar-3.jpg';
import brandlogo2 from '../assets/images/svg/brand-logo-2.svg';
import avatar4 from '../assets/images/avatar/avatar-4.jpg';
import avatar5 from '../assets/images/avatar/avatar-5.jpg';
import avatar6 from '../assets/images/avatar/avatar-6.jpg';
import brandlogo3 from '../assets/images/svg/brand-logo-3.svg';
import avatar7 from '../assets/images/avatar/avatar-7.jpg';
import avatar8 from '../assets/images/avatar/avatar-8.jpg';
import avatar9 from '../assets/images/avatar/avatar-9.jpg';
import brandlogo4 from '../assets/images/svg/brand-logo-4.svg';
import avatar10 from '../assets/images/avatar/avatar-10.jpg';
import avatar12 from '../assets/images/avatar/avatar-12.jpg';
import brandlogo5 from '../assets/images/svg/brand-logo-5.svg';
import avatar13 from '../assets/images/avatar/avatar-13.jpg';
import avatar14 from '../assets/images/avatar/avatar-14.jpg';
import avatar15 from '../assets/images/avatar/avatar-15.jpg';
import blogimg4 from '../assets/images/blog/blog-img-4.jpg';
import ProfileCard from '../components/Cards/ProfileCard';



const Profile = () => {

  const profilesData = [
    {
      heading: "Sales Manager at Morgan Stanley",
      subHeading: "Total: 3 years of experience",
      imageUrl: "https://pbs.twimg.com/profile_images/1631347869687898142/ATwo7QZZ_400x400.jpg"
    },
    {
      heading: "VP of Sales in Numito Fintech",
      subHeading: "Total: 4 years of experience",
      imageUrl: "https://cdn.dribbble.com/userupload/3640476/file/still-e81850806ed51cbc833ede438bb7f10c.png"
    },
    {
      heading: "Sales Head at Gemini Capital",
      subHeading: "Total: 1 year of experience",
      imageUrl: "https://i.tracxn.com/logo/company/gD0eqGyF_400x400_321d0c6f-1906-4dcc-87f6-361d7d786523.jpg"
    },
    {
      heading: "Junior Salesperson at Aquarich",
      subHeading: "Total: 6 months of experience",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-J9cAjb8TYBabKgoJ-Jtr5tfbowqK95i-1w&s"
    }
  ];

  const educationData = [
    {
      heading: "Indian Institute of Management (IIM) Ahmedabad",
      subHeading: "Master of Business Administration (MBA) - Marketing & Strategy",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/IIM%2C_Ahmedabad_Logo.svg/1200px-IIM%2C_Ahmedabad_Logo.svg.png"
    },
    {
      heading: "Indian Institute of Technology (IIT) Bombay",
      subHeading: "Bachelor of Technology (B.Tech) - Computer Science",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png"
    },
    {
      heading: "Delhi Public School, RK Puram",
      subHeading: "Class 12th - Science Stream (CBSE)",
      imageUrl: "https://pbs.twimg.com/profile_images/1151384177067134977/s5sAwv6B_400x400.png"
    },
    {
      heading: "Delhi Public School, RK Puram",
      subHeading: "Class 10th - CBSE Board",
      imageUrl: "https://pbs.twimg.com/profile_images/1151384177067134977/s5sAwv6B_400x400.png"
    }
  ];





  return (
    <>

      <main id="main-wrapper" className="main-wrapper">
        <div className="header">
          {/* navbar */}
          <div className="navbar-custom navbar navbar-expand-lg">
            <div className="container-fluid px-0">
              <a className="navbar-brand d-block d-md-none" href="#">
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
                <li className="dropdown ms-2">
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
                        <a className="dropdown-item" href="#">
                          <i className="me-2 icon-xxs dropdown-item-icon" data-feather="power" />
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
          <div className="h-100" data-simplebar>
            {/* Brand logo */}
            <a className="navbar-brand" href="#">
              <img src={logo2} alt="dash ui - bootstrap 5 admin dashboard template" />
            </a>
            {/* Navbar nav */}
            <ul className="navbar-nav flex-column" id="sideNavbar">
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link has-arrow  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navDashboard" aria-expanded="false" aria-controls="navDashboard">
                  <i data-feather="home" className="nav-icon me-2 icon-xxs" />
                  Dashboard
                </a>
                <div id="navDashboard" className="collapse " data-bs-parent="#sideNavbar">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link " href="#">Analytics</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">Project</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Ecommerce</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">CRM</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Finance</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Blog</a>
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
                <a className="nav-link has-arrow " href="#">Calendar</a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link has-arrow " href="#">
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
                      <a className="nav-link has-arrow " href="#">Products</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Product Detail</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Add Product</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Orders</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Orders Detail</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Shopping cart</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Checkout</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Customer</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Seller</a>
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
                      <a className="nav-link has-arrow " href="#">Inbox</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Details</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Draft</a>
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
                      <a className="nav-link has-arrow " href="#">Grid</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">List</a>
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
                      <a className="nav-link " href="#">Grid</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">List</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  collapsed " href="#!" data-bs-toggle="collapse" data-bs-target="#navprojectSingle" aria-expanded="false" aria-controls="navprojectSingle">
                        Single
                      </a>
                      <div id="navprojectSingle" className="collapse " data-bs-parent="#navProject">
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link " href="#">Overview</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link " href="#">Task</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link " href="#">Budget</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link " href="#">Files</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link " href="#">Team</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">Create Project</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
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
                      <a className="nav-link has-arrow " href="#">Contacts</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Company</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">
                        Deals
                        <span className="badge text-bg-primary ms-2">New</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">
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
                      <a className="nav-link has-arrow " href="#">List</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Detail</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Invoice Generator</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#!" data-bs-toggle="collapse" data-bs-target="#navprofilePages" aria-expanded="false" aria-controls="navprofilePages">
                  <i data-feather="user" className="nav-icon me-2 icon-xxs" />
                  Profile
                </a>
                <div id="navprofilePages" className="collapse  show " data-bs-parent="#sideNavbar">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link  active " href="#">Overview</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">Project</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">Files</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">Team</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">Followers</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">Activity</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">Settings</a>
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
                      <a className="nav-link has-arrow " href="#">Author</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Detail</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link has-arrow " href="#">Create Post</a>
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
                      <a className="nav-link " href="#">Starter</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">Maintenance</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">404 Error</a>
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
                      <a className="nav-link " href="#">Sign In</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">Sign Up</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">Forget Password</a>
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
                      <a className="nav-link " href="#">Default</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">Horizontal</a>
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
                      <a href="#" className="nav-link ">Accordions</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">Alert</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Badge</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Breadcrumb</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Buttons</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Button group</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Card</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Carousel</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Close Button</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Collapse</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Dropdowns</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Forms</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">List group</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Modal</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Navs and tabs</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Navbar</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Offcanvas</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Pagination</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Placeholders</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Popovers</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Progress</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Scrollspy</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Spinners</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Tables</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Toasts</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">Tooltips</a>
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
                    <li className="nav-item"><a href="#" className="nav-link ">Introduction</a></li>
                    <li className="nav-item"><a href="#" className="nav-link ">Environment setup</a></li>
                    <li className="nav-item"><a href="#" className="nav-link ">Working with Gulp</a></li>
                    <li className="nav-item"><a href="#" className="nav-link ">Compiled Files</a></li>
                    <li className="nav-item"><a href="#" className="nav-link ">File Structure</a></li>
                    <li className="nav-item"><a href="#" className="nav-link ">Resources &amp; assets</a></li>
                    <li className="nav-item"><a href="#" className="nav-link ">Changelog</a></li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="card bg-light shadow-none text-center mx-4 my-8">
              <div className="card-body py-6">
                <img src={giftbox} alt="dash ui - admin dashboard template" />
                <div className="mt-4">
                  <h5>Unlimited Access</h5>
                  <p className="fs-6 mb-4">Upgrade your plan from a Free trial, to select Business Plan. Start Now</p>
                  <a href="#" className="btn btn-secondary btn-sm">Upgrade Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* page content */}
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
                          <img src={avatar11} className="avatar-xxl
                rounded-circle border border-2 " alt="Image" />
                          <a href="#!" className="position-absolute top-0 right-0 me-2">
                            <img src={checkedmark} alt="Image" className="icon-sm" />
                          </a>
                        </div>
                        {/* text */}
                        <div className="lh-1">
                          <h2 className="mb-0">
                            Jitu Chauhan
                            <a href="#!" className="text-decoration-none">
                            </a>
                          </h2>
                          <p className="mb-0 d-block">@imjituchauhan</p>
                        </div>
                      </div>
                      <div>
                        <a href="#!" className="btn btn-outline-primary d-none d-md-block">Edit Profile</a>
                      </div>
                    </div>
                    {/* nav */}
                    <ul className="nav nav-lt-tab px-4" id="pills-tab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Overview</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">Files</a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              {/* content */}
              <div>
                {/* row */}
                <div className="row">
                  <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5">
                    {/* card */}
                    <div className="card h-100">
                      {/* card body */}
                      <div className="card-header">
                        <h4 className="mb-0">About Me</h4>
                      </div>
                      <div className="card-body">
                        {/* card title */}
                        <h5 className="text-uppercase">Bio</h5>
                        {/* text */}
                        <p className="mt-2 mb-6">
                          A results-driven Sales Manager at Morgan Stanley with a decade of experience in financial sales and client relationship management.
                        </p>
                        {/* row */}
                        <div className="row">
                          <div className="col-12 mb-5">
                            {/* text */}
                            <h5 className="text-uppercase">Position</h5>
                            <p className="mb-0">Manager at Morgan Stanley</p>
                          </div>
                          <div className="col-6 mb-5">
                            <h5 className="text-uppercase">Phone</h5>
                            <p className="mb-0">+91 8899776655</p>
                          </div>
                          <div className="col-6 mb-5">
                            <h5 className="text-uppercase">
                              Date of Birth
                            </h5>
                            <p className="mb-0">01.10.1997</p>
                          </div>
                          <div className="col-6">
                            <h5 className="text-uppercase">Email</h5>
                            <p className="mb-0">jitu@gmail.com</p>
                          </div>
                          <div className="col-6">
                            <h5 className="text-uppercase">Location</h5>
                            <p className="mb-0">Ahmedabad, India</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5" >
                    {/* card */}
                    <div className="card">
                      <div className="card-header">
                        <h4 className="mb-0">About Me</h4>
                      </div>
                      {/* card body */}
                      <div className="card-body" style={{ minHeight: '396px' }}>
                        {/* card title */}
                        <div className="d-md-flex justify-content-between align-items-center mb-4">
                          <p className="mt-2 mb-6">
                            As a results-driven Sales Manager at Morgan Stanley, I bring over a decade of experience in financial sales and client relationship management. Throughout my career, I have been dedicated to driving revenue growth, building high-performing teams, and delivering exceptional client solutions.
                            <br /> <br />
                            With a strong foundation in financial markets, investment strategies, and wealth management, I have successfully guided clients in making informed decisions that align with their financial goals. My expertise extends to sales strategy development, business expansion, and team leadership, ensuring sustained success in a competitive industry.
                            <br /> <br /> <br />

                          </p>
                        </div>

                      </div>
                    </div>
                  </div>


                  <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5">
                    {/* card */}
                    <ProfileCard title="My Experience" profiles={profilesData} />
                  </div>


                  <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-5">
                    {/* card */}
                    <ProfileCard title="My Education" profiles={educationData} />
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

export default Profile;