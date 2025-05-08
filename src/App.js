import './App.css';
import Header from './Product/Header';
import Footer from './Product/Footer';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Product/Home';
import Cart from './Product/Cart';
import Blog from './Product/Blog';
import Detail from './Product/Detail';
import Login from './Product/Login';
import Register from './Product/Register';
import Shop from './Product/Shop';
import Contact from './Product/Contact';
import Shop_list from './Product/shop_list';
import data from "./data.json";
import AboutUs from './Product/About us';
import Image_gallary from './Product/Image Gallery';
import AboutPage from './Product/About page';
import DetailIngredients from './Product/Detail_Ingredients';
import ProductInfomation from './Product/Product_Infomation';
import RateFeecback from './Product/Rate feedback';
function App() {

  const { categories, products } = data;
  const [cart, setCart] = useState([]);

  // Hàm để thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);

      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/" element={<Home limit="4" />}></Route>
        <Route path="/search" element={<Home />}></Route>
        <Route path="/ingredients/:name" element={<DetailIngredients />} />
        <Route path="/" element={<Header categories={categories} />}></Route>
        <Route path="/image-gallery" element={<Image_gallary />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/about-page" element={<AboutPage />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/product-infomation" element={<ProductInfomation />}></Route>
        <Route path="/rate-feedback" element={<RateFeecback />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/shop" element={<Shop addToCart={addToCart} />}></Route>
        <Route path="/shop_list/:categoryId" element={<Shop_list addToCart={addToCart} products={products} />}></Route>
        <Route path="/product/:id/" element={<Detail addToCart={addToCart} />}></Route>
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
