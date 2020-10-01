import { combineReducers } from 'redux';
import {searchReducer} from "./search/reducer";
import {contentReducer} from "./content/reducer";

export const rootReducer = combineReducers({
    search: searchReducer,
    content: contentReducer
})