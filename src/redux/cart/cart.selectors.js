import { createSelector } from "reselect";

//input selector
const selectCart = state => state.cart;

//mamorize selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumlatedQuantity, cartItem) => 
                accumlatedQuantity + cartItem.quantity, 
            0
        )
);