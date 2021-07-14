import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsOrder } from "../actions/orderActions";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderScreen(props){
    const orderId = props.match.params.id;
    const orderDetails = useSelector(state => state.orderDetails);
    const {order, loading, error} = orderDetails;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(detailsOrder(orderId));
    }, [dispatch, orderId]); //if success gets true
    return loading ? (
        <LoadingBox></LoadingBox>
        ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
        )   :   (
        <div>
            <div className="headers-center">
                <h1 className="headers">Sipariş No: {order._id}</h1>
            </div>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <div className="headers-center">
                                    <h1 className="headers-small">Teslimat Adresi</h1>
                                </div>
                                <p>
                                    <strong>Ad Soyad:</strong> {order.shippingAddress.fullName} <br></br><br></br>
                                    <strong>Adres:</strong> {order.shippingAddress.address} <br></br><br></br>
                                    <strong>Şehir:</strong> {order.shippingAddress.city} <br></br><br></br>
                                    <strong>Ülke:</strong>  {order.shippingAddress.country}  <br></br><br></br>
                                    <strong>Posta Kodu:</strong> {order.shippingAddress.postalCode} 
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <div className="headers-center">
                                    <h1 className="headers-small">Ürünler</h1>
                                </div>
                                <ul>
                                    {order.orderItems.map((item)=>(
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
                                <div className="headers-center">
                                    <h1 className="headers-small">Sipariş Özeti</h1>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Ürünlerin Ücreti</div>
                                    <div>{order.itemsPrice} TL</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Kargo Ücreti</div>
                                    <div>{order.shippingPrice} TL</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div> <strong> Toplam Fiyat </strong></div>
                                    <div>
                                        <strong> {order.totalPrice} TL </strong>
                                    </div>
                                </div>
                            </li>
                            <div className="headers-center">
                                <MessageBox variant="success">Satın Alım Başarıyla Gerçekleşti!</MessageBox>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}