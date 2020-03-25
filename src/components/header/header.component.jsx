import React from 'react';
import {Link} from 'react-router-dom'
import './header.style.scss';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <img src='https://a.udemycdn.com/2019-06-30_21-01-32-9996f50fd92611c5a1dc2be86a61ae44/original.svg?nva=20200319030728&token=061363913e852bc1ef5c4' />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
                {currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to='/signin'> SIGN IN</Link>
                }
            </div>
        </div>
    )
}

export default Header;