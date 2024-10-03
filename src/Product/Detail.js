import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../data.json"
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function Detail({ addToCart }) {
    const { products } = data;
    const limit = 8;
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <h2>No products found</h2>
    }


    const formatter = new Intl.NumberFormat('usd', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <>
            <div className="page-banner-section section">
                <div className="container">
                    <div className="row">
                        <div className="page-banner-content col-xs-12">
                            <h2>Product Details</h2>
                            <ul className="breadcrumb">
                                <li><Link className="Link" to="/">Home</Link></li>
                                <li className="active">Product Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section section pt-100 pb-60">
                <div className="container">
                    <div className="row mb-40">
                        <div className="col-12 col-md-6 col-lg-4 mb-40">
                            <div className="tab-content mb-10">
                                <div className="pro-large-img tab-pane active" id="pro-large-img-1">
                                    <Zoom>
                                        <img src={product.image} style={{ width: '100%', height: '320px' }} alt="Image" />
                                    </Zoom>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8 mb-40">
                            <div className="product-details">
                                <h2 className="title">{product.name}</h2>
                                <span className="price section"><span className="new" style={{ color: 'black' }}>${formatter.format(product.price)}</span><span className="old" style={{ color: 'red' }}>${formatter.format(product.sale_price)}</span></span>
                                <span className="availability section"><strong>available:</strong> <span className="in"><i className="fa fa-check"></i> In Stock</span><span className="out"><i className="fa fa-times"></i> Out of Stock</span></span>
                                <div className="short-desc section">
                                    <p><strong>Quick Overview:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem portul indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                                <div className="color-list section">
                                    <button className="active" style={{ backgroundColor: '#855439' }}><i className="fa fa-check"></i></button>
                                    <button style={{ backgroundColor: '#FF6801' }}><i className="fa fa-check"></i></button>
                                    <button style={{ backgroundColor: '#DCDCDA' }}><i className="fa fa-check"></i></button>
                                </div>
                                <div className="quantity-cart section">
                                    <div className="product-quantity">
                                        <form>
                                            <input type="number" placeholder="0" />
                                        </form>
                                    </div>
                                    <Link to="/cart">
                                        <button className="add-to-cart">add to cart</button>
                                    </Link>
                                </div>
                                <div className="share-icons section">
                                    <a className="twitter" href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i> instagram</a>
                                    <a className="facebook" href="https://x.com/?lang=vi"><i className="fa-brands fa-twitter"></i> twitter</a>
                                    <a className="google" href="https://www.tiktok.com/vi-VN/"><i class="fa-brands fa-tiktok"></i> tiktok</a>
                                    <a className="pinterest" href="https://www.facebook.com/?stype=lo&flo=1&deoia=1&jlou=AfeDESCOKtwPR_KVntOhdP0TCoS8HSVLhPVWF6uMeA9_8yC4jiIK5B8EgRIomKCHxMGOiSTRARA4BgQ9ttRtFJ_sjMmpCdIka4IQ9DLeTcTijQ&smuh=33085&lh=Ac9MvE4L_cJ-OY9uOsE"><i className="fa-brands fa-square-facebook"></i> facebook</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="pro-info-tab-list section nav">
                                <li><a className="active" href="#more-info" data-bs-toggle="tab">Cooking recipes</a></li>
                            </ul>
                        </div>
                        <div className="tab-content col-12">
                            <div className="pro-info-tab tab-pane active" id="more-info">
                                <div>
                                    <h3>1. Ingredients along with proportions: </h3> <h3 style={{ marginBottom: '20px', color: 'orange' }}>+ {product.Ingredients_along_with_proportions}</h3>
                                </div>
                                <div>
                                    <h3>2. Detailed formula: </h3> <h3 style={{ marginBottom: '20px', color: 'orange' }}>+ {product.Recipe}</h3>
                                </div>
                                <div>
                                    <h3>3. Estimated preparation time:</h3>  <h3 style={{ marginBottom: '20px', color: 'orange' }}>+ {product.preparation_time}</h3>
                                </div>
                                <div>
                                    <h3>4. Estimated quantity:  </h3> <h3 style={{ marginBottom: '20px', color: 'orange' }}>+ {product.estimated_quantity}</h3>
                                </div>
                                <div>
                                    <h3>5. number of calories:</h3> <h3 style={{ marginBottom: '20px', color: 'orange' }}>+ {product.number_of_calories}</h3>
                                </div>
                                <div>
                                    <h3>6. You can find the ingredients at:</h3>
                                    <h3 style={{ marginBottom: '20px', color: 'orange' }}>
                                        {product?.essentials?.length > 0 ? (
                                            <ul className="list-unstyled">
                                                {product.essentials.map((essential, index) => (
                                                    <li key={index} className="d-flex align-items-center mb-2">
                                                        <span className="text-left" style={{ flexGrow: 1 }}>+ {essential.item}</span>
                                                        <span className="ml-2" style={{ width: '200px', display: 'flex', justifyContent: 'center' }}>
                                                            {/* Sử dụng Link để chuyển hướng đến trang chi tiết nguyên liệu */}
                                                            <Link to={`/ingredients/${essential.item}`} className="btn btn-primary custom-button w-100">
                                                                {essential.store}
                                                            </Link>
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>No essentials available</p>
                                        )}
                                    </h3>
                                </div>
                            </div>
                            <div className="pro-info-tab tab-pane" id="data-sheet">
                                <table className="table-data-sheet">
                                    <tbody>
                                        <tr className="odd">
                                            <td>Compositions</td>
                                            <td>Cotton</td>
                                        </tr>
                                        <tr className="even">
                                            <td>Styles</td>
                                            <td>Casual</td>
                                        </tr>
                                        <tr className="odd">
                                            <td>Properties</td>
                                            <td>Short Sleeve</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="pro-info-tab tab-pane" id="reviews">
                                <a href="">Be the first to write your review!</a>
                            </div>
                        </div>
                    </div>
                    <div className="row detail-review">
                        <div className="col-12">
                            <ul className="pro-info-review section nav">
                                <li><a className="active" href="#more-info" data-bs-toggle="tab">Add a review</a></li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="row detail-input">
                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <input type="text" placeholder="Name"></input>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <input type="text" placeholder="Email"></input>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <textarea name="detail-textarea" rows="6" placeholder="Your review"></textarea>
                        </div>

                        <div class="col-md-12">
                            <button type="button" className="detail-btn">Send</button>
                        </div>
                    </div>

                    <div className="comment">
                        <h4><i class="fa-solid fa-user"></i></h4>
                        <h4 >Nguyen Van A</h4>
                    </div>
                    <div className="comment-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis natus numquam laborum eligendi quidem debitis ea.<br /> Obcaecati a corrupti molestiae adipisci quaerat officia vero deleniti eius dolores, qui harum consectetur.</p>
                    </div>

                    <div className="comment">
                        <h4><i class="fa-solid fa-user"></i></h4>
                        <h4 >Nguyen Van B</h4>
                    </div>
                    <div className="comment-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis natus numquam laborum eligendi quidem debitis ea.<br /> Obcaecati a corrupti molestiae adipisci quaerat officia vero deleniti eius dolores, qui harum consectetur.</p>
                    </div>
                </div>
            </div>
            <section className="productSection02">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="secTitle">New <span>Products</span></h2>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane  show active" id="all" role="tabpanel">
                            <div className="row">
                                {products.slice(0, limit).map((product) => (
                                    <div className="col-lg-3 col-md-6">
                                        <div className="productItem01 withoutBorder" key={product.id}>
                                            <div className="pThumb">
                                                <img src={product.image} alt="" />
                                                <div className="piActionBtns">
                                                    <Link to="#"><i class="fa-regular fa-heart"></i></Link>
                                                    <Link to="#"><i class="fa-solid fa-shuffle"></i></Link>
                                                    <Link to="/cart" style={{ cursor: 'pointer' }}><i class="fa-solid fa-cart-shopping"></i></Link>
                                                    <Link to={`/product/${product.id}`}><i class="fa-solid fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                            <div className="p_content">
                                                <h4 className="p-title"><a href="#">{product.name}</a></h4>
                                                <div className="piPrice">
                                                    <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>{product.price}</span> – <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>15.00</span>
                                                </div>
                                                <div className="ratings">
                                                    <i className="nss-star"></i>
                                                    <i className="nss-star"></i>
                                                    <i className="nss-star"></i>
                                                    <i className="nss-star"></i>
                                                    <i className="nss-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

export default Detail;