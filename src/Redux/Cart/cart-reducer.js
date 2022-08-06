import {CartActionTypes} from './cart-actionTypes';
import {addItemToCart, removeItemFromCart} from './cart-utils';

const initialState = {
    cartItems: [],
}

const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case CartActionTypes.CART_ADD_ITEM:
            return {...state, cartItems: addItemToCart(state.cartItems, action.payload)};
        case CartActionTypes.CART_REMOVE_ITEM:
            return {...state, cartItems: removeItemFromCart(state.cartItems, action.payload)};
        case CartActionTypes.CART_CLEAR_ITEM:
            return {...state, cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id )}
        default:
            return state;
    }
}

export default cartReducer;