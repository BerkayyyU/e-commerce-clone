import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';
import CurrencyFormat from 'react-currency-format';

export default function CartScreen(props){
    const productId = props.match.params.id;
    
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const dispatch = useDispatch();
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId));
        }
    }, [dispatch, productId]);

    const removeFromCartHandler = (id) =>{ //Discard the product in the card
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () =>{ //Redirect user to the signin for the placing order
        props.history.push('/signin?redirect=shipping');
    };

    return (
        <div className="row top">
            <div className="col-2">
                <h1>Sepet</h1>
                {cartItems.lenght === 0 ? (
                <MessageBox>
                    Sepetiniz boş. <Link to="/">Ana sayfaya dönün</Link>
                </MessageBox>
                ) : (
                    <ul>
                        {cartItems.map((item)=>(
                            <li key={item.product}>
                                <div className="row">
                                    <div>
                                        <img src = {item.image} alt = {item.name} className="small"></img>
                                    </div>
                                    <div className="min-30">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>
                                        <CurrencyFormat className="price" value={item.price} displayType={'text'} thousandSeparator={true} suffix="₺"></CurrencyFormat>
                                    <div>
                                        <button type="button" className="primary block" onClick={()=> removeFromCartHandler(item.product)}>Sil</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                        <div className="row">
                            <div><strong> Toplam Fiyat: </strong></div>
                            <strong><CurrencyFormat className="price" value={cartItems.reduce((a, c) => a + c.price,0)} displayType={'text'} thousandSeparator={true} suffix="₺"></CurrencyFormat></strong>
                        </div>
                        </li>
                        <li>
                            <button type="button" onClick={checkoutHandler} className="block-green" disabled={cartItems.lenght===0}>Siparişe Git</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>    
    );
}