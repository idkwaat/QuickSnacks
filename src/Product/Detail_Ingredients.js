import { Link, useParams } from "react-router-dom";
import data from "../data.json";

function DetailIngredients({ addToCart }) {
    const { ingredients } = data; 
    const { name } = useParams();
    const ingredient = ingredients.find((p) => p.name.toLowerCase() === name.toLowerCase());

    if (!ingredient) {
        return <h2>No ingredient found</h2>;
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });


    return (
        <>
            <div className="page-banner-section section">
                <div className="container">
                    <div className="row">
                        <div className="page-banner-content col-xs-12">
                            <h2>Ingredient Details</h2>
                            <ul className="breadcrumb">
                                <li><Link className="Link" to="/">Home</Link></li>
                                <li className="active">Ingredient Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section section pt-100 pb-60" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="container" style={{ borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', padding: '40px', maxWidth: '1100px', border: '1px solid #e0e0e0' }}>
                    <div className="row mb-40">
                        <div className="col-12 col-md-6 col-lg-4 mb-40">
                            <div className="tab-content mb-10">
                                <div className="pro-large-img tab-pane active" id="pro-large-img-1">
                                    <img src={ingredient.image} style={{ width: '100%', height: '320px', borderRadius: '8px' }} alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8 mb-40">
                            <div className="product-details">
                                <h2 className="title" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>{ingredient.name}</h2>

                                <div className="short-desc section">
                                    <p><strong>Quick Overview:</strong> {ingredient.description || "No description available."}</p>
                                    <p>{ingredient.description || "No description available."}</p>
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
                                    <h3 style={{ fontSize: '20px', color: '#444' }}>1. Product Information:</h3>
                                    <h3 style={{ marginBottom: '20px', color: 'orange' }}>+ {ingredient.thongtin}</h3>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '20px', color: '#444' }}>2. Where to buy:</h3>
                                    <h3 style={{ marginBottom: '20px', color: 'orange' }}>+ {ingredient.noimua}</h3>
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

export default DetailIngredients;
