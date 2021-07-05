import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";

export default function PlaceOrderScreen(props){
    const cart = useSelector((state)=> state.cart);
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;
    if(!userInfo){ 
        props.history.push("/signin");
    }
    if(!cart.paymentMethod){
        props.history.push("/payment")
    }
    const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
    cart.itemsPrice = toPrice(cart.cartItems.reduce((a, c) => a + c.price,0));
    cart.shippingPrice = cart.itemsPrice > 100? toPrice(0) : toPrice(15);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice;
    const placeOrderHandler = () => {
        //TODO: dispatch place order action
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Teslimat Adresi</h2>
                                <p>
                                    <strong>Ad Soyad:</strong> {cart.shippingAddress.fullName} <br></br>
                                    <strong>Adres:</strong> {cart.shippingAddress.address},
                                     {cart.shippingAddress.postalCode}, {cart.shippingAddress.city} / {cart.shippingAddress.country}
                                    
                                </p>
                            </div>
                        </li>
                         <li>
                            <div className="card card-body">
                                <h2>Ödeme Yöntemi</h2>
                                <p>
                                    <strong>Method:</strong> {cart.paymentMethod}
                                </p>
                            </div>
                        </li> 
                        <li>
                            <div className="card card-body">
                                <h2>Ürünler</h2>
                                <ul>
                        {cart.cartItems.map((item)=>(
                            <li key={item.product}>
                                <div className="row">
                                    <div>
                                        <img src = {item.image} alt = {item.name} className="small"></img>
                                    </div>
                                    <div className="min-30">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div>{item.price} TL</div>                                  
                                </div>
                            </li>
                        ))}
                    </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <h2>Sipariş Özeti</h2>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Ürünlerin Ücreti</div>
                                    <div>{cart.itemsPrice.toFixed(2)} TL</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Kargo Ücreti</div>
                                    <div>{cart.shippingPrice.toFixed(2)} TL</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div> <strong> Toplam Fiyat </strong></div>
                                    <div>
                                        <strong> {cart.totalPrice.toFixed(2)} TL </strong>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button type="button" onClick={placeOrderHandler} className="primary block" disabled={cart.cartItems.length === 0}>Siparişi Tamamla</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}