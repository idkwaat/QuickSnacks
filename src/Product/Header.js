import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import data from "../data.json";
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from "react";



function Header({ name, ...props }) {
    const { categories, products } = data;

    const [searchTerm, setSearchTem] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
    };

    const navigate = useNavigate();

    const handleCategoryClick = (categoryId) => {
        navigate(`/shop_list/${categoryId}`);
    };


    const handleSearch = () => {
        navigate(`/search?query=${searchTerm}`);
    }


    const [isVisible, setIsVisible] = useState(false);

    // Hàm này sẽ cuộn trang lên đầu
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",  // Cuộn mượt mà
        });
    };

    // Hiển thị nút khi người dùng cuộn xuống dưới
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);



    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <header className="header-section section sticker header-transparent ">
                <div className="scroll-to-top">
                    {isVisible && (
                        <button onClick={scrollToTop} >
                        </button>
                    )}
                </div>
                <div className="row align-center">
                    <div className="col-lg-1 col-sm-1 col-1">
                        <div className="header-logo">
                            <a href=""><img src="https://bestprint.vn/wp-content/uploads/2022/02/42-logo-do-an-ngon-se-khien-ban-phai-chay.jpeg" alt="main logo" /></a>
                        </div>
                    </div>
                    <div className="col-lg-8 col-8 close-menu-btn">
                        <nav className="main-menu text-center">
                            <ul>
                                <li className="active"><Link to="/">Home</Link>
                                </li>
                                <li><Link to="#">Shop</Link>
                                    <ul className="sub-menu">
                                        {categories.map((item) => (
                                            <li key={item.id}><Link onClick={(e) => { e.preventDefault(); handleCategoryClick(item.id) }} to=""><span>{item.name}</span></Link></li>
                                        ))}
                                    </ul>
                                </li>
                                <li><Link to="#">About</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/about-us"><span>About us</span></Link></li>
                                        <li><Link to="/about-page"><span>About page</span></Link></li>
                                    </ul></li>
                                <li><Link to="#">Pages</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/shop"><span>Shop</span></Link></li>
                                        <li><Link to="/product-infomation"><span>Product Infomation</span></Link></li>
                                        <li><Link to="/rate-feedback"><span>Rate Feedback</span></Link></li>
                                        <li><Link to="/cart"><span>cart</span></Link></li>
                                        <li><Link to="/contact"><span>contact</span></Link></li>
                                        <li><Link to="/login"><span>login</span></Link></li>
                                        <li><Link to="/register"><span>register</span></Link></li>
                                        <li><Link to="/image-gallery"><span>Image Gallery</span></Link></li>
                                    </ul>
                                </li>
                                <li><Link to="#">Bolg</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/blog">blog</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 close-menu-btn">
                        <div className="header-option-btns float-end">
                            <div className="header-search float-start">
                                <button className="search-toggle" onClick={handleSearchClick} >
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                            <div className="header-search float-start">
                                <Link to="/login" className="search-toggle" data-bs-toggle="modal" data-bs-target="#myModal" ><i className="fa-regular fa-user"></i></Link>
                            </div>
                            <div className="header-search float-start">
                                <Link to="/cart" className="search-toggle" data-bs-toggle="modal" data-bs-target="#myModal" ><i className="fa-solid fa-cart-shopping"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-8 col-8 open-menu-btn">
                        <Button onClick={handleShow} className="">
                            <i class="fa-solid fa-bars"></i>
                        </Button>
                        <Offcanvas show={show} onHide={handleClose} {...props}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>
                                    <h1 style={{ marginRight: '90px' }}>Menu</h1>
                                </Offcanvas.Title>
                                <div >
                                    <div className="header-search float-start">
                                        <a href="/login" className="search-toggle" data-bs-toggle="modal" data-bs-target="#myModal" ><i className="fa-regular fa-user"></i></a>
                                    </div>
                                    <div className="header-search float-start">
                                        <a href="/cart" className="search-toggle" data-bs-toggle="modal" data-bs-target="#myModal" ><i className="fa-solid fa-cart-shopping"></i></a>
                                    </div>
                                </div>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <input style={{ width: '100%', padding: '8px 16px', fontSize: '14px' }} type="input" placeholder="search"></input>

                                <nav className="main-menu cpo text-center" style={{ marginTop: '40px' }}>
                                    <ul>
                                        <li className="active"><a href="/">Home</a></li>
                                        <li><a href="#">Menu</a>
                                            <ul className="sub-menu">
                                                <li><a href="/shop_list"><span>Shop list</span></a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">About</a>
                                            <ul className="sub-menu">
                                                <li><a href="/about-us"><span>About us</span></a></li>
                                                <li><a href="/about-page"><span>About page</span></a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Pages</a>
                                            <ul className="sub-menu">
                                                <li><a href="/shop"><span>Shop</span></a></li>
                                                <li><a href="/product-infomation"><span>Product Infomation</span></a></li>
                                                <li><a href="/cart">Cart</a></li>
                                                <li><a href="/contact">Contact</a></li>
                                                <li><a href="/login">login</a></li>
                                                <li><a href="/register">Register</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Blog</a>
                                            <ul className="sub-menu">
                                                <li><a href="/blog">Blog</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </nav>
                            </Offcanvas.Body>
                        </Offcanvas>

                    </div>
                </div>

                {showSearch && (
                    <form className="form-search" >
                        <input style={{ width: '50%', padding: '8px 24px' }} type="text" value={searchTerm} onChange={(e) => setSearchTem(e.target.value)} placeholder="Tìm kiếm..." />
                        <button type="submit" onClick={handleSearch}> <i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                )}
            </header>
        </>
    );
};

export default Header;

