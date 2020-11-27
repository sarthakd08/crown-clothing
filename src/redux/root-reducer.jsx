import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import collectionsReducer from './collections/collections.reducer';
import BottomsheetReducer from '../components/BottomSheet/reducer'

export default combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer,
    collections: collectionsReducer,
    bottomSheet: BottomsheetReducer,
});