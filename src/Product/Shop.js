import { Link, useNavigate } from "react-router-dom";
import data from "../data.json";
import { useEffect, useState } from "react";
export default function Shop({ addToCart }) {
    const { categories, products, best_seller } = data;
    const [selectedCategoryId, setSelectedCategoryId] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterProduct, setFilteredProducts] = useState(products.slice(0, 6));
    const handleSearch = () => {
        const filterProduct = products.filter((product) => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategoryId = selectedCategoryId === 0 || product.categoryId === selectedCategoryId;

            return matchesSearch && matchesCategoryId;
        });
        setFilteredProducts(filterProduct.slice(0, 6));
    };
    useEffect(() => {
        handleSearch();
    }, [selectedCategoryId, searchTerm]);

    const handleCategorySelect = (categoryId) => {
        setSelectedCategoryId(categoryId);  // Không cần gọi lại handleSearch ở đây nữa
    };

    const formatter = new Intl.NumberFormat('usd', {
        style: 'currency',
        currency: 'USD'
    });


    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        addToCart(product); // Sử dụng hàm addToCart từ props
        navigate('/cart'); // Điều hướng đến trang giỏ hàng
    };
    return (
        <>
            <div className="page-banner-section section">
                <div className="container">
                    <div className="row">
                        <div className="page-banner-content col-xs-12">
                            <h2>Shop</h2>
                            <ul className="breadcrumb">
                                <li><Link className="Link" to="/">Home</Link></li>
                                <li className="active">Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-section section pt-100 pb-60">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                            <div class="single-sidebar mb-8">
                                <div class="sidebar-search">
                                    <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search here..." />
                                    <button class="submit" onClick={handleSearch}><i class="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                            </div>

                            <div class="single-sidebar mb-8">
                                <h3 style={{ marginTop: '20px', textAlign: 'center' }} class="sidebar-title">Category</h3>
                                <ul class="category-sidebar">
                                    <li><Link to="" onClick={() => handleCategorySelect(0)}>All Categories</Link></li>
                                    {categories.map((category) => (
                                        <li key={category.id}>
                                            <Link onClick={() => handleCategorySelect(category.id)} to="">{category.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                            <div className="tab-content">
                                <div className="tab-pane  show active" id="all" role="tabpanel">
                                    <div className="row">
                                        {filterProduct.length > 0 ? (
                                            filterProduct.map((product) => (
                                                <div className="col-xs-12 col-sm-12 col-md-6" key={product.id}>
                                                    <div className="productItem01 withoutBorder">
                                                        <div className="pThumb">
                                                            <img src={product.image} alt="" />
                                                            <div className="piActionBtns">
                                                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                                <a href=""><i class="fa-solid fa-shuffle"></i></a>
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
                                            <h4>Không tìm thấy sản phẩm nào</h4>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="testimonialSection01">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="secTitle">Best selling product</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testmonialSlider01 owl-carousel">
                                <div className="testItem01">
                                    <div className="tsAuthor">
                                        <img src="assets/images/home1/t1.png" alt="" />
                                        <h5>Albert Huynaya</h5>
                                        <span>Reviwer</span>
                                        <div className="rv_rate">
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star1"></i>
                                        </div>
                                    </div>
                                    <p className="quatation">
                                        Aliquam pretium tellus vel sem condimentum faucibus. Curabitur egestas pellentesque felis ut vehicula. Cras faucibus purus sed risus
                                    </p>
                                    <div className="qicon"><i className="icon-quote"></i></div>
                                </div>
                                <div className="testItem01">
                                    <div className="tsAuthor">
                                        <img src="assets/images/home1/t2.png" alt="" />
                                        <h5>Selena Gomez</h5>
                                        <span>Designer</span>
                                        <div className="rv_rate">
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star1"></i>
                                        </div>
                                    </div>
                                    <p className="quatation">
                                        Aliquam pretium tellus vel sem condimentum faucibus. Curabitur egestas pellentesque felis ut vehicula. Cras faucibus purus sed risus
                                    </p>
                                    <div className="qicon"><i className="icon-quote"></i></div>
                                </div>
                                <div className="testItem01">
                                    <div className="tsAuthor">
                                        <img src="assets/images/home1/t1.png" alt="" />
                                        <h5>William Smith</h5>
                                        <span>Ceo & Founder</span>
                                        <div className="rv_rate">
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star1"></i>
                                        </div>
                                    </div>
                                    <p className="quatation">
                                        Aliquam pretium tellus vel sem condimentum faucibus. Curabitur egestas pellentesque felis ut vehicula. Cras faucibus purus sed risus
                                    </p>
                                    <div className="qicon"><i className="icon-quote"></i></div>
                                </div>
                                <div className="testItem01">
                                    <div className="tsAuthor">
                                        <img src="assets/images/home1/t2.png" alt="" />
                                        <h5>Philip Mendez</h5>
                                        <span>Reviwer</span>
                                        <div className="rv_rate">
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star1"></i>
                                        </div>
                                    </div>
                                    <p className="quatation">
                                        Aliquam pretium tellus vel sem condimentum faucibus. Curabitur egestas pellentesque felis ut vehicula. Cras faucibus purus sed risus
                                    </p>
                                    <div className="qicon"><i className="icon-quote"></i></div>
                                </div>
                                <div className="testItem01">
                                    <div className="tsAuthor">
                                        <img src="assets/images/home1/t2.png" alt="" />
                                        <h5>Selena Gomez</h5>
                                        <span>Designer</span>
                                        <div className="rv_rate">
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star1"></i>
                                        </div>
                                    </div>
                                    <p className="quatation">
                                        Aliquam pretium tellus vel sem condimentum faucibus. Curabitur egestas pellentesque felis ut vehicula. Cras faucibus purus sed risus
                                    </p>
                                    <div className="qicon"><i className="icon-quote"></i></div>
                                </div>
                                <div className="testItem01">
                                    <div className="tsAuthor">
                                        <img src="assets/images/home1/t1.png" alt="" />
                                        <h5>William Smith</h5>
                                        <span>Ceo & Founder</span>
                                        <div className="rv_rate">
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star"></i>
                                            <i className="nss-star1"></i>
                                        </div>
                                    </div>
                                    <p className="quatation">
                                        Aliquam pretium tellus vel sem condimentum faucibus. Curabitur egestas pellentesque felis ut vehicula. Cras faucibus purus sed risus
                                    </p>
                                    <div className="qicon"><i className="icon-quote"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="productSection03">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="productItem03">
                                <Link className="cartbtn" to="/cart"><i class="fa-solid fa-cart-shopping"></i>Add To Cart</Link>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-6">
                            <div className="tab-content">
                                <div className="tab-pane show active" id="featured" role="tabpanel">
                                    <div className="row">
                                        {best_seller.map((item) => (
                                            <div className="col-xl-6 col-md-12" key={item.id}>
                                                <div className="productItem04">
                                                    <div className="pThumb">
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                    <div className="p_content">
                                                        <h4 className="p-title"><a href="#">{item.name}</a></h4>
                                                        <div className="piPrice">
                                                            <span className="woocommerce-Price-amount amount"></span><span className="woocommerce-Price-currencySymbol" style={{ color: 'black' }}>${formatter.format(item.price)}</span> <span className="woocommerce-Price-amount amount" style={{ padding: '0 12px' }}>-</span> <span className="woocommerce-Price-currencySymbol" ><del style={{ color: 'red' }}>${formatter.format(item.sale_price)}</del></span>
                                                        </div>
                                                        <div className="piActionBtns">
                                                            <a style={{ cursor: 'pointer' }} onClick={() => handleAddToCart(item)} className="cartbtn">Add To Cart</a>
                                                            <a href="#"><i class="fa-regular fa-heart"></i></a>
                                                            <a href=""><i class="fa-solid fa-shuffle"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
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