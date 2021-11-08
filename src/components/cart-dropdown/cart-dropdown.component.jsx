import React from "react";

import { withRouter } from 'react-router-dom';

import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.styles.scss';

const CartDropdown = ({ history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton onClick={() => history.push('./checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
);

export default withRouter(CartDropdown);

