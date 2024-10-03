import { Link } from 'react-router-dom';
import './Login.css';

import React, { useState } from 'react';
// Import CSS file

function Login() {
    const [isActive, setIsActive] = useState(false);

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    return (

        <>
            <div className="page-banner-section section">
                <div className="container">
                    <div className="row">
                        <div className="page-banner-content col-xs-12">
                            <h2>Product Blog</h2>
                            <ul className="breadcrumb">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">Product Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className={`login ${isActive ? 'active' : ''}`}>
                    <div className="form-login sign-up">
                        <form>
                            <h1>Create Account</h1>
                            <div className="social-icons">
                                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your email for registeration</span>
                            <input className='input' type="text" placeholder="Name" required />
                            <input className='input' type="email" placeholder="Email" required />
                            <input className='input' type="password" placeholder="Password" required />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-login sign-in">
                        <form>
                            <h1>Sign In</h1>
                            <div className="social-icons">
                                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your email password</span>
                            <input className='input' type="email" placeholder="Email" required />
                            <input className='input' type="password" placeholder="Password" required />
                            <a href="#">Forget Your Password?</a>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div className="toggle-login">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1>Welcome Back!</h1>
                                <p>Enter your personal details to use all of site features</p>
                                <button className="hidden" onClick={handleLoginClick}>
                                    Sign In
                                </button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1>Hello, Friend!</h1>
                                <p>Register with your personal details to use all of site features</p>
                                <button className="hidden" onClick={handleRegisterClick}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;