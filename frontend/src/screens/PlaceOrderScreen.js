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
    const placeOrderHandler = (e) => {
        e.preventDefault();
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
                            <div className="headers-center">
                                <h1 className="headers-small">Teslimat Adresi</h1>
                            </div>
                                <p>
                                    <strong>Ad Soyad:</strong> {cart.shippingAddress.fullName} <br></br><br></br>
                                    <strong>Adres:</strong> {cart.shippingAddress.address} <br></br><br></br>
                                    <strong>Şehir:</strong> {cart.shippingAddress.city} <br></br><br></br>
                                    <strong>Ülke:</strong>  {cart.shippingAddress.country}  <br></br><br></br>
                                    <strong>Posta Kodu:</strong> {cart.shippingAddress.postalCode} 
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <div className="headers-center">
                                    <h1 className="headers-small">Ürünler</h1>
                                </div>
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
                                    <CurrencyFormat className="price" value={cart.itemsPrice} displayType={'text'} thousandSeparator={true} suffix="₺"></CurrencyFormat>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Kargo Ücreti</div>
                                    <CurrencyFormat className="price" value={cart.shippingPrice} displayType={'text'} thousandSeparator={true} suffix="₺"></CurrencyFormat>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div> <strong> Toplam Fiyat </strong></div>
                                    <div>
                                        <strong><CurrencyFormat className="price" value={cart.totalPrice} displayType={'text'} thousandSeparator={true} suffix="₺"></CurrencyFormat> </strong>
                                    </div>
                                </div>
                            </li>
                            <form className="form" onSubmit={placeOrderHandler}>
                                <div>
                                    <label htmlFor="cardNo">Kart Numarası:</label> 
                                    <input type="text" id="cardNo" placeholder="**** **** **** ****" required></input>
                                </div>
                                <div>
                                    <label htmlFor="cardName">Kart Üzerindeki İsim:</label> 
                                    <input type="text" id="cardName" placeholder="Kart Sahibinin Adı ve Soyadı"  required></input>
                                </div>
                                <div>
                                    <label htmlFor="cardExDate">Son Kullanma Tarihi</label>
                                    <input type="text" id="cardExDate"  required placeholder="Ay/Yıl"></input>
                                </div>
                                <div>
                                    <label htmlFor="cvc">Güvenlik Kodu</label>
                                    <input type="text" id="cvc"  required placeholder="CVC/CVV"></input>
                                </div>
                                <div>
                                    <button type="submit" className="primary block-green" disabled={cart.cartItems.length === 0}>Siparişi Tamamla</button>
                                    {loading && <LoadingBox></LoadingBox> /*Conditional rendering section*/} 
                                    {error && <MessageBox variant="danger">{error}</MessageBox> /*Conditional rendering section*/}
                                </div>
                            </form>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}