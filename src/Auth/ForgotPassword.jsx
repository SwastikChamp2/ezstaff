import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';
import logo2 from '../assets/images/brand/logo/logo-2.svg';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';



const ForgotPassword = () => {

    const navigate = useNavigate();

    return (
        <>



            <main className="container d-flex flex-column">
                <div className="row align-items-center justify-content-center g-0 min-vh-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
                        <div className="position-absolute end-0 top-0 p-8">
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
                        </div>
                        {/* Card */}
                        <div className="card smooth-shadow-md">
                            {/* Card body */}
                            <div className="card-body p-5">
                                <div className="mb-4">
                                    <a href="#"><img src={logo2} className="mb-2 text-inverse" alt="Image" /></a>
                                    <p className="mb-6">Don't worry, we'll send you an email to reset your password.</p>
                                </div>
                                {/* Form */}
                                <form>
                                    {/* Email */}
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" id="email" className="form-control" name="email" placeholder="Enter Your Email" required />
                                    </div>
                                    {/* Button */}
                                    <div className="mb-3 d-grid">
                                        <button type="submit" className="btn btn-primary">Reset Password</button>
                                    </div>
                                    <span>
                                        Don't have an account? &nbsp;
                                        <a onClick={() => navigate('/signin')} className="text-primary cursor-pointer">Sign in</a>
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </>

    )
}

export default ForgotPassword;