import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import Reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Reducer, composeEnhancers(applyMiddleware()));

const persistor = persistStore(store);

export { store, persistor };
