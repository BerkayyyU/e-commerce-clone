import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import CurrencyFormat from 'react-currency-format';

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector ((state) => state.productDetails);
    const {loading, error, product} = productDetails; 

    useEffect(()=>{
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const addToCartHandler = () =>{
        props.history.push(`/cart/${productId}`);
    }
    return (
        <div>
        {loading ? ( <LoadingBox></LoadingBox>
        ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
        ) : (
            <div>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <h4>Açıklama:</h4>
                        <p>{product.description}</p>
                        </li>
                        <li>
                            <h4>Şehir:</h4> {product.city}
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Fiyat</div>
                                    <CurrencyFormat className="price" value={product.price} displayType={'text'} thousandSeparator={true} suffix="₺"></CurrencyFormat>
                                </div>
                            </li>
                            <li>
                                <button onClick={addToCartHandler} className="primary block-green">Satın Al</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )}              
    </div>   
    );
}