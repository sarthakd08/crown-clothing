import React from 'react';
import './collection-item.style.scss';
import Button from '../Button/button.compoent';
import { connect } from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem}) => {
    const { id, name, price, imageUrl} = item;

    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button onClick={() => addItem(item)}>
                Add to cart
            </Button>

        </div>
    )
}

const mapDispatchToProps = (dispatch) =>({
    addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem);