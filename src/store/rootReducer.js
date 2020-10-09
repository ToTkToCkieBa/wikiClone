import { combineReducers } from 'redux';
import {searchReducer} from "./search/reducer";
import {contentReducer} from "./content/reducer";
import {imagesReducer} from "./images/reducer";

export const rootReducer = combineReducers({
    search: searchReducer,
    content: contentReducer,
    images: imagesReducer
})