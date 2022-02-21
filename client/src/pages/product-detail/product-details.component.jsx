import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

import ProductDetailPageContainer from "../product/product.container";


const ProductDetailsPage = ({ fetchCollectionsStart, match }) => {

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div className='product-details'>
            <Route
                path={`${match.path}`}
                component={ProductDetailPageContainer}
            />
        </div>
    );

};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ProductDetailsPage);