import React from 'react';
import './cart-icon.style.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping_bag.svg';
import {connect} from 'react-redux';
import {toggleCartDropdown} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartDropdown, items, itemCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartDropdown}>
            <ShoppingIcon className="shopping-icon" />
            {/* <span className="item-count">{getCartItemsCount(items)}</span> */}
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const getCartItemsCount = (allItems) => {
    console.log('GGGGGG', allItems);
    return allItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
    }, 0);
}

const mapStateToProps = (state) => ({
    items: state.cart.cartItems,
    // As done below i can write the reduce frunction here itself to get the items quantity count but i am doing it from function getCartItemsCount
    // itemsCount: state.cart.cartItems.reduce((accumulator, currentItem) => {
    //     return accumulator + currentItem.quantity;
    // }, 0)   
    itemCount: selectCartItemsCount(state) 
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);