import React from "react";
import StripeCheckout from 'react-stripe-checkout';

import { toast } from "react-toastify";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JyxnYA25hMsHVIHihdM8A7WJUGy9Ze8aPnasgzrHDQBBGEWBAChGbT8btVFJg2r1NbJsSRoLwYwy8qlCtu2ubQq00DOHMr7eS';

    const onToken = token => {
        console.log(token);
        toast.success('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Kidft Store'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/cE3.svg'
            description={`Your total is RM${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            currency="MYR"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;