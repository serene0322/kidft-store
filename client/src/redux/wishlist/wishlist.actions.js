import WishlistActionTypes from "./wishlist.types";

export const toggleWishlist = () => ({
    type: WishlistActionTypes.TOGGLE_WISHLIST
});

export const addWishlist = item => ({
    type: WishlistActionTypes.ADD_WISHLIST,
    payload: item
});

export const clearItemFromWishlist = item => ({
    type: WishlistActionTypes.CLEAR_ITEM_FROM_WISHLIST,
    payload: item
});

export const clearWishlist = () => ({
    type: WishlistActionTypes.CLEAR_WISHLIST
});