import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';

export default function SearchScreen(props) {
  const { name = 'all', category = 'all', city = 'all' } = useParams();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  console.log(productCategoryList);

  const productCityList = useSelector((state) => state.productCityList);
  const {
    loading: loadingCities,
    error: errorCities,
    cities,
  } = productCityList;
  console.log(productCityList);

  useEffect(() => {
    dispatch(
      listProducts({
        name: name !== 'all' ? name : '',
        category: category !== 'all' ? category : '',
        city: city !== 'all' ? city : '',
      })
    );
  }, [category, city, dispatch, name]);

  const getFilterUrl = (filter) => {
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    const filterCity = filter.city || city;
    return `/search/category/${filterCategory}/city/${filterCity}/name/${filterName}`;
  };

  return (
    <div>
      <div className="col-1">
        <div className="headers-center">
          <h1 className="headers">Categories</h1>
        </div>
        {loadingCategories ? (
          <LoadingBox></LoadingBox>
        ) : errorCategories ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>
            {categories.map((ca) => (
              <button
                className={
                  ca === category
                    ? 'categories-cities-active'
                    : 'categories-cities'
                }
                key={ca}
              >
                <Link
                  className="category-city"
                  to={getFilterUrl({ category: ca })}
                >
                  {ca}
                </Link>
              </button>
            ))}
          </div>
        )}
        <div className="headers-center">
          <h1 className="headers">Cities</h1>
        </div>
        {loadingCities ? (
          <LoadingBox></LoadingBox>
        ) : errorCities ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>
            {cities.map((ci) => (
              <button
                className={
                  ci === city ? 'categories-cities-active' : 'categories-cities'
                }
                key={ci}
              >
                <Link className="category-city" to={getFilterUrl({ city: ci })}>
                  {ci}
                </Link>
              </button>
            ))}
          </div>
        )}
      </div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found!</MessageBox>}
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
        <div className="results">
          <p className="result">{products.length} product found.</p>
        </div>
      )}
    </div>
  );
}
