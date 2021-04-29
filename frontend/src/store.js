import {compose, createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
// import data from "./data";
import { cartReducer } from "./reducers/cartReducers";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducers";

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")):null, //  if we refresh the page we still will be signed in
    },
    cart:{
        cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): [], // if we refresh the page cart still will be the same
    },
};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer
});

// const reducer = (state, action) =>{ //Reducer 2 parametre alır state ve action products üzerindeki state değişikliklerini action ile değiştirip data'yı geri döndürür.
//     return {products: data.products}; // Redux üzerindeki state'de products görmemizin sebebi bu satırdaki products'ları geri döndürdüğümüz

// }; BU STATİK PRODUCT FROM FRONTEND

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;