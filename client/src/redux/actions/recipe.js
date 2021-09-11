import * as api from '../../api/index';

import { CREATE_RECIPE, FETCH_ALL_RECIPE, FETCH_RECIPE_BY_ID } from '../constants/recipe';
import { START_LOADING, STOP_LOADING } from '../constants/loading';

const createRecipe = (recipe) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createRecipe(recipe);

    dispatch({ type: CREATE_RECIPE, payload: data });
    dispatch({ type: STOP_LOADING });
  } catch (error) {
    console.log(error);
    dispatch({ type: STOP_LOADING });
  }
};

const fetchRecipe = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchRecipe();

    dispatch({ type: STOP_LOADING });
    dispatch({ type: FETCH_ALL_RECIPE, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: STOP_LOADING });
  }
};

const fetchRecipeById = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchRecipeById(id);

    dispatch({ type: STOP_LOADING });
    dispatch({ type: FETCH_RECIPE_BY_ID, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: STOP_LOADING });
  }
};

export { createRecipe, fetchRecipe, fetchRecipeById };
