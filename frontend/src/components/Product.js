import React from 'react';
import { Link } from 'react-router-dom';

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
                <div className="category">{product.category}</div>
                <div className="city">{product.city}</div>
                <div className="price">{product.price} TL</div>       
                   
            </div>
        </div>
    )
}