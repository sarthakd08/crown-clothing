export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    if(existingCartItem){
        console.log('Adding existing Item to cart, ie. increasing quantity', existingCartItem);
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity +1}
                : cartItem
            )
    } 

    return [...cartItems, {...cartItemToAdd, quantity: 1}]  // returning new array with attaching quantity property to all items 
}