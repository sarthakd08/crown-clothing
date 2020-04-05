import React from 'react';
import {connect} from 'react-redux';
import './checkout-item.style.scss';
import {clearItemFromCart, removeCartItem, addItem} from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItemFromCart, removeCartItem, addItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const changeInItem = (type, item) => {
        if(type === 'decrease') {
            item.quantity > 1 ? removeCartItem(item) : clearItemFromCart(item);
        } else {
            addItem(item);
        }
    }

    return (
        <div className='checkout-item'>
            <div className='image-container'>
            <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={() => changeInItem('decrease', cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => changeInItem('increase', cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
} 




const mapDispatchToProps = (dispatch) => ({
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
    removeCartItem: (item) => dispatch(removeCartItem(item)),
    addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);