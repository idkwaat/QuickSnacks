import { Link, Route, Routes } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Register() {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Username cannot be blank'),
            email: Yup.string()
                .email('Invalid email')
                .required('Email cannot be blank'),
            password: Yup.string()
                .min(6, 'Password must have at least 6 characters')
                .required('Password cannot be blank'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Confirmation password does not match')
                .required('Please confirm your password')
        }),
        onSubmit: (values) => {
            console.log('Registered successfully:', values);
            // Logic xử lý đăng ký
        },
    });
    return (
        <>
            <div class="page-banner-section section">
                <div class="container">
                    <div class="row">
                        <div class="page-banner-content col-xs-12">
                            <h2>Register</h2>
                            <ul class="breadcrumb">
                                <li><Link className="Link" to="/">Home</Link></li>
                                <li class="active">Register</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-section section pt-100 pb-100">
                <div class="container">
                    <h1 style={{ marginBottom: '18px' }}>From register</h1>
                    <div class="row" style={{ display: 'flex', alignItems: 'center', padding: '0 20px' }}>
                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div class="login-reg-form">
                                <form action="" onSubmit={formik.handleSubmit}>
                                    <div class="row">
                                        <div class="col-xs-12 mb-20">
                                            <label class="" for="r_password">Full Name<span class="required">*</span></label>
                                            <input type="password"  {...formik.getFieldProps('username')} />
                                            {formik.touched.username && formik.errors.username ? (
                                                <span className="error">{formik.errors.username}</span>
                                            ) : null}
                                        </div>
                                        <div class="col-xs-12 mb-20">
                                            <label class="" for="">Address Email<span class="required">*</span></label>
                                            <input type="text"   {...formik.getFieldProps('email')} />
                                            {formik.touched.email && formik.errors.email ? (
                                                <span className="error">{formik.errors.email}</span>
                                            ) : null}
                                        </div>
                                        <div class="col-xs-12 mb-20">
                                            <label class="" for="r_c_password">Account password<span class="required">*</span></label>
                                            <input type="password"  {...formik.getFieldProps('password')} />
                                            {formik.touched.password && formik.errors.password ? (
                                                <span className="error">{formik.errors.password}</span>
                                            ) : null}
                                        </div>
                                        <div class="col-xs-12 mb-20">
                                            <label class="" for="r_c_password">Confirm password<span class="required">*</span></label>
                                            <input type="password"   {...formik.getFieldProps('confirmPassword')} />
                                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                                <span className="error">{formik.errors.confirmPassword}</span>
                                            ) : null}
                                        </div>
                                        <div class="col-xs-12 mb-20">
                                            <input type="checkbox" />
                                            <label style={{ marginTop: '20px' }} for="rememberme"><Link to="/login">Login</Link></label>
                                        </div>
                                        <div class="col-xs-12">
                                            <input value="register" type="submit" required />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div className="img-login">
                                <img src="https://nld.mediacdn.vn/291774122806476800/2021/12/10/pic-2-1639130323014489922134.jpg" alt=""></img>
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