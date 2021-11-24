import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { SearchBar } from "../../components/search-bar/search-bar.component";

import { selectCollection } from "../../redux/shop/shop.selectors";
import { useState } from "react";

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='collection-page'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            <SearchBar 
                placeholder='Search Products...'
                handleChange={e => {setSearchTerm(e.target.value)}}
            />
            <div className='items'>
                {
                    items.filter((item) => {
                        if (searchTerm === "") {
                            return item
                        } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return item
                        }
                        return false
                    }).map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
};

//ownProps is the props of the component that were wrapping in connect
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

