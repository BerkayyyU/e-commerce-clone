import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

export const productListReducer = (state = {loading:true, products: []},action) =>{ // action.type should be the same with dispatch type in the productActions.js like product-list-success or product-list-fail. If we wanna show the products in the homeScreen products should be empty array not null.
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return{loading: true};
        case PRODUCT_LIST_SUCCESS:
            return{loading: false, products: action.payload}; 
        case PRODUCT_LIST_FAIL:
            return{loading: false, error: action.payload};
        default:
        return state;
    }
    
}

export const productDetailsReducer = (state = {product:{}, loading: true}, action) => {
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading:true};
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload};
        case PRODUCT_DETAILS_FAIL:
            return {loading:false, error: action.payload};
        default:
            return state;    
    }
};