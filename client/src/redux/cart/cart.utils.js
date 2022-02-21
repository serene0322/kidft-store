//allow us to keep our files clean and organize functions that we may need in multiple files in one location

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    //if exist, return a new array (new version of state) so can re-render
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            //if same item, create a new object which will have the cart item and quantity + 1
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                //else of not match, just return the original cart item
                : cartItem
        )
    }
    //if the cart item is not found inside array, return a new array with all existing cart items that already there
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );
    
    //remove the item from cart if it is the last quantity
    if (existingCartItem.quantity === 1) {
        //if the id not the one need remove, keep the item
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    //if quantity is not 1 and we know there is existing cart item
    return cartItems.map(
        cartItem =>
            cartItem.id === cartItemToRemove.id ?
                { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
    );
};