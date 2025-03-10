import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/main.css';
import logo2 from '../assets/images/brand/logo/logo-2.svg';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


const Signup = () => {

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
                            <div className="card-body p-6">
                                <div className="mb-4">
                                    <a href="#"><img src={logo2} className="mb-2 text-inverse" alt="Image" /></a>
                                    <p className="mb-6">Please enter your user information.</p>
                                </div>
                                {/* Form */}
                                <form>
                                    {/* userid */}
                                    <div className="mb-3">
                                        <label htmlFor="userid" className="form-label">User ID</label>
                                        <input type="text" id="userid" className="form-control" name="userid" placeholder="User Name" required />
                                    </div>
                                    {/* Email */}
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" id="email" className="form-control" name="email" placeholder="Email address here" required />
                                    </div>
                                    {/* Password */}
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" id="password" className="form-control" name="password" placeholder="**************" required />
                                    </div>
                                    {/* Password */}
                                    <div className="mb-3">
                                        <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                        <input type="password" id="confirm-password" className="form-control" name="password" placeholder="**************" required />
                                    </div>
                                    {/* Checkbox */}
                                    <div className="mb-3">
                                        <div className="form-check custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="agreeCheck" />
                                            <label className="form-check-label" htmlFor="agreeCheck">
                                                <span className="fs-5">
                                                    I agree to the
                                                    <a href="#">&nbsp; Terms of Service &nbsp;</a>
                                                    and
                                                    <a href="#">&nbsp; Privacy Policy.</a>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        {/* Button */}
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary">Create Free Account</button>
                                        </div>
                                        <div className="d-md-flex justify-content-between mt-4">
                                            <div className="mb-2 mb-md-0">
                                                <a onClick={() => navigate('/signin')} className="fs-5 cursor-pointer">Already member? Signin</a>
                                            </div>
                                            <div className="mb-2 mb-md-0">
                                                <a onClick={() => navigate('/forgot-password')} className="fs-5 cursor-pointer">Forgot Password</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </>

    )
}

export default Signup;