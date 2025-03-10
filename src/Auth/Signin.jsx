import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase auth
import { signInWithEmailAndPassword } from "firebase/auth";
import "../CSS/main.css";
import logo2 from "../assets/images/brand/logo/logo-2.svg";

const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/dashboard"); // Redirect to the dashboard on success
        } catch (err) {
            setError("Invalid email or password. Please try again.");
        }

        setLoading(false);
    };

    return (
        <main className="container d-flex flex-column">
            <div className="row align-items-center justify-content-center g-0 min-vh-100">
                <div className="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
                    {/* Card */}
                    <div className="card smooth-shadow-md">
                        {/* Card body */}
                        <div className="card-body p-6">
                            <div className="mb-4">
                                <img src={logo2} className="mb-2 text-inverse" alt="Logo" />
                                <p className="mb-6">Please enter your user information.</p>
                            </div>
                            {/* Error Message */}
                            {error && <div className="alert alert-danger">{error}</div>}
                            {/* Form */}
                            <form onSubmit={handleSubmit}>
                                {/* Email */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                {/* Password */}
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="********"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                {/* Remember Me */}
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="rememberme"
                                        />
                                        <label className="form-check-label" htmlFor="rememberme">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                {/* Sign In Button */}
                                <div className="d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={loading}
                                    >
                                        {loading ? "Signing in..." : "Sign in"}
                                    </button>
                                </div>
                                {/* Links */}
                                <div className="d-md-flex justify-content-between mt-4">
                                    <a
                                        onClick={() => navigate("/signup")}
                                        className="fs-5 cursor-pointer"
                                    >
                                        Create an Account
                                    </a>
                                    <a
                                        onClick={() => navigate("/forgot-password")}
                                        className="fs-5 cursor-pointer"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Signin;
