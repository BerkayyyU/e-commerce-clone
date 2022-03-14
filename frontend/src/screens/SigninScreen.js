import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SigninScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/'; // we need to check query strings, props.location.search returns query strings  for us

  const userSignin = useSelector((state) => state.userSignin); // To make signin conditional we get useInfo and use it
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]); // by default user not signed in userInfo is empty but after dispatch userInfo contains value

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="headers-center">
          <h1 className="headers">Sign In</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label></label>
          <button className="block-green" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label></label>
          <div>
            New user?{' '}
            <Link to={`/register?redirect=${redirect}`}>
              Create an account.
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
//By setting id of input as email we connect input with the label with htmlFor
