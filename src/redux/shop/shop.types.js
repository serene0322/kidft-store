const ShopActionTypes = {
    FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START', //tells redux we start to fetch the data 
    FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS', //come back from us with a successful API request
    FETCH_COLLECTIONS_FAILURE: 'FETCH_COLLECTIONS_FAILURE' //eg. when server down / internet is poor
};

export default ShopActionTypes;