import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Link, useParams } from 'react-router-dom';


export default function HomeScreen(props) {
    const {name = 'all', category = 'all', city = 'all'} = useParams();
    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {loading, error, products} = productList;

    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {loading: loadingCategories, error: errorCategories, categories} = productCategoryList;

    const productCityList = useSelector((state) => state.productCityList);
    const {loading: loadingCities, error: errorCities, cities} = productCityList;
    
    useEffect(()=>{
        dispatch(listProducts({name: name !== 'all' ? name : '', category: category !== 'all' ? category : '', city: city !== 'all' ? city : ''}))
    }, [category, city, dispatch, name]);


    const getFilterUrl = (filter) => {
        const filterCategory = filter.category || category ;
        const filterName = filter.name || name ;
        const filterCity = filter.city || city;
        return `/search/category/${filterCategory}/city/${filterCity}/name/${filterName}`;
    };

    return (
        <div>
            <div className="col-1">
                {loadingCategories ? (
                <LoadingBox></LoadingBox>
                ) : errorCategories ? (
                <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                <div>
                    {categories.map(c=>(
                        <button className="categories" key={c}>
                            <Link  className="category" to={ getFilterUrl({ category : c })}>{c}</Link>
                        </button>
                    ))}
                </div>
                )}
                {loadingCities ? (
                <LoadingBox></LoadingBox>
                ) : errorCities ? (
                <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                <div>
                    {cities.map(ci=>(
                        <button className={ci === city ?  'categories-active' : 'categories'}  key={ci}>
                            <Link  className="category" to={ getFilterUrl({ city : ci })}>{ci}</Link>
                        </button>
                    ))}
                </div>
                )}
            </div>
            {loading ? ( <LoadingBox></LoadingBox>
            ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
            ) : (
            <div className="row center">
                {products.map(product => (
                    <Product product={product}></Product>
                ))}
            </div>
            )}           
        </div>
    );
}
