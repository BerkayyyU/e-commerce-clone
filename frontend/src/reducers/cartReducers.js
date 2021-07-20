import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_EMPTY } from "../constants/cartConstants";

export const cartReducer = (state = {cartItems:[]}, action) =>{
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload; // action.payload contains the product id
            const existItem = state.cartItems.find((x) => x.product === item.product); // If the product id which will be added to the cart is already exists then update it with the newer one 
            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.product === existItem.product? item: x),
                };
            }else{
                return {...state, cartItems: [...state.cartItems, item]};
            }
        case CART_REMOVE_ITEM:
            return {...state, cartItems: state.cartItems.filter((x) => x.product !== action.payload)}; // Is the choosen product id equal to product id in the card
        case CART_SAVE_SHIPPING_ADDRESS:
            return {...state, shippingAddress: action.payload}; // Return previous state but update shipping addres equal to action.payload. 
        //Action.payload contains the data that we set in the saveShippingAddress action and this data comes from ShippingAddresScreen and it contains all data about address 
        case CART_EMPTY:
            return {...state, cartItems: []}; //Previous state but cartItems should be empty
        default:
        return state;
    }
}