

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

    return [...cartItems, {...cartItemToAdd, quantity: 1}]  // returning new array with attaching quantity property to the addingItem 
}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((item) => {
        return item.id === cartItemToRemove.id;
    })

    if(existingCartItem && existingCartItem.quantity > 1) {
        return cartItems.map((item) => 
            item.id === cartItemToRemove.id 
            ? {...item, quantity: item.quantity - 1}
            : item
        )
    }
}