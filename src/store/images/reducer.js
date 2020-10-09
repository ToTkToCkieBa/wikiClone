import {
    ADD_NEW_IMG,
    OPEN_GALLERY,
    CLOSE_GALLERY,
    NEXT_IMG,
    PREV_IMG
} from "./types";

const initialState = {
    images: [],
    isOpen: false,
    currentImg: '',
    posY: ''
};

export function imagesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_IMG:
            return {
                ...state,
                images: [...state.images, action.payload]
            };
        case OPEN_GALLERY:
            return {
                ...state,
                currentImg: action.payload.id,
                posY: action.payload.posY,
                isOpen: true
            };
        case CLOSE_GALLERY:
            return {
                ...state,
                isOpen: false,
            };
        case NEXT_IMG:
            return {
                ...state,
                currentImg: action.payload
            };
        case PREV_IMG:
            return {
                ...state,
                currentImg: action.payload
            };
        default:
            return state;
    }
}