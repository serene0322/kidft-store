//the actual base reducer object that represents all of the state of our application
//combine all other states together
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //local storage

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] //contains the string names of any reducer that want to store
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

//return back modified version of rootReducer with persistConfig on top of it
export default persistReducer(persistConfig,rootReducer);