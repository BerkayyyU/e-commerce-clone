import React from 'react';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

export default function Product(props) {
    const {product} = props ;
    return (
        <div key={product.id} className="card">
            <Link to={`/product/${product._id}`}>
                <img className="medium" src={product.image} alt={product.name} />
            </Link>
            <div className="card-body">
                <Link to={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </Link>
                <div className="product-info">{product.category}</div>
                <div className="product-info">{product.city}</div>
                <CurrencyFormat className="price" value={product.price} displayType={'text'} thousandSeparator={true} suffix="₺"></CurrencyFormat>   
            </div>
        </div>
    )
}