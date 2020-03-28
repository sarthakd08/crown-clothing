import React from 'react';
import {Link} from 'react-router-dom'
import './header.style.scss';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as BrandIcon} from '../../assets/crownSVG.svg';

const Header = ({currentUser, isCartHidden}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                {/* <img src='https://a.udemycdn.com/2019-06-30_21-01-32-9996f50fd92611c5a1dc2be86a61ae44/original.svg?nva=20200319030728&token=061363913e852bc1ef5c4' /> */}
                <BrandIcon />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
                {currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to='/signin'> SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {!isCartHidden ? <CartDropdown /> : null}   
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    isCartHidden: state.cart.hidden,
})


export default connect(mapStateToProps, null)(Header);