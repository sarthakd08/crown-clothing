import CartActionTypes from './cart.types';

export const toggleCartDropdown = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    payload: null
})

export const addItem = (data) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: data
})