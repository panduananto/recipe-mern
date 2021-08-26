import * as api from '../api/index';

const createRecipe = (recipe) => async () => {
  try {
    const { data } = await api.createRecipe(recipe);

    return { type: 'CREATE_RECIPE', payload: data };
  } catch (error) {
    console.log(error);
  }
};

export { createRecipe };
