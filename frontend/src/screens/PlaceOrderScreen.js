import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../actions/orderActions";
import CheckoutSteps from "../components/CheckoutSteps";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import CurrencyFormat from 'react-currency-format';

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
    const orderCreate = useSelector(state => state.orderCreate);
    const {loading, success, error, order} = orderCreate;
    const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
    cart.itemsPrice = toPrice(cart.cartItems.reduce((a, c) => a + c.price,0));
    cart.shippingPrice = cart.itemsPrice > 100? toPrice(0) : toPrice(15);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice;
    const dispatch = useDispatch();
    const placeOrderHandler = () => {
        dispatch(createOrder({...cart, orderItems: cart.cartItems})) // use all cart object and replace cartItems with orderItems
    }
    useEffect(()=>{
        if(success){//if success true it means order created succesfully
            props.history.push(`/order/${order._id}`); // use id of the order to redirect user to the this page 
            dispatch({type: ORDER_CREATE_RESET});
        }
    }, [dispatch, order, props.history, success]); //if success gets true
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
                                    <CurrencyFormat className="price" value={item.price} displayType={'text'} thousandSeparator={true} suffix="₺"></CurrencyFormat>                                  
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
                                    <CurrencyFormat className="price" value={cart.itemsPrice.toFixed(2)} displayType={'text'} thousandSeparator={true} suffix="₺"></CurrencyFormat>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Kargo Ücreti</div>
                                    <CurrencyFormat className="price" value={cart.shippingPrice.toFixed(2)} displayType={'text'} thousandSeparator={true} suffix="₺"></CurrencyFormat>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div> <strong> Toplam Fiyat </strong></div>
                                    <div>
                                        <strong><CurrencyFormat className="price" value={cart.totalPrice.toFixed(2)} displayType={'text'} thousandSeparator={true} suffix="₺"></CurrencyFormat> </strong>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button type="button" onClick={placeOrderHandler} className="primary block" disabled={cart.cartItems.length === 0}>Siparişi Tamamla</button>
                            </li>
                            {loading && <LoadingBox></LoadingBox> /*Conditional rendering section*/} 
                            {error && <MessageBox variant="danger">{error}</MessageBox> /*Conditional rendering section*/}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}