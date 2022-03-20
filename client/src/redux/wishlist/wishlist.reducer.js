import WishlistActionTypes from './wishlist.types';
import { addItemToWishlist } from './wishlist.utils';

const INITIAL_STATE = {
    hidden: true,
    wishlistItems: []
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WishlistActionTypes.TOGGLE_WISHLIST:
            return {
                ...state,
                hidden: !state.hidden
            };
        case WishlistActionTypes.ADD_WISHLIST:
            return {
                ...state,
                wishlistItems: addItemToWishlist(state.wishlistItems, action.payload)
            };
        default:
            return state;
    }
};

export default wishlistReducer;