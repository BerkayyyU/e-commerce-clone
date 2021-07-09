import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Product from "../components/Product";

export default function SearchScreen(props){
    const {name = 'all', category = 'all'} = useParams();
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const {loading, error, products} = productList;

    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {loading: loadingCategories, error: errorCategories, categories} = productCategoryList;

    useEffect(()=>{
        dispatch(listProducts({name: name !== 'all' ? name : '', category: category !== 'all' ? category : ''}))
    }, [category, dispatch, name])

    const getFilterUrl = (filter) => {
        const filterCategory = filter.category || category ;
        const filterName = filter.name || name ;
        return `/search/category/${filterCategory}/name/${filterName}`;
    };

    return (
        <div>
            {loadingCategories ? (
                        <LoadingBox></LoadingBox>
                        ) : errorCategories ? (
                        <MessageBox variant="danger">{error}</MessageBox>
                        ) : (
                        <div>
                            {categories.map(c=>(
                                <button className={c === category ?  'categories-active' : 'categories'}  key={c}>
                                    <Link  className="category" to={ getFilterUrl({ category : c })}>{c}</Link>
                                </button>
                            ))}
                        </div>
                        )}

                    {loading ? (
                    <LoadingBox></LoadingBox>
                    ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                    ) : (
                        <>
                        {products.length === 0 && (
                          <MessageBox>No Product Found</MessageBox>
                        )}
                        <div className="row center">
                          {products.map((product) => (
                            <Product key={product._id} product={product}></Product>
                          ))}
                        </div>
                      </>
                    )}
                {loading ? (
                <LoadingBox></LoadingBox>
                ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                <div className="results"><p className="result">{products.length} ürün bulundu.</p></div>
                )}
        </div>
    )
}