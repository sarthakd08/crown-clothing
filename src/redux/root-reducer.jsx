import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import collectionsReducer from './collections/collections.reducer';

export default combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer,
    collections: collectionsReducer,
});