import React from 'react';
import Button from '../Button/button.compoent';
import './cart-dropdown.style.scss';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import {ReactComponent as CartIconImage} from '../../assets/shopping_bag.svg';
import {selectItemsCart} from '../../redux/cart/cart.selectors';
import {toggleCartDropdown} from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch, toggleCartDropdown}) => {

    return (
        <div className="cart-dropdown">
            {
                cartItems.length ? 
                    <div className="cart-items-container ">
                        <div className="cart-items">
                            {cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))}
                        </div>
                        <Button onClick={() => {
                            history.push('/checkout');
                            toggleCartDropdown();
                        }}
                        >Go to Checkout</Button>
                    </div>
                : <div className="cart-empty">
                    <CartIconImage className="cart-icon-image" />
                    <h3>Shopping Cart is empty!</h3>
                </div>
            }
           
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    // cartItems: state.cart.cartItems,
    cartItems: selectItemsCart(state), // Using selecter here for memoisation instead of doing it like in above line
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdown : () => dispatch(toggleCartDropdown())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));