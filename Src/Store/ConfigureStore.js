
import { createStore, combineReducers } from 'redux';
import  cartItemsReducer from './Reducers/CartItemsReducer';

const rootReducer = combineReducers({
    listProducts: cartItemsReducer
});

const configureStore = () => {
    // return createStore(rootReducer, compose(applyMiddleware(thunk, logger)));
    return createStore(rootReducer);
};

// const logger = createLogger();

export default configureStore;