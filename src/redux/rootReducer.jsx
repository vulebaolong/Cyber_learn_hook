import { combineReducers } from "@reduxjs/toolkit";
import appChat from "./slices/appChat";

const rootReducer = combineReducers({
    appChat,
});

export default rootReducer;
