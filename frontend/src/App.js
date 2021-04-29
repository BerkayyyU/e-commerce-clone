import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const cart = useSelector(state => state.cart); // useSelector sayesinde redux store'ı çağırırz.
  const {cartItems}  = cart;
  const userSignin = useSelector((state) => state.userSignin); // To make signin conditional we get useInfo and use it 
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () =>{
    dispatch(signout());
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">E-Commerce</Link>
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
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center"> Copyright @2021 Berkay Ulguel</footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
