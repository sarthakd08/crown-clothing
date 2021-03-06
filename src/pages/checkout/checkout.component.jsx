import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Layout from '../../views/Layout/Layout';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectItemsCart,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import './checkout.style.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <Layout showHeader={true}>
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${total}</div>
    </div>
  </Layout>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectItemsCart,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);