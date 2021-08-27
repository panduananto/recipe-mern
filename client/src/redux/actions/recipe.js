import * as api from '../../api/index';

import { CREATE_RECIPE } from '../constants/recipe';
import { START_LOADING, STOP_LOADING } from '../constants/loading';

const createRecipe = (recipe) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createRecipe(recipe);

    dispatch({ type: CREATE_RECIPE, payload: data });
    dispatch({ type: STOP_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export { createRecipe };
