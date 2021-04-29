import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (productId) => async(dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name : data.name,
            image: data.image,
            price: data.price,
            product: data.id, // Ürünü database'e eklerken productId yerine product kullandım
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)); // Sepete eklenen ürünleri localStorage'a kaydeder böylelikle sayfa yenilense bile sepetteki ürünler kalır.
};

export const removeFromCart = (productId) => async(dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)); // Redux store'daki ürünü almak için JSON.stringfy ile getstate fonksiyonunu kullanıyoruz
};