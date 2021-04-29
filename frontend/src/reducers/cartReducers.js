import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = {cartItems:[]}, action) =>{
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload; // action.payload ürün id'sini içeriyor
            const existItem = state.cartItems.find((x) => x.product === item.product); // Sepete eklenicek ürün id zaten bir var olan bir ürün id'ye eşitse eklenicek ürün daha yeni olduğu için var olan ürünün üstüne ekle
            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.product === existItem.product? item: x),
                };
            }else{
                return {...state, cartItems: [...state.cartItems, item]};
            }
        case CART_REMOVE_ITEM:
            return {...state, cartItems: state.cartItems.filter((x) => x.product !== action.payload)}; // Seçilen ürünün id'si sepetteki ürünün id'sine eşit mi
        default:
        return state;
    }
}