import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WishlistPageItem from "../../components/wishlist-page-item/wishlist-page-item.component";

import { selectWishlistItems } from "../../redux/wishlist/wishlist.selectors";

import './wishlist.styles.scss';

const WishlistPage = ({ wishlistItems }) => (
    <div className='wishlist-page'>
        <div className='wishlist-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            wishlistItems.length ?
            wishlistItems.map(wishlistItem => (
                <WishlistPageItem key={wishlistItem.id} wishlistItem={wishlistItem}/>
            ))
            : 
            <span className='empty-message'>Your wishlist is empty.</span>
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    wishlistItems: selectWishlistItems
})

export default connect(mapStateToProps)(WishlistPage);