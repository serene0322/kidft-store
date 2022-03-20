import WishlistActionTypes from "./wishlist.types";

export const toggleWishlist = () => ({
    type: WishlistActionTypes.TOGGLE_WISHLIST
});

export const addWishlist = item => ({
    type: WishlistActionTypes.ADD_WISHLIST,
    payload: item
});