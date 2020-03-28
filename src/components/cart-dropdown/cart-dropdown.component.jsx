import React from 'react';
import Button from '../Button/button.compoent';
import './cart-dropdown.style.scss';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems}) => {

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))}
            </div>
            <Button>Go to Checkout</Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems,
})

export default connect(mapStateToProps, null)(CartDropdown);