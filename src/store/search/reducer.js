import {
    SEARCH_STARTED,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    CLEAR_SEARCH_RESULTS
} from "./types";

const initialState = {
    searchStatus: '',
    searchResults: ''
};

export function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_STARTED:
            return {
                ...state,
                searchStatus: 'operation in progress'
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                searchStatus: 'operation successful',
                searchResults: action.payload
            };
        case SEARCH_FAILURE:
            return {
                ...state,
                searchStatus: 'operation is failed',
                searchResults: action.payload
            };
        case CLEAR_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: ''
            };
        default:
            return state;
    }
}