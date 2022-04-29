import {
    NAMESPACE,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_SUCCESS
} from "../constants/identity.constants";
import { startLoading, stopLoading } from "../dispatchers/common.dispatchers";


export const AuthenticateUser = () => d => {
    startLoading(NAMESPACE);
    d({
        type: USER_LOGIN_SUCCESS
    });
    stopLoading(NAMESPACE);
}

export const Logout = () => d => {
    startLoading(NAMESPACE);
    d({
        type: USER_LOGOUT_SUCCESS
    });
    stopLoading(NAMESPACE);
}