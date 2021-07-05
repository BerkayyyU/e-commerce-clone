import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD } from "../constants/cartConstants";

export const addToCart = (productId) => async(dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name : data.name,
            image: data.image,
            price: data.price,
            product: data.id, // While adding product to DB i use "product" instead of "productId"
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)); // Saves products to localStorage which are added to cart thus products in the card will not be deleted after the page refresh
};

export const removeFromCart = (productId) => async(dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)); // Redux store'daki ürünü almak için JSON.stringfy ile getstate fonksiyonunu kullanıyoruz
};

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_SHIPPING_ADDRESS, payload: data});
    localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_PAYMENT_METHOD, payload: data});
}