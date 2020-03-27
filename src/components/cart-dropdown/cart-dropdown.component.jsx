import React from 'react';
import Button from '../Button/button.compoent';
import './cart-dropdown.style.scss';

const CartDropdown = () => {

    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <Button>Go to Checkout</Button>
        </div>
    )
}

export default CartDropdown;