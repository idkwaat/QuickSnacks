
function Footer() {
    return (
        <>

            <footer className="footer01">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ctamailchimp">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="ctaIcon">
                                            <i className="icon-mail"></i>
                                            <h4>Sign Up For Newsletters</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <form className="mc4wp-form" method="post">
                                            <input type="email" name="EMAIL" placeholder="Email Address" required="" />
                                            <button type="submit">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <aside className="widget">
                                <h3 className="widget-title">Contact Us</h3>
                                <div className="infoWrap">
                                    <p>
                                    238 Hoang Quoc Viet<br/> Hanoi Vietnam
                                    </p>
                                    <div className="fs-info"><i className="icon-mail"></i>Yourinfo@gmail.com</div>
                                    <div className="fs-info"><i className="icon-mobile-alt"></i>+123 5689 879455</div>
                                </div>
                            </aside>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <aside className="widget">
                                <h3 className="widget-title">Information</h3>
                                <ul>
                                    <li><a href="">About us</a></li>
                                    <li><a href="">Menu</a></li>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <aside className="widget">
                                <h3 className="widget-title">My Account</h3>
                                <ul>
                                    <li><a href="">My Account</a></li>
                                    <li><a href="">Shopping Cart</a></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <aside className="widget">
                                <h3 className="widget-title">Categories</h3>
                                <ul>
                                    <li><a href="">Healthy snacks</a></li>
                                    <li><a href="">Snacks for children</a></li>
                                    <li><a href="">Snacks that are easy to digest</a></li>
                                    <li><a href="">smoothie</a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;