import { createStore, applyMiddleware } from "redux";

//allow our browser to cache our store
import { persistStore } from "redux-persist";

//good to use when debugging redux code
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

//only apply the logger when in development 
if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

const persist = {
    store,
    persistor,
};

export default persist;

