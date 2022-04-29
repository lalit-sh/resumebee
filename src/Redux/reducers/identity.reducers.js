import {
    NAMESPACE,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_SUCCESS
} from "../constants/identity.constants";
import commonReducers from "./common.reducers";

const initialState = {
    user: false
};

export default (state = initialState, { type, payload }) => {
    switch(type){
        case USER_LOGIN_SUCCESS:
            return {
                user: true
            }
        case USER_LOGOUT_SUCCESS:
            return {
                user: false
            }
        default:
            let commonDispatch = commonReducers({namespace: NAMESPACE, type: type});
            if(commonDispatch){
                return commonDispatch;
            }
            return state;
    }
}