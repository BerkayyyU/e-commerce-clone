import React from 'react';
import { Link} from 'react-router-dom';
import Product from '../components/Product';
import data from '../data';

export default function ProductScreen(props) {
    const product = data.products.find(x => x.id === props.match.params.id);
    if (!product) {
        return <div>Ürün bulunamadı!</div>
    }
    return (
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
                                <button className="primary block">Satın Al</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

}