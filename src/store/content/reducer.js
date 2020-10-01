import {
    GET_CONTENT_SUCCESS,
    GET_CONTENT_STARTED,
    GET_CONTENT_FAILURE
} from "./types";

const initialState = {
    getContentStatus: '',
    getContentResults: ''
};

export function contentReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CONTENT_STARTED:
            return {
                ...state,
                getContentStatus: 'operation in progress'
            };
        case GET_CONTENT_SUCCESS:
            return {
                ...state,
                getContentStatus: 'operation successful',
                getContentResults: action.payload
            };
        case GET_CONTENT_FAILURE:
            return {
                ...state,
                getContentStatus: 'operation is failed',
                getContentResults: action.payload
            };
        default:
            return state;
    }
}