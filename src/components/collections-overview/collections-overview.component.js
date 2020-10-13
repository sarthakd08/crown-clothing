import React from 'react';
import {connect} from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.style.scss';
import {selectShopCollections} from '../../redux/collections/collections.selectors';

const CollectionsOverview = ({collections}) => {

    return (
        <div className="collections-overview">
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    collections: selectShopCollections(state),
})

export default connect(mapStateToProps)(CollectionsOverview);