import React from "react";
import { withRouter } from "react-router";

import './collection-item-cantclick.styles.scss';

const CollectionItemCantClick = ({ item }) => {
    const { name, price, imageUrl } = item;

    return (
        <div className='collection-item'>
            <div
                className='image1'
                style={{
                    backgroundImage: `url(${imageUrl[0]})`
                }}
            />
            <div className='collection-footer1'>
                <span className='name'>{name}</span>
                <span className='price'>RM{price.toFixed(2)}</span>
            </div>  
        </div>
    )
};

export default withRouter(CollectionItemCantClick);