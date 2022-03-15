import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import {
  listProductCategories,
  listProductCities,
} from './actions/productActions';
import { signout } from './actions/userActions';
import LoadingBox from './components/LoadingBox';
import MessageBox from './components/MessageBox';
import PrivateRoute from './components/PrivateRoute';
import SearchBox from './components/SearchBox';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import SearchScreen from './screens/SearchScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import { FaBars } from 'react-icons/fa';

function App() {
  const cart = useSelector((state) => state.cart); // useSelector sayesinde redux store'ı çağırırz.
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin); // To make signin conditional we get useInfo and use it
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  useEffect(() => {
    dispatch(listProductCities());
  }, [dispatch]);

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  const productCityList = useSelector((state) => state.productCityList);
  const {
    loading: loadingCities,
    error: errorCities,
    cities,
  } = productCityList;

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? 'grid-container site-container active-cont'
            : 'grid-container site-container'
        }
      >
        <header className="row">
          <div className="header-menu-icon-brand">
            <button
              className="menu-icon"
              onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
            >
              {' '}
              <FaBars />
            </button>
            <Link className="brand navbar-responsive" to="/">
              E-Commerce
            </Link>
          </div>
          <div className="navbar-responsive">
            <Route
              render={({ history }) => (
                <SearchBox
                  history={history}
                ></SearchBox> /*Pass react router dom properties to the search box using render function */
              )}
            ></Route>
          </div>
          <div className="navbar-responsive">
            <Link to="/cart">Cart</Link>
            {cartItems.length > 0 && (
              <span className="cart-total">{cartItems.length}</span>
            )}

            {userInfo ? (
              <div className="dropdown">
                <Link to="#">{userInfo.name} </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <div
          className={sidebarIsOpen ? 'active-nav side-navbar ' : 'side-navbar '}
        >
          <div>
            <Link className="sidebar-responsive brand" to="/">
              E-Commerce
            </Link>
          </div>
          <div className="sidebar-responsive sidebar-search">
            <Route
              render={({ history }) => (
                <SearchBox
                  history={history}
                ></SearchBox> /*Pass react router dom properties to the search box using render function */
              )}
            ></Route>
            <hr></hr>
          </div>

          <div className="sidebar-responsive">
            {userInfo ? (
              <div>
                <p>
                  <Link to="/profile">Profile</Link>
                </p>
                <p>
                  <Link to="/orderhistory">Order History</Link>
                </p>
                <p>
                  <Link to="#signout" onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </p>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            <hr></hr>
            <Link to="/cart">Cart</Link>
            {cartItems.length > 0 && (
              <span className="cart-total">{cartItems.length}</span>
            )}
            <hr></hr>
          </div>

          {loadingCategories ? (
            <LoadingBox></LoadingBox>
          ) : errorCategories ? (
            <MessageBox variant="danger">{}</MessageBox>
          ) : (
            <div>
              <h3 className="sidebar-title">Categories</h3>
              {categories.map((c) => (
                <p key={c}>
                  <Link className="category-city" to={`/search/category/${c}`}>
                    {c}
                  </Link>
                </p>
              ))}
            </div>
          )}
          <hr></hr>
          {loadingCities ? (
            <LoadingBox></LoadingBox>
          ) : errorCities ? (
            <MessageBox variant="danger">{}</MessageBox>
          ) : (
            <div>
              <h3 className="sidebar-title">Cities</h3>

              {cities.map((ci) => (
                <p key={ci}>
                  <Link className="category-city" to={`/search/city/${ci}`}>
                    {ci}
                  </Link>
                </p>
              ))}
            </div>
          )}
        </div>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/city/:city"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/city/:city/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/city/:city/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;
