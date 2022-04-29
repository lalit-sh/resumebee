import { NAMESPACE, LOADING_END, LOADING_START } from "../constants/common.constants";

export default function ({ type, payload, namespace = NAMESPACE }) {
    switch (type) {
        case `${namespace}_${LOADING_START}`:
            return {
                loading: true
            }
        case `${namespace}_${LOADING_END}`:
            return {
                loading: false
            }
        default:
            return null;
    }
}