import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem, history, match }) => {
    const { name, price, imageUrl } = item;

    return (
        <div className='collection-item'>
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
            <CustomButton onClick={() => addItem(item)} inverted>Add To Cart</CustomButton>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(withRouter(CollectionItem));