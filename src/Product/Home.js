import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "../data.json";
import { Link, useNavigate, useParams } from "react-router-dom";

function Home({ addToCart }) {
    const { categories, products, Discounted_products } = data;
    const [selectCategoryId, setSelectCategoryId] = useState(0);
    const [fileterProduct, setFilterProduct] = useState([]);
    const limit = 8;
    const filterProduct = products.filter((product) => {
        if (selectCategoryId === 0) {
            return true
        }
        return product.categoryId === selectCategoryId;
    });

    //cart
    const navigate = useNavigate();
    const handleAddToCart = (product) => {
        addToCart(product);
        navigate('/cart');
    };

    //format number
    const formatter = new Intl.NumberFormat('usd', {
        style: 'currency',
        currency: 'USD'
    });

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 2000, min: 1000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1000, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>



            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators" style={{textAlign: 'center'}}>
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">

                    <div class="item active">
                        <img src="https://watermark.lovepik.com/photo/20211118/large/lovepik-gourmet-background-picture_400152283.jpg" style={{ width: '100%', height: '100vh' }} alt="Los Angeles" />
                        <div class="carousel-caption">
                        </div>
                    </div>

                    <div class="item">
                        <img src="./assets/images/banner/banner2.jpg" style={{ width: '100%', height: '100vh' }} alt="Chicago" />
                        <div class="carousel-caption">
                        </div>
                    </div>

                    <div class="item">
                        <img src="./assets/images/banner/banner3.jpg" style={{ width: '100%', height: '100vh' }} alt="New York" />
                        <div class="carousel-caption">
                        </div>
                    </div>

                </div>

                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>


            <section className="offerSection01">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="secTitle" style={{ marginTop: '80px' }}>What <span>We Offer</span> For You</h2>
                            <p className="secDesc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Suscipit aliquid tenetur amet voluptas voluptate ea commodi officiis, quaerat, libero magni doloribus.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="lookBookItem lb01">
                                <h4>Shopping food</h4>
                                <p>Delicious and nutritious food</p>
                                <div className="off">-35% Off</div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="lookBookItem lb02">
                                <h4>Shopping food</h4>
                                <p>Delicious and nutritious food</p>
                                <div className="off">-25% Off</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="productSection01">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="secTitle">Day 14<span> 20% </span> of</h2>
                            <p className="secDesc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Suscipit aliquid tenetur amet voluptas voluptate ea commodi officiis, quaerat, libero magni doloribus.
                            </p>
                            <div className="cd_wrapper">
                                <h5>Ends in:</h5>
                                <div className="countdown_dashboard commoncount text-center clearfix" data-day="01" data-month="10" data-year="2022"></div>
                            </div>
                        </div>
                    </div>
                    <section className="categorySection01">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="categorySlider01">
                                        <Carousel responsive={responsive}>
                                            {Discounted_products.map((item) => (
                                                <div className="cateItem" key={item.id}>
                                                    <img src={item.image} className="card-img-bottom" alt="" />
                                                </div>
                                            ))}
                                        </Carousel>;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >
                </div>
            </section>
            <section className="offerSection02">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="subTitle"></div>
                            <h2 className="secTitle">Wait for the holidays <span> to receive</span> special offers</h2>
                            <div className="countdown_dashboard02 commoncount text-left clearfix" data-day="01" data-month="06" data-year="2022"></div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="productItem02">
                                <div className="p_content">
                                    <h4 className="p-title"><a href="#">Creamy Cold Drinks</a></h4>
                                    <div className="ratings">
                                        <i className="nss-star"></i>
                                        <i className="nss-star"></i>
                                        <i className="nss-star"></i>
                                        <i className="nss-star"></i>
                                        <i className="nss-star"></i>
                                    </div>
                                    <p>Duis molestie diam et mollis<br /> tincidunt. Nulla at mauris ornare,<br /> imperdiet mi</p>
                                    <Link className="cartbtn" to="/cart"><i class="fa-solid fa-cart-shopping"></i>Add To Cart</Link>
                                    <div className="pThumb">
                                        <img src="assets/images/product/f1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="productSection02">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="secTitle"><span>Category</span></h2>
                            <ul className="nav bilogicaTab">
                                <li><Link to="" onClick={() => setSelectCategoryId(0)}>All Categories</Link></li>
                                {categories.map((category) => (
                                    <li role="presentation" key={category.id}>
                                        <a href={category.id} onClick={() => setSelectCategoryId(category.id)} aria-controls="fruits" className="" role="tab" data-toggle="tab">{category.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane  show active" id="all" role="tabpanel">
                            <div className="row">
                                {filterProduct.length > 0 ? (
                                    filterProduct.slice(0, limit).map((product) => (
                                        <div className="col-lg-3 col-md-6" key={product.id}>
                                            <div className="productItem01 withoutBorder">
                                                <div className="pThumb">
                                                    <Link to={`/product/${product.id}`}>
                                                        <img src={product.image} alt="" />
                                                    </Link>
                                                    <div className="piActionBtns">
                                                        <Link to="#"><i class="fa-regular fa-heart"></i></Link>
                                                        <Link to="#"><i class="fa-solid fa-shuffle"></i></Link>
                                                        <a style={{ cursor: 'pointer' }} onClick={() => handleAddToCart(product)}><i class="fa-solid fa-cart-shopping"></i></a>
                                                        <Link to={`/product/${product.id}`}><i class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="p_content">
                                                    <h4 className="p-title"><a href="#">{product.name}</a></h4>
                                                    <div className="piPrice">
                                                        <span className="woocommerce-Price-amount amount"></span><span className="woocommerce-Price-currencySymbol" style={{ color: 'black' }}>${formatter.format(product.price)}</span> <span className="woocommerce-Price-amount amount" style={{ padding: '0 12px' }}>-</span> <span className="woocommerce-Price-currencySymbol" ><del style={{ color: 'red' }}>${formatter.format(product.sale_price)}</del></span>
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
                                    ))
                                ) : (
                                    <h2>No products found</h2>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="subscribeSection01">
                <div className="row">
                    <div className="col-lg-8 col-md-7">
                        <div className="ctaLookbook">
                            <h2 className="secTitle">Nutritious food, rich in vitamins <br /> good for health</h2>
                            <img src="assets/images/home1/3.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="subsribeForm">
                            <div className="nssIcon"><i className="icon-mail"></i></div>
                            <h2 className="secTitle">Subscribe <br />Newsletters Us</h2>
                            <p>Sign up and get a voucher of worth $250.00</p>
                            <form className="mc4wp-form btnRelative" method="post">
                                <input type="email" name="EMAIL" placeholder="Email Address" required="" />
                                <button type="button">Subscribe</button>
                            </form>
                            <img src="assets/images/home1/4.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="productSection02">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="secTitle">New <span>Products</span></h2>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane  show active" role="tabpanel">
                            <div className="row">
                                {products.slice(0, limit).map((product) => {
                                    return (
                                        <div className="col-lg-3 col-md-6" key={product.id}>
                                            <div className="productItem01 withoutBorder">
                                                <div className="pThumb">
                                                    <img src={product.image} alt="" />
                                                    <div className="piActionBtns">
                                                        <Link to="#"><i class="fa-regular fa-heart"></i></Link>
                                                        <Link to="#"><i class="fa-solid fa-shuffle"></i></Link>
                                                        <a style={{ cursor: 'pointer' }} onClick={() => handleAddToCart(product)}><i class="fa-solid fa-cart-shopping"></i></a>
                                                        <Link to={`/product/${product.id}`}><i class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="p_content">
                                                    <h4 className="p-title"><a href="#">{product.name}</a></h4>
                                                    <div className="piPrice">
                                                        <span className="woocommerce-Price-amount amount"></span><span className="woocommerce-Price-currencySymbol" style={{ color: 'black' }}>${formatter.format(product.price)}</span> <span className="woocommerce-Price-amount amount" style={{ padding: '0 12px' }}>-</span> <span className="woocommerce-Price-currencySymbol" ><del style={{ color: 'red' }}>${formatter.format(product.sale_price)}</del></span>
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
                                    );
                                })}
                            </div>
                        </div>
                        <div className="tab-pane" id="fruits" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="productItem01 withoutBorder">
                                        <div className="pThumb">
                                            <img src="assets/images/product/6.png" alt="" />
                                            <div className="piActionBtns">
                                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                <a href=""><i class="fa-solid fa-shuffle"></i></a>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="p_content">
                                            <h4 className="p-title"><a href="#">Mixed Fruits Juice</a></h4>
                                            <div className="piPrice">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>10.00</span> – <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>15.00</span>
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
                                <div className="col-lg-3 col-md-6">
                                    <div className="productItem01 withoutBorder">
                                        <div className="pThumb">
                                            <img src="assets/images/product/7.png" alt="" />
                                            <div className="piActionBtns">
                                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                <a href=""><i class="fa-solid fa-shuffle"></i></a>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="p_content">
                                            <h4 className="p-title"><a href="#">Orchard Avocado Slice</a></h4>
                                            <div className="piPrice">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>12.00</span> – <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>19.00</span>
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
                                <div className="col-lg-3 col-md-6">
                                    <div className="productItem01 withoutBorder">
                                        <div className="pThumb">
                                            <img src="assets/images/product/8.png" alt="" />
                                            <div className="piActionBtns">
                                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                <a href=""><i class="fa-solid fa-shuffle"></i></a>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="p_content">
                                            <h4 className="p-title"><a href="#">Vegan Fresh Radish</a></h4>
                                            <div className="piPrice">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>12.00</span> – <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>10.00</span>
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
                                <div className="col-lg-3 col-md-6">
                                    <div className="productItem01 withoutBorder">
                                        <div className="pThumb">
                                            <img src="assets/images/product/9.png" alt="" />
                                            <div className="piActionBtns">
                                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                <a href=""><i class="fa-solid fa-shuffle"></i></a>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="p_content">
                                            <h4 className="p-title"><a href="#">Organic Lady Finger</a></h4>
                                            <div className="piPrice">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>10.00</span>
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
                            </div>
                        </div>
                        <div className="tab-pane" id="vegetables" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="productItem01 withoutBorder">
                                        <div className="pThumb">
                                            <img src="assets/images/product/10.png" alt="" />
                                            <div className="piActionBtns">
                                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                <a href=""><i class="fa-solid fa-shuffle"></i></a>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="p_content">
                                            <h4 className="p-title"><a href="#">Red Healthy Beet</a></h4>
                                            <div className="piPrice">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>15.00</span> – <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>20.00</span>
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
                                <div className="col-lg-3 col-md-6">
                                    <div className="productItem01 withoutBorder">
                                        <div className="pThumb">
                                            <img src="assets/images/product/11.png" alt="" />
                                            <div className="piActionBtns">
                                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                <a href=""><i class="fa-solid fa-shuffle"></i></a>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="p_content">
                                            <h4 className="p-title"><a href="#">White Cardamon</a></h4>
                                            <div className="piPrice">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>50.00</span> – <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>55.00</span>
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
                                <div className="col-lg-3 col-md-6">
                                    <div className="productItem01 withoutBorder">
                                        <div className="pThumb">
                                            <img src="assets/images/product/12.png" alt="" />
                                            <div className="piActionBtns">
                                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                <a href=""><i class="fa-solid fa-shuffle"></i></a>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="p_content">
                                            <h4 className="p-title"><a href="#">Bucket of Sofeda</a></h4>
                                            <div className="piPrice">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>10.00</span> – <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>15.00</span>
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
                                <div className="col-lg-3 col-md-6">
                                    <div className="productItem01 withoutBorder">
                                        <div className="pThumb">
                                            <img src="assets/images/product/13.png" alt="" />
                                            <div className="piActionBtns">
                                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                <a href=""><i class="fa-solid fa-shuffle"></i></a>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="p_content">
                                            <h4 className="p-title"><a href="#">Pepper Capsicum</a></h4>
                                            <div className="piPrice">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>20.00</span> – <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>25.00</span>
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
                            </div>
                        </div>
                        <div className="tab-pane" id="organic" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="productItem01 withoutBorder">
                                        <div className="pThumb">
                                            <img src="assets/images/product/6.png" alt="" />
                                            <div className="piActionBtns">
                                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                <a href=""><i class="fa-solid fa-shuffle"></i></a>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="p_content">
                                            <h4 className="p-title"><a href="#">Mixed Fruits Juice</a></h4>
                                            <div className="piPrice">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>10.00</span> – <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>15.00</span>
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
                                <div className="col-lg-3 col-md-6">
                                    <div className="productItem01 withoutBorder">
                                        <div className="pThumb">
                                            <img src="assets/images/product/7.png" alt="" />
                                            <div className="piActionBtns">
                                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                <a href=""><i class="fa-solid fa-shuffle"></i></a>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="p_content">
                                            <h4 className="p-title"><a href="#">Orchard Avocado Slice</a></h4>
                                            <div className="piPrice">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>12.00</span> – <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>19.00</span>
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
                                <div className="col-lg-3 col-md-6">
                                    <div className="productItem01 withoutBorder">
                                        <div className="pThumb">
                                            <img src="assets/images/product/8.png" alt="" />
                                            <div className="piActionBtns">
                                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                <a href=""><i class="fa-solid fa-shuffle"></i></a>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="p_content">
                                            <h4 className="p-title"><a href="#">Vegan Fresh Radish</a></h4>
                                            <div className="piPrice">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>12.00</span> – <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>10.00</span>
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
                                <div className="col-lg-3 col-md-6">
                                    <div className="productItem01 withoutBorder">
                                        <div className="pThumb">
                                            <img src="assets/images/product/9.png" alt="" />
                                            <div className="piActionBtns">
                                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                <a href=""><i class="fa-solid fa-shuffle"></i></a>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="p_content">
                                            <h4 className="p-title"><a href="#">Organic Lady Finger</a></h4>
                                            <div className="piPrice">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>10.00</span>
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
                            </div>
                        </div>
                        <div className="tab-pane" id="bakery" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="productItem01 withoutBorder">
                                        <div className="pThumb">
                                            <img src="assets/images/product/10.png" alt="" />
                                            <div className="piActionBtns">
                                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                <a href=""><i class="fa-solid fa-shuffle"></i></a>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="p_content">
                                            <h4 className="p-title"><a href="#">Red Healthy Beet</a></h4>
                                            <div className="piPrice">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>15.00</span> – <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>20.00</span>
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
                                <div className="col-lg-3 col-md-6">
                                    <div className="productItem01 withoutBorder">
                                        <div className="pThumb">
                                            <img src="assets/images/product/11.png" alt="" />
                                            <div className="piActionBtns">
                                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                <a href=""><i class="fa-solid fa-shuffle"></i></a>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="p_content">
                                            <h4 className="p-title"><a href="#">White Cardamon</a></h4>
                                            <div className="piPrice">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>50.00</span> – <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>55.00</span>
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
                                <div className="col-lg-3 col-md-6">
                                    <div className="productItem01 withoutBorder">
                                        <div className="pThumb">
                                            <img src="assets/images/product/12.png" alt="" />
                                            <div className="piActionBtns">
                                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                <a href=""><i class="fa-solid fa-shuffle"></i></a>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="p_content">
                                            <h4 className="p-title"><a href="#">Bucket of Sofeda</a></h4>
                                            <div className="piPrice">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>10.00</span> – <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>15.00</span>
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
                                <div className="col-lg-3 col-md-6">
                                    <div className="productItem01 withoutBorder">
                                        <div className="pThumb">
                                            <img src="assets/images/product/13.png" alt="" />
                                            <div className="piActionBtns">
                                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                <a href=""><i class="fa-solid fa-shuffle"></i></a>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="p_content">
                                            <h4 className="p-title"><a href="#">Pepper Capsicum</a></h4>
                                            <div className="piPrice">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>20.00</span> – <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>25.00</span>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section >
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

export default Home;