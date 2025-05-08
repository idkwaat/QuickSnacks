import { Link, useParams } from "react-router-dom";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';




function ProductInfomation() {



    return (
        <>
            <div className="page-banner-section section">
                <div className="container">
                    <div className="row">
                        <div className="page-banner-content col-xs-12">
                            <h2>Product Infomation</h2>
                            <ul className="breadcrumb">
                                <li><Link className="Link" to="/">Home</Link></li>
                                <li className="active">Product Infomation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section section pt-100 pb-60" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="container" style={{ borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', padding: '40px', maxWidth: '1100px', border: '1px solid #e0e0e0' }}>
                    <div className="row mb-40">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="tab-content mb-10">
                                <div className="pro-large-img tab-pane active" id="pro-large-img-1">
                                    <Zoom>
                                        <img src="./assets/images/home1/sandwiches.jpg" style={{ width: '100%', height: '320px', borderRadius: '8px' }} alt="Image" />
                                    </Zoom>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="product-details">
                                <h2 className="title" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Sandwiches</h2>

                                <div className="short-desc section">
                                    <p><strong>Quick Overview:</strong> Sandwiches can be healthy or indulgent, depending on the ingredients used. Whole-grain breads, lean proteins, and plenty of vegetables can make a nutritious option, while excessive use of sauces, fried fillings, or white bread can increase calories and reduce nutritional value. </p>

                                </div>

                                <div className="quantity-cart section">
                                    {/* You can add cart functionality here */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="pro-info-tab-list section nav">
                                <li><a className="active" href="#more-info" data-bs-toggle="tab">About Information</a></li>
                            </ul>
                        </div>
                        <div className="tab-content col-12">
                            <div className="pro-info-tab tab-pane active" id="more-info">
                                <div>
                                    <h3 style={{ fontSize: '20px', color: '#444' }}>1. Essential Items:</h3>
                                    <h3 style={{ marginBottom: '20px', color: 'orange' }}> Bread (whole grain or sourdough)<br />
                                        Deli meats (turkey, ham, salami)<br />
                                        Cheese (cheddar, Swiss, provolone)<br />
                                        Vegetables (lettuce, tomatoes, cucumbers)<br />
                                        Condiments (mayonnaise, mustard, pesto)</h3>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '20px', color: '#444' }}>2. Where to buy:</h3>
                                    <h3 style={{ marginBottom: '20px', color: 'orange' }}>
                                        Grocery stores like Walmart, Kroger, or local supermarkets<br />
                                        Specialty deli shops for fresh meats and cheeses
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section section pt-100 pb-60" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="container" style={{ borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', padding: '40px', maxWidth: '1100px', border: '1px solid #e0e0e0' }}>
                    <div className="row mb-40">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="tab-content mb-10">
                                <div className="pro-large-img tab-pane active" id="pro-large-img-1">
                                    <Zoom>
                                        <img src="./assets/images/home1/sandwiches.jpg" style={{ width: '100%', height: '320px', borderRadius: '8px' }} alt="Image" />
                                    </Zoom>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="product-details">
                                <h2 className="title" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Greek Yogurt with Fruit</h2>

                                <div className="short-desc section">
                                    <p><strong>Quick Overview:</strong> Greek Yogurt with Fruit is a delicious and versatile dish that can be enjoyed at any time of day. Its combination of protein, probiotics, and vitamins makes it a nourishing choice, while the variety of fruits allows for endless customization. Whether enjoyed on its own or as part of a more elaborate meal, it remains a popular and healthy option for individuals seeking to maintai </p>

                                </div>

                                <div className="quantity-cart section">
                                    {/* You can add cart functionality here */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="pro-info-tab-list section nav">
                                <li><a className="active" href="#more-info" data-bs-toggle="tab">About Information</a></li>
                            </ul>
                        </div>
                        <div className="tab-content col-12">
                            <div className="pro-info-tab tab-pane active" id="more-info">
                                <div>
                                    <h3 style={{ fontSize: '20px', color: '#444' }}>1. Essential Items:</h3>
                                    <h3 style={{ marginBottom: '20px', color: 'orange' }}> Plain Greek yogurt<br />
                                        Fresh fruit (berries, bananas, peaches)<br />
                                        Optional: honey or granola for topping<br />
                                    </h3>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '20px', color: '#444' }}>2. Where to buy:</h3>
                                    <h3 style={{ marginBottom: '20px', color: 'orange' }}>
                                        Supermarkets for yogurt and fresh fruit<br />
                                        Health food stores for organic options
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section section pt-100 pb-60" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="container" style={{ borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', padding: '40px', maxWidth: '1100px', border: '1px solid #e0e0e0' }}>
                    <div className="row mb-40">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="tab-content mb-10">
                                <div className="pro-large-img tab-pane active" id="pro-large-img-1">
                                    <Zoom>
                                        <img src="./assets/images/home1/Banana with Nut Butter.jpg" style={{ width: '100%', height: '320px', borderRadius: '8px' }} alt="Image" />
                                    </Zoom>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="product-details">
                                <h2 className="title" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}> Banana with Nut Butter</h2>

                                <div className="short-desc section">
                                    <p><strong>Quick Overview:</strong> Banana with Nut Butter is a deliciously satisfying snack that offers a perfect balance of carbohydrates, healthy fats, and protein. Its ease of preparation, nutritional benefits, and versatility make it a favorite among those looking for a quick, nutritious option. Whether enjoyed on its own or as part of a more substantial meal, this snack is sure to please both children and adults alike.</p>

                                </div>

                                <div className="quantity-cart section">
                                    {/* You can add cart functionality here */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="pro-info-tab-list section nav">
                                <li><a className="active" href="#more-info" data-bs-toggle="tab">About Information</a></li>
                            </ul>
                        </div>
                        <div className="tab-content col-12">
                            <div className="pro-info-tab tab-pane active" id="more-info">
                                <div>
                                    <h3 style={{ fontSize: '20px', color: '#444' }}>1. Essential Items:</h3>
                                    <h3 style={{ marginBottom: '20px', color: 'orange' }}>
                                        Ripe bananas<br />
                                        Nut butter (peanut, almond, or sunflower butter)<br />
                                    </h3>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '20px', color: '#444' }}>2. Where to buy:</h3>
                                    <h3 style={{ marginBottom: '20px', color: 'orange' }}>
                                        Grocery stores (like Walmart or Kroger) for bananas and nut butter<br />
                                        Health food stores for natural nut butter options
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section section pt-100 pb-60" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="container" style={{ borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', padding: '40px', maxWidth: '1100px', border: '1px solid #e0e0e0' }}>
                    <div className="row mb-40">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="tab-content mb-10">
                                <div className="pro-large-img tab-pane active" id="pro-large-img-1">
                                    <Zoom>
                                        <img src="./assets/images/home1/Green Smoothie.jpg" style={{ width: '100%', height: '320px', borderRadius: '8px' }} alt="Image" />
                                    </Zoom>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="product-details">
                                <h2 className="title" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}> Green Smoothie</h2>

                                <div className="short-desc section">
                                    <p><strong>Quick Overview:</strong> Green smoothies are a delicious and versatile way to increase your intake of fruits and vegetables. Their ease of preparation, health benefits, and customizable nature make them a popular choice for breakfast, snacks, or post-workout recovery. With endless combinations of greens, fruits, and other ingredients, green smoothies can be tailored to suit individual tastes and dietary needs while providing a powerhouse of nutrition in every sip.</p>

                                </div>

                                <div className="quantity-cart section">
                                    {/* You can add cart functionality here */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="pro-info-tab-list section nav">
                                <li><a className="active" href="#more-info" data-bs-toggle="tab">About Information</a></li>
                            </ul>
                        </div>
                        <div className="tab-content col-12">
                            <div className="pro-info-tab tab-pane active" id="more-info">
                                <div>
                                    <h3 style={{ fontSize: '20px', color: '#444' }}>1. Essential Items:</h3>
                                    <h3 style={{ marginBottom: '20px', color: 'orange' }}>
                                        Fresh spinach or kale<br />
                                        Ripe bananas<br />
                                        Fresh or frozen fruit (mango, pineapple)<br />
                                        Yogurt or coconut water<br />
                                        Chia seeds (optional)<br />
                                    </h3>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '20px', color: '#444' }}>2. Where to buy:</h3>
                                    <h3 style={{ marginBottom: '20px', color: 'orange' }}>
                                        Supermarkets for fresh produce and frozen fruit<br />
                                        Health food stores for chia seeds and organic greens
                                    </h3>
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

export default ProductInfomation;
