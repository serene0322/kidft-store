//the actual base reducer object that represents all of the state of our application
//combine all other states together
import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer
});