import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import WishListItem from "../wishlist-item/wishlist-item.component";
import { selectWishlistItems } from "../../redux/wishlist/wishlist.selectors";
import { toggleWishlist } from "../../redux/wishlist/wishlist.actions";

import './wishlist-dropdown.styles.scss';

const WishlistDropDown = ({ wishlistItems, history, dispatch }) => (
    <div className='wishlist-dropdown'>
        <div className='wishlist-items'>
            {
                wishlistItems.length ?
                wishlistItems.map(wishlistItem => (
                    <WishListItem key={wishlistItem.id} item={wishlistItem} />
                ))
                : 
                <span className='empty-message'>Your wishlist is empty.</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/wishlist');
            dispatch(toggleWishlist());
        }}>
            GO TO WISHLIST
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    wishlistItems: selectWishlistItems
});

export default withRouter(connect(mapStateToProps)(WishlistDropDown));