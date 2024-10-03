import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!email) {
            tempErrors["email"] = "Email cannot be blank!!";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors["email"] = "Invalid email!";
            isValid = false;
        }

        if (!password) {
            tempErrors["password"] = "Password cannot be blank!";
            isValid = false;
        } else if (password.length < 6) {
            tempErrors["password"] = "Password must have at least 6 characters!";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Log in successfully");
        }
    };
    return (
        <>
            <div className="page-banner-section section">
                <div className="container">
                    <div className="row">
                        <div className="page-banner-content col-xs-12">
                            <h2>login</h2>
                            <ul className="breadcrumb">
                                <li><Link className="Link" to="/">Home</Link></li>
                                <li className="active">login</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-section">
                <div class="container">
                    <h1>From Login</h1>
                    <div class="row" className="row-login">
                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div className="img-login">
                                <img src="https://nld.mediacdn.vn/291774122806476800/2021/12/10/pic-2-1639130323014489922134.jpg" style={{ width: '100%', height: '360px', borderRadius: '4px', marginBottom: '10px' }} alt=""></img>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div class="login-reg-form">
                                <form action="#" onSubmit={handleSubmit}>
                                    <div class="row">
                                        <div class="col-xs-8 mb-20">
                                            <label class="" for="r_password">Address Email<span class="required">*</span></label>
                                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            {errors.email && <span className="error">{errors.email}</span>}
                                        </div>
                                        <div class="col-xs-8 mb-20">
                                            <label class="" for="r_c_password">Account Password<span class="required">*</span></label>
                                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            {errors.password && <span className="error">{errors.password}</span>}
                                        </div>
                                        <div class="col-xs-8 mb-20">
                                            <input type="checkbox" />
                                            <label style={{ marginTop: '20px' }} for="rememberme">If you don't have an account ? <Link to="/register"> Register</Link></label>
                                        </div>
                                        <div class="col-xs-8">
                                            <input value="Login" type="submit" required />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="service-section section pt-70 pb-40">
                <div class="container">
                    <div class="row">
                        <div class="single-service col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="service-icon">
                                <i class="fa-solid fa-earth-africa"></i>
                            </div>
                            <div class="service-title">
                                <h3>FREE SHIPPING</h3>
                                <p>Free shipping on all UK orders</p>
                            </div>
                        </div>
                        <div class="single-service col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="service-icon">
                                <i class="fa-solid fa-arrows-rotate"></i>
                            </div>
                            <div class="service-title">
                                <h3>FREE EXCHANGE</h3>
                                <p>30 days return on all items</p>
                            </div>
                        </div>
                        <div class="single-service col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="service-icon">
                                <i class="fa-solid fa-headphones"></i>
                            </div>
                            <div class="service-title">
                                <h3>PREMIUM SUPPORT</h3>
                                <p>We support online 24 hours a day</p>
                            </div>
                        </div>
                        <div class="single-service col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="service-icon">
                                <i class="fa-solid fa-gift"></i>
                            </div>
                            <div class="service-title">
                                <h3>BLACK FRIDAY</h3>
                                <p>Shocking discount on every friday</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}