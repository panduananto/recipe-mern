import { CREATE_RECIPE, FETCH_ALL_RECIPE, FETCH_RECIPE_BY_ID } from '../constants/recipe';

const INITIAL_STATE = {
  recipes: [],
};

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_RECIPE:
      return {
        recipes: [...action.payload],
      };
    case FETCH_RECIPE_BY_ID:
      return {
        recipe: action.payload,
      };
    case CREATE_RECIPE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default recipeReducer;
