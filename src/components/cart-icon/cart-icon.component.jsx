import React from 'react';
import './cart-icon.style.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping_bag.svg';
import {connect} from 'react-redux';
import {toggleCartDropdown} from '../../redux/cart/cart.actions'

const CartIcon = ({toggleCartDropdown, items}) => {
    return (
        <div className='cart-icon' onClick={toggleCartDropdown}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{items.length}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.cart.cartItems,
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);