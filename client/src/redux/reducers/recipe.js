import { CREATE_RECIPE, FETCH_ALL_RECIPE } from '../constants/recipe';

const INITIAL_STATE = [];

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_RECIPE:
      return action.payload;
    case CREATE_RECIPE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default recipeReducer;
