import { createSelector } from "reselect";

//input selector
const selectCart = state => state.cart;

//mamorize selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
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

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatePrice, cartItem) => 
                accumulatePrice + cartItem.quantity * cartItem.price,
            0
        )
);