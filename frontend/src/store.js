import {compose, createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
// import data from "./data";
import { cartReducer } from "./reducers/cartReducers";
import { orderCreateReducer, orderDetailsReducer, orderMineListReducer } from "./reducers/orderReducers";
import { productCategoryListReducer, productCityListReducer, productDetailsReducer, productListReducer } from "./reducers/productReducers";
import { userDetailsReducer, userRegisterReducer, userSigninReducer, userUpdateProfileReducer } from "./reducers/userReducers";

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem("userInfo")   //  if user refresh the page user still will be signed in
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
    },
    cart:{
        cartItems: localStorage.getItem('cartItems') // Check the cart from localStorage and if user refresh the page cart still will be the same
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [], 
        shippingAddress: localStorage.getItem("shippingAddress") // Check the user shipping address and if it exists automatically fill it for the next ones.
        ? JSON.parse(localStorage.getItem("shippingAddress"))
        : {}, // 
        paymentMethod: "PayPal",
    },
};

const reducer = combineReducers({ // implement reducers
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    productCategoryList: productCategoryListReducer,
    productCityList: productCityListReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
});

// const reducer = (state, action) =>{ //Reducer 2 parametre alır state ve action products üzerindeki state değişikliklerini action ile değiştirip data'yı geri döndürür.
//     return {products: data.products}; // Redux üzerindeki state'de products görmemizin sebebi bu satırdaki products'ları geri döndürdüğümüz

// }; STATIC PRODUCTS FROM FRONTEND

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;