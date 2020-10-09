import {
    ADD_NEW_IMG,
    CLOSE_GALLERY,
    OPEN_GALLERY,
    NEXT_IMG,
    PREV_IMG
} from "./types";

export const addNewImg = img => ({
    type: ADD_NEW_IMG,
    payload: img
});

export const openGallery = (data) => ({
    type: OPEN_GALLERY,
    payload: data
});

export const closeGallery = () => ({
    type: CLOSE_GALLERY
});

export const nextImage = (id) => ({
    type: NEXT_IMG,
    payload: id
});

export const prevImage = (id) => ({
    type: PREV_IMG,
    payload: id
});


