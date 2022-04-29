import {
    LOADING_START,
    LOADING_END,
    NAMESPACE
} from "../constants/common.constants";

export const startLoading = (ns=NAMESPACE) => {
    return {
        type: `${ns}_${LOADING_START}`
    }
}

export const stopLoading = (ns = NAMESPACE) => {
    return {
        type: `${ns}_${LOADING_END}`
    }
}