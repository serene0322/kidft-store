import React from "react";
import { connect } from "react-redux";

import { clearItemFromWishlist } from "../../redux/wishlist/wishlist.actions";

import './wishlist-page-item.styles.scss';

const WishlistPageItem = ({ wishlistItem, clearItem }) => {
    const { name, imageUrl, price } = wishlistItem;

    return (
        <div className='wishlist-page-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='price'>RM{price.toFixed(2)}</span>
            <div className='remove-button' onClick={() => clearItem(wishlistItem)}>&#10060;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromWishlist(item))
});

export default connect(null, mapDispatchToProps)(WishlistPageItem);