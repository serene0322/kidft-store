import { createStore, applyMiddleware } from "redux";

//good to use when debugging redux code
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

