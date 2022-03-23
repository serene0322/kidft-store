import React from "react";
import { connect } from "react-redux";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { toast } from "react-toastify";
import { clearCart } from "../../redux/cart/cart.actions";

const StripeCheckoutButton = ({ price, cartItem, clearCart }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JyxnYA25hMsHVIHihdM8A7WJUGy9Ze8aPnasgzrHDQBBGEWBAChGbT8btVFJg2r1NbJsSRoLwYwy8qlCtu2ubQq00DOHMr7eS';

    //make a request to payment route and pass in the token
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            toast.success('Payment Successful');
            clearCart(cartItem);
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            toast.error('There was an issue with your payment. Please make sure you use the provided credit card.');
        });
        
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Kidft Store'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/cE3.svg'
            description={`Your total is RM${price.toFixed(2)}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            currency="MYR"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

const mapDispatchToProps = dispatch => ({
    clearCart: item => dispatch(clearCart(item))
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);