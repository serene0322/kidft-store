import { toast } from "react-toastify";

export const addItemToWishlist = (wishlistItems, wishlistItemToAdd) => {
    const existingWishlistItem = wishlistItems.find(wishlistItem => wishlistItem.id === wishlistItemToAdd.id);

    if(existingWishlistItem) {
        
        return wishlistItems.map(wishlistItem => 
            wishlistItem.id === wishlistItemToAdd.id
            ? (toast.error('This item is already in your wishlist'), wishlistItem)
            : wishlistItem
        )
    }

    return [...wishlistItems, {...wishlistItemToAdd}]
};

