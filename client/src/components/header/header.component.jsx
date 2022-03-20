import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import WishlistIcon from "../wishlist-icon/wishlist-icon.componnet";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import WishlistDropDown from "../wishlist-dropdown/wishlist-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectWishlistHidden } from "../../redux/wishlist/wishlist.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

//special syntax to import SVG file
import { ReactComponent as Logo } from '../../assets/logo.svg'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.style";

const Header = ({ currentUser, hidden, hiddenWish, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            {
                currentUser ?
                    <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <WishlistIcon />
            <CartIcon />
        </OptionsContainer>
        {hiddenWish ? null : <WishlistDropDown />}
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

//the state is the root reducer
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
    hiddenWish: selectWishlistHidden
    
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);