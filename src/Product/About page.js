import { Link } from "react-router-dom";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function AboutPage() {
    return (
        <>
            <div className="page-banner-section section">
                <div className="container">
                    <div className="row">
                        <div className="page-banner-content col-xs-12">
                            <h2>About page</h2>
                            <ul className="breadcrumb">
                                <li><Link className="Link" to="/">Home</Link></li>
                                <li className="active">About page</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="about_page">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <img className="about_page-img" src="https://blog.dktcdn.net/files/mo-quan-an-vat-1-1.jpg" ></img>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolore deserunt sequi dolores expedita animi quos voluptatum cum impedit quidem illum tempore optio quas asperiores sapiente ab odit, voluptatem rem!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolore deserunt sequi dolores expedita animi quos voluptatum cum impedit quidem illum tempore optio quas asperiores sapiente ab odit, voluptatem rem!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolore deserunt sequi dolores expedita animi quos voluptatum cum impedit quidem illum tempore optio quas asperiores sapiente ab odit, voluptatem rem!</p>
                            <div className="row about-title">
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <img src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2024/5/9/thuc-pham-lanh-manh2-1715225582857866442814.jpg" ></img>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIdjpwrJuOyjmw0hM2jWbGKTXGXNhExWNmrA&s" ></img>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <img src="https://danhgianuocmam.com/wp-content/uploads/2022/07/an-uong-healthy.jpg" ></img>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <img src="https://media.suckhoecong.vn/thumb_x800x450/Images/Uploaded/Share/2020/02/28/huong-dan-xay-dung-mot-che-do-an-uong-lanh-manh-de-day-lui-benh-tat11582860639.jpg" ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="about_page right">

                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolore deserunt sequi dolores expedita animi quos voluptatum cum impedit quidem illum tempore optio quas asperiores sapiente ab odit, voluptatem rem!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolore deserunt sequi dolores expedita animi quos voluptatum cum impedit quidem illum tempore optio quas asperiores sapiente ab odit, voluptatem rem!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolore deserunt sequi dolores expedita animi quos voluptatum cum impedit quidem illum tempore optio quas asperiores sapiente ab odit, voluptatem rem!</p>
                            <div className="row about-title">
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <img src="https://bepthaibinh.com/wp-content/uploads/2022/08/kinh-doanh-do-an-healthy-6.jpg" ></img>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <img src="https://neufie.edu.vn/wp-content/uploads/2023/10/kinh-doanh-do-an-healthy_10.jpg" ></img>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgHdrjnT0FRP_53olBC4fv_xIIFs6oLEhTw&s" ></img>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <img src="https://www.aosmithhome.com/wp-content/uploads/2022/03/bua-an-lanh-manh.png" ></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <img className="about_page-img" src="https://topicanative.edu.vn/wp-content/uploads/2021/02/eat-clean-bai-1-a.jpeg" ></img>
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