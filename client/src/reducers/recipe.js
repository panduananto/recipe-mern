const recipeReducer = (recipe = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_RECIPE':
      return recipe;
    case 'CREATE_RECIPE':
      return [...recipe, action.payload];
    default:
      return recipe;
  }
};

export default recipeReducer;
