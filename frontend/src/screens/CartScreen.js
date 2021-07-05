import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

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

    const removeFromCartHandler = (id) =>{ //Sepete eklenen ürünü sepetten çıkarma
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () =>{ //Siparişe gitmesi için kullanıcıyı kayıt olma yerine götürecek
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
                                    <div>{item.price} TL</div>
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
                            <h2>Toplam Fiyat : {cartItems.reduce((a, c) => a + c.price,0)} TL</h2> 
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