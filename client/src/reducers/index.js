import { combineReducers } from 'redux';

import recipeReducer from './recipe';

const rootReducer = combineReducers({ recipe: recipeReducer });

export default rootReducer;
