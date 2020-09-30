import axios from 'axios';
import {
    SEARCH_STARTED,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    CLEAR_SEARCH_RESULTS
} from "./types";





export const search = (url) => {
    return dispatch => {
        dispatch(searchStarted());

        axios
            .get(url)
            .then(res => {
                dispatch(searchSuccess(res.data));
            })
            .catch(err => {
                dispatch(searchFailure(err.message));
            });
    };
};

const searchSuccess = serverReport => ({
    type: SEARCH_SUCCESS,
    payload: serverReport
});

const searchStarted = () => ({
    type: SEARCH_STARTED
});

const searchFailure = error => ({
    type: SEARCH_FAILURE,
    payload: {
        error
    }
});

export const clearSearchResults = () => ({
    type: CLEAR_SEARCH_RESULTS
});

