import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsOrder(orderId));
  }, [dispatch, orderId]);
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <div className="headers-center">
        <h1 className="headers">Order: {order._id}</h1>
      </div>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <div className="headers-center">
                  <h1 className="headers-small">Shipping Address</h1>
                </div>
                <p>
                  <strong>Full Name:</strong> {order.shippingAddress.fullName}{' '}
                  <br></br>
                  <br></br>
                  <strong>Address:</strong> {order.shippingAddress.address}{' '}
                  <br></br>
                  <br></br>
                  <strong>City:</strong> {order.shippingAddress.city} <br></br>
                  <br></br>
                  <strong>Country:</strong> {order.shippingAddress.country}{' '}
                  <br></br>
                  <br></br>
                  <strong>Postal Code:</strong>{' '}
                  {order.shippingAddress.postalCode}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <div className="headers-center">
                  <h1 className="headers-small">Items</h1>
                </div>
                <ul>
                  {order.orderItems.map((item) => (
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
                        <div>€{item.price}</div>
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
                <div className="headers-center">
                  <h1 className="headers-small">Sipariş Özeti</h1>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Items:</div>
                  <div>€{order.itemsPrice}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>€{order.shippingPrice}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    {' '}
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong> €{order.totalPrice} </strong>
                  </div>
                </div>
              </li>
              <div className="headers-center">
                <MessageBox variant="success">In delivery...</MessageBox>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
