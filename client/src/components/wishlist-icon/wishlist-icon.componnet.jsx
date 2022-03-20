import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleWishlist } from "../../redux/wishlist/wishlist.actions";
import { selectWishlistItemsCount } from "../../redux/wishlist/wishlist.selectors";

import { ReactComponent as WishIcon } from '../../assets/wishlist.svg';

import './wishlist-icon.styles.scss';

const WishlistIcon = ({ toggleWishlist, wishlistCount }) => (
    <div className='wishlist-icon' onClick={toggleWishlist}>
        <WishIcon className='wish-icon' />
        <span className='wish-count'>{wishlistCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleWishlist: () => dispatch(toggleWishlist())
});

const mapStateToProps = createStructuredSelector({
    wishlistCount: selectWishlistItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(WishlistIcon);