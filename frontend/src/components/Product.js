import React from 'react';

export default function Product(props) {
    const {product} = props ;
    return (
        <div key={product.id} className="card">
            <a href={`/product/${product.id}`}>
                <img className="medium" src={product.image} alt={product.name} />
            </a>
            <div className="card-body">
                <a href={`/product/${product.id}`}>
                    <h2>{product.name}</h2>
                </a>
                <div className="category">{product.category}</div>
                <div className="price">{product.price} TL</div>             
            </div>
        </div>
    )
}