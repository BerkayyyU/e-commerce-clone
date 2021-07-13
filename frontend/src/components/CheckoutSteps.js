import React from "react";

export default function CheckoutSteps(props){
    return (
        <div className="row checkout-steps">
            <div className={props.step1 ? "active" : " "}>Giriş Yap</div>
            <div className={props.step2 ? "active" : " "}>Teslimat Adresi</div>
            <div className={props.step3 ? "active" : " "}>Sipariş Ver</div>
        </div>
    )
}