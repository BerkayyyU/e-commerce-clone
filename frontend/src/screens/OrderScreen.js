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
            <h1>Order {order._id}</h1>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Teslimat Adresi</h2>
                                <p>
                                    <strong>Ad Soyad:</strong> {order.shippingAddress.fullName} <br></br>
                                    <strong>Adres:</strong> {order.shippingAddress.address},
                                     {order.shippingAddress.postalCode}, {order.shippingAddress.city} / {order.shippingAddress.country}
                                    
                                </p>
                                {order.isDelivered ? (
                                <MessageBox variant="success">
                                    {order.deliveredAt} adresine teslim edildi
                                </MessageBox>
                                ) : (
                                <MessageBox variant="danger">Teslim edilmedi</MessageBox>
                                )}
                            </div>
                        </li>
                         <li>
                            <div className="card card-body">
                                <h2>Ödeme Yöntemi</h2>
                                <p>
                                    <strong>Method:</strong> {order.paymentMethod}
                                </p>
                                {order.isPaid ? (
                                <MessageBox variant="success">
                                    {order.paidAt} ödeme gerçekleşti
                                </MessageBox>
                                ) : (
                                <MessageBox variant="danger">Ödeme gerçekleşmedi</MessageBox>
                                )}
                            </div>
                        </li> 
                        <li>
                            <div className="card card-body">
                                <h2>Ürünler</h2>
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
                                <h2>Sipariş Özeti</h2>
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}