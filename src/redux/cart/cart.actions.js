import CartActionTypes from './cart.types';

export const toggleCartDropdown = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN,
        payload: null
    }
}

export const addItem = (data) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: data
})

export const clearItemFromCart = (item) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeCartItem = (item) => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: item
})