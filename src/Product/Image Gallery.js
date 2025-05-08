import { Link } from "react-router-dom";


function Image_gallary() {
    return (
        <>
            <div className="page-banner-section section">
                <div className="container">
                    <div className="row">
                        <div className="page-banner-content col-xs-12">
                            <h2>Image gallary</h2>
                            <ul className="breadcrumb">
                                <li><Link className="Link" to="/">Home</Link></li>
                                <li className="active">Image gallary</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="blog-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="secTitle">Image <span>Gallary</span></h2>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="blog">
                                <div className="blog-img">
                                    <img src="./assets/images/ingredients/Black bread.jpg" width="100%" className="w-100 img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="blog">
                                <div className="blog-img">
                                    <img src="./assets/images/ingredients/Olives.jpg" width="100%" className="w-100 img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="blog">
                                <div className="blog-img">
                                    <img src="./assets/images/ingredients/Strawberry.jpg" width="100%" className="w-100 img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="blog">
                                <div className="blog-img">
                                    <img src="./assets/images/ingredients/Dragon fruit.jpg" width="100%" className="w-100 img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="blog">
                                <div className="blog-img">
                                    <img src="./assets/images/ingredients/Unsweetened fresh milk.jpg" width="100%" className="w-100 img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="blog">
                                <div className="blog-img">
                                    <img src="./assets/images/Snacks for kids/shrimp soup.jpg" width="100%" className="w-100 img-fluid" alt="" />
                                </div>
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


export default Image_gallary;
