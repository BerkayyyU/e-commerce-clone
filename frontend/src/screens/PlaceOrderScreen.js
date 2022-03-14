import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import CurrencyFormat from 'react-currency-format';

export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  if (!userInfo) {
    props.history.push('/signin');
  }
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(cart.cartItems.reduce((a, c) => a + c.price, 0));
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(15);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice;
  const dispatch = useDispatch();
  const placeOrderHandler = (e) => {
    e.preventDefault();
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems })); // use all cart object and replace cartItems with orderItems
  };
  useEffect(() => {
    if (success) {
      //if success true it means order created succesfully
      props.history.push(`/order/${order._id}`); // use id of the order to redirect user to the this page
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]); //if success gets true
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <div className="headers-center">
                  <h1 className="headers-small">Shipping Address</h1>
                </div>
                <p>
                  <strong>Full Name:</strong> {cart.shippingAddress.fullName}{' '}
                  <br></br>
                  <br></br>
                  <strong>Address:</strong> {cart.shippingAddress.address}{' '}
                  <br></br>
                  <br></br>
                  <strong>City:</strong> {cart.shippingAddress.city} <br></br>
                  <br></br>
                  <strong>Country:</strong> {cart.shippingAddress.country}{' '}
                  <br></br>
                  <br></br>
                  <strong>Postal Code:</strong>{' '}
                  {cart.shippingAddress.postalCode}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <div className="headers-center">
                  <h1 className="headers-small">Items</h1>
                </div>
                <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                        <CurrencyFormat
                          className="price"
                          value={item.price}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix="€"
                        ></CurrencyFormat>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <CurrencyFormat
                    className="price"
                    value={cart.itemsPrice}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix="€"
                  ></CurrencyFormat>
                </div>
              </li>
              <hr></hr>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <CurrencyFormat
                    className="price"
                    value={cart.shippingPrice}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix="€"
                  ></CurrencyFormat>
                </div>
              </li>
              <hr></hr>
              <li>
                <div className="row">
                  <div>
                    {' '}
                    <strong> Order Total </strong>
                  </div>
                  <div>
                    <strong>
                      <CurrencyFormat
                        className="price"
                        value={cart.totalPrice}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix="€"
                      ></CurrencyFormat>{' '}
                    </strong>
                  </div>
                </div>
              </li>
              <form className="form" onSubmit={placeOrderHandler}>
                <div>
                  <input
                    type="text"
                    id="cardNo"
                    placeholder="Card Number"
                    required
                  ></input>
                </div>
                <div>
                  <input
                    type="text"
                    id="cardExDate"
                    required
                    placeholder="MM/YY"
                  ></input>
                </div>
                <div>
                  <input
                    type="text"
                    id="cvc"
                    required
                    placeholder="CVC/CVV"
                  ></input>
                </div>
                <div>
                  <button
                    type="submit"
                    className="primary block-green"
                    disabled={cart.cartItems.length === 0}
                  >
                    Place Order
                  </button>
                  {loading && <LoadingBox></LoadingBox>}
                  {error && <MessageBox variant="danger">{error}</MessageBox>}
                </div>
              </form>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
