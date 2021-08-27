import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import recipeReducer from './reducers/recipe';
import loadingReducer from './reducers/loading';

const rootReducer = combineReducers({ recipe: recipeReducer, loading: loadingReducer });
const initialState = {};
const middleware = [thunk];

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));

export default store;
