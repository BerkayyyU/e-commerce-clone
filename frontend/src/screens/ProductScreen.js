import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

//  import Product from '../components/Product';
// import data from '../data'; // gerek yok artık

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id
    const productDetails = useSelector ((state) => state.productDetails);
    const {loading, error, product} = productDetails;

    useEffect(()=>{
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    // const product = data.products.find(x => x.id === props.match.params.id);  statik olarak ürünleri frontend'den değil ürünleri product details'den redux store'dan göstericez
    // if (!product) {
    //     return <div>Ürün bulunamadı!</div>
    // }
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
            <Link to="/">Ana sayfaya geri dön</Link>
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
                            Fiyat: {product.price} TL
                    </li>
                        <li>
                            Açıklama:
                        <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
            
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Fiyat</div>
                                    <div className="price">{product.price} TL</div>
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