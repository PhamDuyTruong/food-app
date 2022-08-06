import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './Cart/cart-reducer';

const persistConfig = {
    key: 'quoality-guest',
    storage,
    whitelist: ['cart'],
};

const Reducer =  combineReducers({
    cart: cartReducer,
  });

export default persistReducer(persistConfig, Reducer);