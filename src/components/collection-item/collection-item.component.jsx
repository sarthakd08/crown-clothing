import React from 'react';
import {useDispatch} from 'react-redux'
import './collection-item.style.scss';
import Button from '../Button/button.compoent';
import { connect } from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import {setOverlay} from '../BottomSheet/actions'

const CollectionItem = ({item, addItem}) => {
    const { id, name, price, imageUrl} = item;
    
    const dispatch = useDispatch();

    let showIteminBottomSheet = () => {
        // dispatch(setOverlay({
        //   showOverlay: true,
        //   overlayConfig: {
        //     showBottomLines: false,
        //     showClose: false,
        //     removeBottomPadding: true,
        //     extraRoundCorners: true,
        //     boldHeader: true,
        //     showCenterClose: true,
        //     children: <>
        //       <div>Hellooo!</div>
        //     </>,
        //     backHandler: onOverlayClose,
        //   }
        // }))
      }
    
    
      const onOverlayClose = () => {
        return dispatch(setOverlay({
          showOverlay: false,
          overlayConfig: {
            children: <></>,
            headerText: '',
          }
        }));
      }

    return (
        <div className="collection-item" onClick={showIteminBottomSheet}>
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