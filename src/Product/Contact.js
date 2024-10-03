import { Link } from "react-router-dom";


export default function Contact() {
    return (
        <>
            <div class="page-banner-section section">
                <div class="container">
                    <div class="row">
                        <div class="page-banner-content col-xs-12">
                            <h2>Contact</h2>
                            <ul class="breadcrumb">
                                <li><Link to="/">Home</Link></li>
                                <li class="active">Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-section section pt-100 pb-100">
                <div class="container">
                    <div class="row">
                        <div class="contact-info col-lg-4 col-12 mb-40">
                            <h3>Contact Info</h3>

                            <p><i class="pe-7s-map-marker"></i><span>119 Hoang Quoc VIet, Ha Noi <br />Viet Nam</span></p>

                            <p><i class="pe-7s-call"></i><span>Phone : +1234567890</span><span>Fax : +0123456789</span></p>

                        </div>
                        <div class="contact-form col-lg-8 col-12 mb-40">
                            <h3>Contact form</h3>
                            <form id='' action="" method="post">
                                <div class="row">
                                    <div class="col-md-4 col-12 mb-20">
                                        <label for="name">Your Name</label>
                                        <input id="" name="" type="text" required />
                                    </div>
                                    <div class="col-md-4 col-12 mb-20">
                                        <label for="email">Your Email</label>
                                        <input id="" name="" type="email" required />
                                    </div>
                                    <div class="col-md-4 col-12 mb-20">
                                        <label for="subject">Subject</label>
                                        <input id="" name="" type="text" required />
                                    </div>
                                    <div class="col-12 mb-20">
                                        <label for="message">Message</label>
                                        <textarea id="" name=""></textarea>
                                    </div>
                                    <div class="col-12">
                                        <input style={{ marginTop: '20px' }} type="submit" value="send" />
                                    </div>
                                </div>
                            </form>
                            <div class="form-message"></div>
                        </div>
                        <div class="col-12 mt-40">
                            <div class="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.665840936603!2d105.79069107508138!3d21.0460524806076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3073615aff%3A0x5f7d5efd40024836!2zSG_DoG5nIFF14buRYyBWaeG7h3QsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1726992722797!5m2!1svi!2s" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                            </div>
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