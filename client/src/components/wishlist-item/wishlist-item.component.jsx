import React from "react";

import './wishlist-item.styles.scss';

const WishListItem = ({ item: { imageUrl, price, name } }) => (
    <div className='wishlist-item'>
        <img src={imageUrl} alt='item' />
        <div className='wishlist-details'>
            <span className='wishlist-name'>{name}</span>
            <span className='wishlist-price'>RM{price.toFixed(2)}</span>
        </div>
    </div>
);

export default WishListItem;