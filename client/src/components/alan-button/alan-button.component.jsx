import { useEffect, useState, useCallback, useMemo } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";

import { toggleCart, addItem, removeItem, clearCart, clearItemFromCart } from '../../redux/cart/cart.actions';
import { toggleWishlist, addWishlist, clearItemFromWishlist, clearWishlist } from '../../redux/wishlist/wishlist.actions';
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectWishlistHidden } from '../../redux/wishlist/wishlist.selectors';
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";


import alanBtn from '@alan-ai/alan-sdk-web';

const COMMANDS = {
    OPEN_CART: 'open-cart',
    OPEN_WISHLIST: 'open-wishlist',
    CLOSE_CART: 'close-cart',
    CLOSE_WISHLIST: 'close-wishlist',
    ADD_ITEM: 'add-item',
    ADD_WISHLIST: 'add-wishlist',
    REMOVE_ITEM: 'remove-item',
    CLEAR_CART: 'clear-cart',
    CLEAR_WISHLIST: 'clear-wishlist',
    CLEAR_ITEM_FROM_CART: 'clear-from-cart',
    CLEAR_ITEM_FROM_WISHLIST: 'clear-from-wishlist',
    GO_HOME: 'go-home',
    GO_HAT: 'go-hats',
    GO_SHOES: 'go-shoes',
    GO_GIRLS: 'go-girls',
    GO_BAGS: 'go-bags',
    GO_BOYS: 'go-boys',
    GO_SHOP: 'go-shop',
    GO_CONTACT: 'go-contact',
    GO_SIGNIN: 'go-signin',
    GO_CHECKOUT: 'go-checkout',
    GO_WISHLIST: 'go-wishlist',
    GO_VIDEOCALL: 'go-video-call'
}

const KidftAlanButton = ({ hidden, hiddenWishlist, toggleCart, toggleWishlist, collections, addItem, removeItem, clearCart, clearItem, addWishlist, clearItemFromWishlist, clearWishlist }) => {

    const allNames = useMemo(() => [], []);
    const allItems = useMemo(() => [], []);

    for (const collection of Object.values(collections)) {
        for(const item of collection.items) {
            allItems.push(item);
            allNames.push(item.name.toLowerCase());
        }
    }

    //const collectionsName = collections.map(item => item.items.map(item => item));
    //console.log(allItems);
    //console.log(allNames.join("|"));

    const [alanInstance, setAlanInstance] = useState();

    const history = useHistory();

    const openCart = useCallback(() => {
        if(hidden){
            alanInstance.playText("Ok! I have opened the cart for you.")
            toggleCart()
        } else {
            alanInstance.playText("The cart is already opened.")
        }
    }, [alanInstance, toggleCart, hidden]);

    const openWishlist = useCallback(() => {
        if(hiddenWishlist){
            alanInstance.playText("Ok! I have opened the wishlist for you.")
            toggleWishlist()
        } else {
            alanInstance.playText("The wishlist is already opened.")
        }
    }, [alanInstance, toggleWishlist, hiddenWishlist]);

    const closeCart = useCallback(() => {
        if(hidden === false){
            alanInstance.playText("Ok! I have closed the cart for you.")
            toggleCart()
        } else {
            alanInstance.playText("You haven't open the cart.")
        }
    }, [alanInstance, toggleCart, hidden]);

    const closeWishlist = useCallback(() => {
        if(hiddenWishlist === false){
            alanInstance.playText("Ok! I have closed the wishlist for you.")
            toggleWishlist()
        } else {
            alanInstance.playText("You haven't open the wishlist.")
        }
    }, [alanInstance, toggleWishlist, hiddenWishlist]);

    const goHome = useCallback(() => {
        alanInstance.playText("Navigating to homepage.")
        history.push("/")
    }, [alanInstance, history]);

    const goHats = useCallback(() => {
        alanInstance.playText("Navigating to hats collection page.")
        history.push("/shop/hats")
    }, [alanInstance, history]);

    const goShoes = useCallback(() => {
        alanInstance.playText("Navigating to shoes collection page.")
        history.push("/shop/shoes")
    }, [alanInstance, history]);

    const goGirls = useCallback(() => {
        alanInstance.playText("Navigating to girls collection page.")
        history.push("/shop/girls")
    }, [alanInstance, history]);

    const goBags = useCallback(() => {
        alanInstance.playText("Navigating to bags collection page.")
        history.push("/shop/bags")
    }, [alanInstance, history]);

    const goBoys = useCallback(() => {
        alanInstance.playText("Navigating to boys collection page.")
        history.push("/shop/boys")
    }, [alanInstance, history]);

    const goShop = useCallback(() => {
        alanInstance.playText("Navigating to shop page.")
        history.push("/shop")
    }, [alanInstance, history]);

    const goContact = useCallback(() => {
        alanInstance.playText("Navigating to contact page.")
        history.push("/contact")
    }, [alanInstance, history]);

    const goSignin = useCallback(() => {
        alanInstance.playText("Navigating to sign in or sign up page.")
        history.push("/signin")
    }, [alanInstance, history]);

    const goCheckout = useCallback(() => {
        alanInstance.playText("Navigating to checkout page.")
        history.push("/checkout")
    }, [alanInstance, history]);

    const goWishlist = useCallback(() => {
        alanInstance.playText("Navigating to wishlist page.")
        history.push("/wishlist")
    }, [alanInstance, history]);

    const goVideo = useCallback(() => {
        alanInstance.playText("Navigating to video call page.")
        history.push("/videocall")
    }, [alanInstance, history]);

    const addToCart = useCallback(({ detail: { name } }) => {
        
        if(allNames.includes(name.toLowerCase())) {
            let item = allItems.find(o => o.name.toLowerCase() === name.toLowerCase())
            alanInstance.playText(`I have add ${name} into cart.`)
            addItem(item);
        } else {
            alanInstance.playText("Cannot add the item.")
        }
    }, [alanInstance, allNames, allItems, addItem]);

    const addToWishlist = useCallback(({ detail: { name } }) => {
        
        if(allNames.includes(name.toLowerCase())) {
            let item = allItems.find(o => o.name.toLowerCase() === name.toLowerCase())
            alanInstance.playText(`I have add ${name} into wishlist.`)
            addWishlist(item);
        } else {
            alanInstance.playText("Cannot add the item.")
        }
    }, [alanInstance, allNames, allItems, addWishlist]);

    const removeFromCart = useCallback(({ detail: { name } }) => {
        
        if(allNames.includes(name.toLowerCase())) {
            let item = allItems.find(o => o.name.toLowerCase() === name.toLowerCase())
            alanInstance.playText(`I have removed ${name} from cart.`)
            removeItem(item);
        } else {
            alanInstance.playText("The item is not available in cart.")
        }
    }, [alanInstance, allNames, allItems, removeItem]);

    const clearTheCart = useCallback(() => {
        alanInstance.playText("I have cleared the cart for you.")
        clearCart();
    }, [alanInstance, clearCart]);

    const clearTheWishlist = useCallback(() => {
        alanInstance.playText("I have cleared the wishlist for you.")
        clearWishlist();
    }, [alanInstance, clearWishlist]);

    const clearFromCart = useCallback(({ detail: { name } }) => {
        
        if(allNames.includes(name.toLowerCase())) {
            //console.log(name);
            let item = allItems.find(o => o.name.toLowerCase() === name.toLowerCase())
            alanInstance.playText(`I have cleared ${name} from cart.`)
            //console.log(item);
            clearItem(item);
        } else {
            alanInstance.playText("The item is not exist in cart.")
        }
    }, [alanInstance, allNames, allItems, clearItem]);

    const clearFromWishlist = useCallback(({ detail: { name } }) => {
        
        if(allNames.includes(name.toLowerCase())) {
            //console.log(name);
            let item = allItems.find(o => o.name.toLowerCase() === name.toLowerCase())
            alanInstance.playText(`I have cleared ${name} from wishlist.`)
            //console.log(item);
            clearItemFromWishlist(item);
        } else {
            alanInstance.playText("The item is not exist in wishlist.")
        }
    }, [alanInstance, allNames, allItems, clearItemFromWishlist]);

    useEffect(() => {
        window.addEventListener(COMMANDS.OPEN_CART, openCart);
        window.addEventListener(COMMANDS.OPEN_WISHLIST, openWishlist);
        window.addEventListener(COMMANDS.CLOSE_CART, closeCart);
        window.addEventListener(COMMANDS.CLOSE_WISHLIST, closeWishlist);
        window.addEventListener(COMMANDS.ADD_ITEM, addToCart);
        window.addEventListener(COMMANDS.REMOVE_ITEM, removeFromCart);
        window.addEventListener(COMMANDS.ADD_WISHLIST, addToWishlist);
        window.addEventListener(COMMANDS.CLEAR_ITEM_FROM_WISHLIST, clearFromWishlist);
        window.addEventListener(COMMANDS.GO_HOME, goHome);
        window.addEventListener(COMMANDS.GO_HAT, goHats);
        window.addEventListener(COMMANDS.GO_SHOES, goShoes);
        window.addEventListener(COMMANDS.GO_GIRLS, goGirls);
        window.addEventListener(COMMANDS.GO_BAGS, goBags);
        window.addEventListener(COMMANDS.GO_BOYS, goBoys);
        window.addEventListener(COMMANDS.GO_SHOP, goShop);
        window.addEventListener(COMMANDS.GO_CONTACT, goContact);
        window.addEventListener(COMMANDS.GO_SIGNIN, goSignin);
        window.addEventListener(COMMANDS.GO_CHECKOUT, goCheckout);
        window.addEventListener(COMMANDS.GO_WISHLIST, goWishlist);
        window.addEventListener(COMMANDS.GO_VIDEOCALL, goVideo);
        window.addEventListener(COMMANDS.CLEAR_CART, clearTheCart);
        window.addEventListener(COMMANDS.CLEAR_ITEM_FROM_CART, clearFromCart);
        window.addEventListener(COMMANDS.CLEAR_WISHLIST, clearTheWishlist);

        return () => {
            window.removeEventListener(COMMANDS.OPEN_CART, openCart);
            window.removeEventListener(COMMANDS.OPEN_WISHLIST, openWishlist);
            window.removeEventListener(COMMANDS.CLOSE_CART, closeCart);
            window.removeEventListener(COMMANDS.CLOSE_WISHLIST, closeWishlist);
            window.removeEventListener(COMMANDS.ADD_ITEM, addToCart);
            window.removeEventListener(COMMANDS.REMOVE_ITEM, removeFromCart);
            window.removeEventListener(COMMANDS.ADD_WISHLIST, addToWishlist);
            window.removeEventListener(COMMANDS.CLEAR_ITEM_FROM_WISHLIST, clearFromWishlist);
            window.removeEventListener(COMMANDS.GO_HOME, goHome);
            window.removeEventListener(COMMANDS.GO_HAT, goHats);
            window.removeEventListener(COMMANDS.GO_SHOES, goShoes);
            window.removeEventListener(COMMANDS.GO_GIRLS, goGirls);
            window.removeEventListener(COMMANDS.GO_BAGS, goBags);
            window.removeEventListener(COMMANDS.GO_BOYS, goBoys);
            window.removeEventListener(COMMANDS.GO_SHOP, goShop);
            window.removeEventListener(COMMANDS.GO_CONTACT, goContact);
            window.removeEventListener(COMMANDS.GO_SIGNIN, goSignin);
            window.removeEventListener(COMMANDS.GO_CHECKOUT, goCheckout);
            window.removeEventListener(COMMANDS.GO_WISHLIST, goWishlist);
            window.removeEventListener(COMMANDS.GO_VIDEOCALL, goVideo);
            window.removeEventListener(COMMANDS.CLEAR_CART, clearTheCart);
            window.removeEventListener(COMMANDS.CLEAR_WISHLIST, clearTheWishlist);
            window.removeEventListener(COMMANDS.CLEAR_ITEM_FROM_CART, clearFromCart);
        }
    }, [alanInstance, openCart, openWishlist, closeCart, closeWishlist, addToCart, removeFromCart, addToWishlist, clearFromWishlist, clearTheWishlist, goHome, goHats, goShoes, goGirls, goBags, goBoys, goShop, goContact, goSignin, goCheckout, goWishlist, goVideo, clearTheCart, clearFromCart]);

    useEffect(() => {
        if (alanInstance != null) return
        setAlanInstance(
            alanBtn({
                top: '100px',
                left: '38px',
                key: 'afcc7426d0bbb9b606404ca1afdb456c2e956eca572e1d8b807a3e2338fdd0dc/stage',
                onCommand: ({ command, payload }) => {
                    window.dispatchEvent(new CustomEvent(command, { detail: payload }));
                }
            })
        )
    }, [alanInstance]);

    return null;
};

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    hiddenWishlist: selectWishlistHidden,
    collections: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart()),
    toggleWishlist: () => dispatch(toggleWishlist()),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearCart: item => dispatch(clearCart(item)),
    clearItem: item => dispatch(clearItemFromCart(item)),
    addWishlist: item => dispatch(addWishlist(item)),
    clearWishlist: item => dispatch(clearWishlist(item)),
    clearItemFromWishlist: item => dispatch(clearItemFromWishlist(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(KidftAlanButton);