import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";
import { addWishlist } from "../../redux/wishlist/wishlist.actions";

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem, addWishlist, history, match }) => {
    const { name, price, imageUrl } = item;

    return (
        <div className='collection-item1'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl[0]})`
                }}
                onClick={() => history.push(`${match.url}/${item.id}`)}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>RM{price.toFixed(2)}</span>
            </div>
            <div className='button1'>
            <CustomButton onClick={() => addWishlist(item)} addWishlist>Add To Wishlist</CustomButton>
                <CustomButton onClick={() => addItem(item)} inverted>Add To Cart</CustomButton>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    addWishlist: item => dispatch(addWishlist(item))
});

export default connect(null, mapDispatchToProps)(withRouter(CollectionItem));