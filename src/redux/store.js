import { createStore, applyMiddleware } from "redux";

//allow our browser to cache our store
import { persistStore } from "redux-persist";

//good to use when debugging redux code
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

const persist = {
    store,
    persistor,
};

export default persist;

