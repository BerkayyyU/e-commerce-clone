import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { listProductCategories, listProductCities } from './actions/productActions';
import { signout } from './actions/userActions';
import SearchBox from './components/SearchBox';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import SearchScreen from './screens/SearchScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const cart = useSelector(state => state.cart); // useSelector sayesinde redux store'ı çağırırz.
  const {cartItems}  = cart;
  const userSignin = useSelector((state) => state.userSignin); // To make signin conditional we get useInfo and use it 
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () =>{
    dispatch(signout());
  };

  useEffect(()=>{
    dispatch(listProductCategories());
  }, [dispatch]);
  useEffect(()=>{
    dispatch(listProductCities());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">E-Commerce</Link>
          </div>
          <div>
            <Route render={({history}) => ( <SearchBox history={history}></SearchBox>/*Pass react router dom properties to the search box using render function */)}></Route> 
          </div>
          <div>
            <Link to="/cart">Sepet
            {cartItems.lenght > 0 && (
              <span className="badge">{cartItems.lenght}</span>
            )}
            </Link>
            {userInfo ? (
                <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  <Link to="#signout" onClick={signoutHandler}>Çıkış Yap</Link>
                </ul>
                </div>
              ) : (
                <Link to="/signin">Giriş</Link>
              )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route> 
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/search/name/:name?" component={SearchScreen} exact></Route>
          <Route path="/search/category/:category" component={SearchScreen} exact></Route>
          <Route path="/search/city/:city" component={SearchScreen} exact></Route>
          <Route path="/search/category/:category/name/:name" component={SearchScreen} exact></Route>
          <Route path="/search/city/:city/name/:name" component={SearchScreen} exact></Route>
          <Route path="/search/category/:category/city/:city/name/:name" component={SearchScreen} exact></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center"> Copyright @2021 Berkay Ulguel</footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
