import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function RegisterScreen(props){

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const redirect = props.location.search ? props.location.search.split("=")[1]: "/"; // we need to check query strings, props.location.search returns query strings  for us

    const userRegister = useSelector((state) => state.userRegister); // To make signin conditional we get useInfo and use it 
    const {userInfo, loading, error} = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault(); // When user click on submit button this form will not refresh
        if(password !== confirmPassword){
            alert("Şifreler eşleşmiyor");
        }else{
            dispatch(register(name, email, password));
        }
    };
    
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]); // by default user not signed in userInfo is empty but after dispatch userInfo contains value

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Kayıt Ol</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>} 
                <div>
                    <label htmlFor="name">Ad Soyad:</label>
                    <input type="text" id="name" required onChange={e => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"  required onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Şifre:</label>
                    <input type="password" id="password" required onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Şifreyi Tekrar Giriniz:</label>
                    <input type="password" id="confirmPassword" required onChange={e => setConfirmPassword(e.target.value)}></input>
                </div>
                <div>
                    <label></label>
                    <button className="primary" type="submit">Kayıt Ol</button>
                </div>
                <div>
                    <label></label>
                    <div>
                        Hesabınız var mı? <Link to={`/signin?redirect=${redirect}`}>Giriş Yap</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
//By setting id of input as email we connect input with the label with htmlFor
//Hesabınız var mı? <Link to={`/register?redirect=${redirect}`}>Giriş Yap</Link> After registering we redirect user to the sign in