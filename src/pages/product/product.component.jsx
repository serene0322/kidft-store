import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import CustomButton from "../../components/custom-button/custom-button.component"

import { selectCollection } from "../../redux/shop/shop.selectors";
import { addItem } from "../../redux/cart/cart.actions";

import SimpleImageSlider from "react-simple-image-slider";

import './product.styles.scss';

const ProductPage = ({ collection, match, history, addItem }) => {
    const { items } = collection;
    
    const image = items[match.params.itemId - 1].imageUrl;

    //convert the format to meet the slider requirement
    const images = image.map(i => ({'url': i}));
    
    return (
        <div className='product-page'>

            <div className='slider'>
                <SimpleImageSlider 
                    width={550}
                    height={600}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                />
            </div>
            <div className='product-detail'>
                <h5 className='category'>{match.params.collectionId.toUpperCase()} / </h5>
                <h1 className='name'>
                    {items[match.params.itemId - 1].name}
                </h1>
                <p className='desc'>
                    {items[match.params.itemId - 1].desc}
                </p>
                <h3 className='price'>
                    RM {items[match.params.itemId - 1].price.toFixed(2)}
                </h3>
                <div className='btns'>
                    <CustomButton onClick={() => addItem(items[match.params.itemId - 1])}>Add To Cart</CustomButton>
                    <CustomButton onClick={() => {
                        history.push('/checkout');
                    }} addCart>
                        GO TO CART
                    </CustomButton>
                </div>
                
            </div>
        
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductPage));

