import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    //.keys - get us all the keys of object that we pass into it and give it into array format
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    )
);