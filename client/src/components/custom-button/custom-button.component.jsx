import React from "react";

import './custom-button.styles.scss';

const CustomButton = ({ children, addCart, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} ${addCart ? 'addCart' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;