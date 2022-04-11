import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total, history }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>

        
            {
                //if > 0
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                    ))
                    //else
                ) : (
                    <span className='empty-message'>Your cart is empty.</span>
                )
            }
        
        <div className='total'>
            <span>TOTAL: RM{total.toFixed(2)}</span>
        </div>

        <div>
            {
                cartItems.length ? (
                    <div className='test-warning'>
                        *Please use the following credit card for payments*
                        <br />
                        5555 5555 5555 4444 - Exp: 12/31 - CVV: 123
                        <br />
                        <StripeCheckoutButton price={total} />
                    </div>
                    //else
                ) : (
                    <CustomButton onClick={() => {
                        history.push('/shop');
                    }}>
                        SHOP NOW
                    </CustomButton>
                )
            }
        </div>

    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);