import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../data.json"


export default function Shop_list({ addToCart }) {
    const { products } = data;
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        addToCart(product); // Sử dụng hàm addToCart từ props
        navigate('/cart'); // Điều hướng đến trang giỏ hàng
    };

    const formatter = new Intl.NumberFormat('usd', {
        style: 'currency',
        currency: 'USD'
    })

    const { categoryId } = useParams(); // Lấy categoryId từ URL

    // Lọc sản phẩm theo categoryId
    const filteredProducts = products.filter(product => product.categoryId === parseInt(categoryId, 10));
    return (
        <>
            <div class="page-banner-section section">
                <div class="container">
                    <div class="row">
                        <div class="page-banner-content col-xs-12">
                            <h2>Shop list</h2>
                            <ul class="breadcrumb">
                                <li><Link className="Link" to="/">Home</Link></li>
                                <li class="active">shop list</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="productSection02">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1 style={{ fontSize: '26px', fontWeight: '600' }}>All products</h1>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane  show active" role="tabpanel">
                            <div className="row">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((item) => (
                                        <div className="col-lg-3 col-md-6" key={item.id}>
                                            <div className="productItem01 withoutBorder">
                                                <div className="pThumb">
                                                    <Link to={`/product/${item.id}`}>
                                                        <img src={item.image} alt="" />
                                                    </Link>
                                                    <div className="piActionBtns">
                                                        <Link to="#"><i class="fa-regular fa-heart"></i></Link>
                                                        <Link to="#"><i class="fa-solid fa-shuffle"></i></Link>
                                                        <a style={{ cursor: 'pointer' }} onClick={() => handleAddToCart(item)}><i class="fa-solid fa-cart-shopping"></i></a>
                                                        <Link to={`/product/${item.id}`}><i class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="p_content">
                                                    <h4 className="p-title"><a href="#">{item.name}</a></h4>
                                                    <div className="piPrice">
                                                        <span className="woocommerce-Price-amount amount"></span><span className="woocommerce-Price-currencySymbol" style={{ color: 'black' }}>${formatter.format(item.price)}</span> <span className="woocommerce-Price-amount amount" style={{ padding: '0 12px' }}>-</span> <span className="woocommerce-Price-currencySymbol" ><del style={{ color: 'red' }}>${formatter.format(item.sale_price)}</del></span>
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
                                    <h4>No products found in this category.</h4>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <div class="page-section section">
                <div class="container">
                    <div class="row">
                        <div class="tab-content section">
                            <div class="tab-pane active" id="product-list">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((item) => (
                                        <div class="row">
                                            <div key={item.id}>
                                                <div class="list-product-item">
                                                    <div class="col-xs-12 col-sm-12 col-md-6">
                                                        <div class="list-product-img">
                                                            <Link class="image" to={`/product/${item.id}`} ><img src={item.image} alt="Image" /></Link>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-12 col-md-6">
                                                        <div class="list-product-info fix">
                                                            <h2 class="title"><a href="">{item.name}</a></h2>
                                                            <span className="woocommerce-Price-amount amount"></span><span className="woocommerce-Price-currencySymbol" style={{ color: 'black', fontSize: '16px' }}>${formatter.format(item.price)}</span> <span className="woocommerce-Price-amount amount" style={{ padding: '0 12px' }}>-</span> <span className="woocommerce-Price-currencySymbol" ><del style={{ color: 'red', fontSize: '16px' }}>${formatter.format(item.sale_price)}</del></span>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis porro nesciunt, iste obcaecati, nisi quo aliquam nobis facilis sequi hic voluptatem? Dolor qui voluptate dignissimos assumenda alias fugiat modi!</p>

                                                            <h2 style={{ color: '#000', fontSize: '18px', borderBottom: '3px solid #378', width: '50%' }}>Cooking recipes</h2>
                                                            {/* thành phần cùng với tỉ lệ */}
                                                            <h2 class="">1. Ingredients along with proportions: <span>{item.Ingredients_along_with_proportions}</span></h2>
                                                            {/* Công thức */}
                                                            <h2 class="">2. Detailed formula: <span>{item.Recipe}</span></h2>
                                                            {/* thời gian chuẩn bị */}
                                                            <h2 class="">3. Estimated preparation time: <span>{item.preparation_time}</span></h2>
                                                            {/* ước tính_số lượng */}
                                                            <h2 class="">4. Estimated quantity: <span>{item.estimated_quantity}</span></h2>
                                                            {/* số lượng calo */}
                                                            <h2 style={{ paddingBottom: '10px' }} class="">5. number of calories: <span>{item.number_of_calories}</span></h2>
                                                            <div class="list-action-btn fix">
                                                                <a style={{ cursor: 'pointer' }} onClick={() => handleAddToCart(item)} class="add-to-cart">add to cart</a>
                                                                <Link to="" title="Wishlist"><i class="fa-solid fa-shuffle"></i></Link>
                                                                <Link to="" data-bs-toggle="modal" data-bs-target="#productModal" title="Quickview"><i class="fa-regular fa-heart"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <h4>No products found in this category.</h4>
                                )}
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