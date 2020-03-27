import React from 'react';
import './cart-icon.style.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping_bag.svg';
import {connect} from 'react-redux';
import {toggleCartDropdown} from '../../redux/cart/cart.actions'

const CartIcon = (props) => {
    return (
        <div className='cart-icon' onClick={props.toggleCartDropdown}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown()),
})

export default connect(null, mapDispatchToProps)(CartIcon);