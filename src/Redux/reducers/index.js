import { combineReducers } from "@reduxjs/toolkit";
import identityReducer from "./identity.reducers";

export default combineReducers({
    identity: identityReducer,
});