import { Link } from "react-router-dom";
import React from 'react';


export default function Cart({ cart }) {
    const total = cart.length > 0
        ? cart.reduce((sum, product) => sum + product.price * product.quantity, 0)
        : 0;

        const formatter = new Intl.NumberFormat('usd', {
            style: 'currency',
            currency: 'USD'
        })

    return (
        <>

            <div class="page-banner-section section">
                <div class="container">
                    <div class="row">
                        <div class="page-banner-content col-xs-12">
                            <h2>Cart</h2>
                            <ul class="breadcrumb">
                                <li><Link className="Link" to="/">Home</Link></li>
                                <li class="active">Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-section section pt-100 pb-60">
                <div class="container">
                    <form action="#">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="cart-table table-responsive mb-40">
                                    {cart.length === 0 ? (
                                        <h1>Your cart is empty.</h1>
                                    ) : (
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th class="pro-thumbnail">Image</th>
                                                    <th class="pro-title">Product name</th>
                                                    <th class="pro-price">Price</th>
                                                    <th class="pro-quantity">Quantity</th>
                                                    <th class="pro-subtotal">Total</th>
                                                    <th class="pro-remove">Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map((item) => (
                                                    <tr key={item.id}>
                                                        <td class="pro-thumbnail"><Link to=""><img src={item.image} alt="Image" /></Link></td>
                                                        <td class="pro-title"><Link to="">{item.name}</Link></td>
                                                        <td class="pro-price"><span class="amount">{formatter.format(item.price)}</span></td>
                                                        <td class="pro-quantity"><div class="product-quantity"><input type="number" value={item.quantity} /></div></td>
                                                        <td class="pro-subtotal">{formatter.format(total)}</td>
                                                        <td class="pro-remove"><Link to="">×</Link></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-7 col-12">
                                <div class="cart-buttons mb-30">
                                    <input type="submit" value="Update Cart" />
                                    <Link to="/">Continue Shopping</Link>
                                </div>
                                <div class="cart-coupon mb-40">
                                    <h4>Coupon</h4>
                                    <p>Enter your coupon code if you have one.</p>
                                    <input type="text" placeholder="Coupon code" />
                                    <input type="submit" value="Apply Coupon" />
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-5 col-12">
                                <div class="cart-total mb-40">
                                    <h3>Cart Totals</h3>
                                    <table>
                                        <tbody>
                                            <tr class="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td><span class="amount">$16.00</span></td>
                                            </tr>
                                            <tr class="order-total">
                                                <th>Total</th>
                                                <td>
                                                    <strong><span class="amount">{formatter.format(total)}</span></strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="proceed-to-checkout section mt-30">
                                        <a href="">Proceed to Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
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
