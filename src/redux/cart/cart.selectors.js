import {createSelector} from 'reselect';

const selectCart = state => state.cart;  //This is an input selector

export const selectItemsCart = createSelector(   // This is an output selector which uses createSelector fn from reselect library
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectItemsCart],
    cartItems => cartItems.reduce((accumulator, currentItem) => {
                    return accumulator + currentItem.quantity;
                }, 0)
)
