import wtf from "wtf_wikipedia";
import {
    GET_CONTENT_FAILURE,
    GET_CONTENT_STARTED,
    GET_CONTENT_SUCCESS
} from "./types";

export const getContent = (target) => {
    return dispatch => {
        dispatch(getContentStarted());

        wtf.fetch(target)
            .then(res => {
                dispatch(getContentSuccess(res.json()));
            })
            .catch(err => {
                dispatch(getContentFailure(err.message));
            });
    };
};

const getContentSuccess = serverReport => ({
    type: GET_CONTENT_SUCCESS,
    payload: serverReport
});

const getContentStarted = () => ({
    type: GET_CONTENT_STARTED
});

const getContentFailure = error => ({
    type: GET_CONTENT_FAILURE,
    payload: {
        error
    }
});
